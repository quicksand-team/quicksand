import base from './rules/base.js';
import react from './rules/react.js';
import javascript from './rules/javascript.js';
import typescript from './rules/typescript.js';
import prettierConfig from 'eslint-config-prettier';

export default [
  'eslint:recommended',
  base,
  javascript,
  typescript,
  react,
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
];
