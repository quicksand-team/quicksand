import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import typescriptParser from '@typescript-eslint/parser';

import vuePluginConfigs from './configs/eslint-plugin-vue.js';

export default {
  files: ['**/*.vue'],
  plugins: {
    vue: vuePlugin,
  },
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: typescriptParser, //'@typescript-eslint/parser',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    ...vuePluginConfigs['vue3-recommended'].rules,
  },
  settings: {
    ...vuePluginConfigs['vue3-recommended'].settings,
  },
};
