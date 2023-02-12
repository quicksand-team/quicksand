import base from './lib/base.js';
import react from './lib/react.js';
import typescript from './lib/typescript.js';
import vue from './lib/vue.js';
import prettierConfig from 'eslint-config-prettier';

export default [
  'eslint:recommended',
  {
    ...base,
  },
  {
    ...typescript,
  },
  {
    ...react,
  },
  {
    ...vue,
  },
  {
    rules: {
      ...prettierConfig.rules,
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
];
