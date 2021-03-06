const path = require('path');

const {
  moduleRule,
  makeCssRule,
  makeCssModulesRule,
  makeSassRule,
  makeSassModulesRule,
  sassVariablesRule,
  assetsRule,
  svgReactRule,
  poRule,
} = require('../.webpack/rules');

module.exports = ({ config }) => {
  // Default config does not implicitly resolve .jsx files.
  config.resolve.extensions.push('.jsx');

  config.devServer = { stats: 'minimal' };

  // Default config only transforms .js files.
  config.module.rules[0].test = /\.jsx?$/i;

  config.module.rules = [
    // JS/JSX.
    config.module.rules[0],
    // Raw loader.
    config.module.rules[1],
    // Files (mp3 etc.).
    config.module.rules[4],

    // .mjs files.
    moduleRule,

    makeCssRule(),
    makeCssModulesRule(),
    makeSassRule(),
    makeSassModulesRule(),
    sassVariablesRule,

    assetsRule,
    svgReactRule,

    // Gettext PO files for i18n.
    poRule,
  ];

  config.resolve.modules.push(path.resolve(__dirname, '../src/renderer'));
  config.resolve.alias.shared = path.resolve(__dirname, '../src/shared');
  delete config.resolve.alias.react;

  return config;
};
