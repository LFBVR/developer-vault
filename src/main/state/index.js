const {
  IS_INITIALIZED,
  GET_STORE_FILE_PATH,
  SET_KEY,
  SAVE_STATE,
  LOAD_STATE,
} = require('common/events');

const { storeFilePath, storeFileEncryptionAlgorithm } = require('../config/constants');
const { on, removeListener } = require('../ipc');
const { isInitialized, persistEncryptedState, decryptFromFile } = require('./encrypt');

let KEY;

/**
 * Set the key.
 * Used to register the user.
 * Sets the key only if app was not initialized.
 *
 * @param {string} key - The key as an utf8 string.
 */
function onSetKey(key) {
  if (!isInitialized(storeFilePath)) {
    KEY = key;
  }
}

/**
 * Handler function getting the store file path.
 *
 * @returns {string} - The store file path.
 */
function onGetStoreFilePath() {
  return storeFilePath;
}

/**
 * Handler function for the "IS_INITIALIZED" event.
 *
 * @returns {bool} Whether the user has once registered.
 */
function onIsInitialized() {
  return isInitialized(storeFilePath);
}

/**
 * Handler function for the SAVE_STATE event.
 *
 * @async
 * @param {Object} state - State tree.
 */
function onSaveState(state) {
  return persistEncryptedState(state, KEY, storeFileEncryptionAlgorithm, storeFilePath);
}

/**
 * Handler function for the LOAD_STATE event.
 *
 * @async
 * @param {string} key - Key used at encryption, as an utf8 string.
 * @returns {Object} The state, or null if none saved.
 */
function onLoadState(key) {
  try {
    const state = decryptFromFile(key, storeFileEncryptionAlgorithm, storeFilePath);
    // if no error was thrown, we can save the key for later updates.
    KEY = key;
    return state;
  } catch (err) {
    // if an error was thrown, key was not correct. We unset it
    // to prevent unlucky encryption with a wrong key !
    KEY = undefined;
    throw err;
  }
}

/** Register the callbacks. */
function register() {
  on(IS_INITIALIZED, onIsInitialized);
  on(GET_STORE_FILE_PATH, onGetStoreFilePath);
  on(SET_KEY, onSetKey);
  on(SAVE_STATE, onSaveState);
  on(LOAD_STATE, onLoadState);
}

/** Unregister the callbacks. */
function cleanup() {
  removeListener(IS_INITIALIZED, onIsInitialized);
  removeListener(GET_STORE_FILE_PATH, onGetStoreFilePath);
  removeListener(SET_KEY, onSetKey);
  removeListener(SAVE_STATE, onSaveState);
  removeListener(LOAD_STATE, onLoadState);
}

module.exports = {
  register,
  cleanup,
};