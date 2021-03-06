import moment from 'moment';

import { updateLocale } from 'redux/stores/intl/actions';

export const LOCALE_STORAGE_KEY = 'locale';

/**
 * Returns browser defined locale if the browser allows it.
 *
 * @returns {string} - The browser defined locale.
 */
export const getBrowserLocale = () => {
  if (navigator.languages && navigator.languages.length) {
    // latest versions of Chrome and Firefox set this correctly
    return navigator.languages[0].substr(0, 2);
  }
  if (navigator.userLanguage) {
    // IE only
    return navigator.userLanguage.substr(0, 2);
  }
  if (navigator.language) {
    // latest versions of Chrome, Firefox, and Safari set this correctly
    return navigator.language.substr(0, 2);
  }
  return '';
};

/**
 * Looks for the presence of the locale in the storage.
 *
 * @returns {string|undefined} - The locale if found, undefined otherwise.
 */
export const getStoredLocale = () => localStorage.getItem(LOCALE_STORAGE_KEY);

/**
 * Stores locale in the storage.
 *
 * @param {string} locale - The locale to store.
 */
export const storeLocale = (locale) => {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
};

export const setHtmlLangAttribute = (locale) => {
  if (!document || !document.getElementsByTagName('html')[0]) {
    return;
  }
  document.getElementsByTagName('html')[0].setAttribute('lang', locale);
};

export const setLocale = async (store, locale = getStoredLocale() || getBrowserLocale()) => {
  const { default: bundle } = await import(`locales/${locale}`);

  moment.locale(locale);
  setHtmlLangAttribute(locale);

  return store.dispatch(updateLocale({
    ...bundle,
    locale,
  }));
};
