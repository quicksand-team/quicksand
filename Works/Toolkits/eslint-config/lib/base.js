import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import importPlugin from 'eslint-plugin-import';
import importPluginConfigs from './configs/eslint-plugin-import.js';

export default {
  files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.jsx'],
  plugins: {
    import: importPlugin,
  },
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: babelParser,
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        babelrc: false,
        configFile: false,
        presets: ['@babel/preset-env'],
      },
    },
    globals: {
      ...globals.es2021,
      ...globals.es5,
      ...globals.browser,
      ...globals.node,
      ...globals.commonjs,
    },
  },
  rules: {
    ...importPluginConfigs.recommended.rules,
  },
  settings: {
    ...importPluginConfigs.recommended.settings,
  },
};
