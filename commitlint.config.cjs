const packages = [
  'prettier-config',
  'eslint-config',
  'typescript-config',
  'commitlint-config',
];

module.exports = {
  extends: ['@quicksand'],
  rules: {
    'scope-enum': [2, 'always', [...packages]],
    'scope-case': [0, 'always'],
    'scope-empty': [0, 'never'],
  },
};
