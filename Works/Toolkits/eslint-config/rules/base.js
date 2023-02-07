import globals from 'globals';
// import importPlugin from 'eslint-plugin-import';
// import aliImportsConfig from 'eslint-config-ali/rules/imports.js';

export default {
  plugins: {
    // import: importPlugin,
  },
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.es2021,
      ...globals.es5,
      ...globals.browser,
      ...globals.node,
      ...globals.commonjs,
    },
  },
  rules: {
    // ...importPlugin.configs.recommended.rules,
    // ...aliImportsConfig.rules,
  },
  settings: {
    // ...aliImportsConfig.settings,
  },
};
