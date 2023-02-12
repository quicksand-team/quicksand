import babelParser from '@babel/eslint-parser';

export default {
  files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.jsx'],
  languageOptions: {
    parser: babelParser,
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        babelrc: false,
        configFile: false,
        presets: ['@babel/preset-env'],
      },
    },
  },
};
