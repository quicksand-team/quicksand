import vuePlugin from 'eslint-plugin-vue';

export default {
  files: ['**/*.vue'],
  plugins: {
    vue: vuePlugin,
  },
  languageOptions: {},
  rules: {
    ...vuePlugin.configs['vue3-recommended'],
  },
  settings: {},
};
