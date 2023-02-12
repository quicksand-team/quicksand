export default {
  recommended: {
    rules: {
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/no-named-as-default': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-duplicates': 'warn',
    },
    settings: {},
  },
  errors: {
    rules: {
      'import/no-unresolved': 2,
      'import/named': 2,
      'import/namespace': 2,
      'import/default': 2,
      'import/export': 2,
    },
    settings: {},
  },
  warnings: {
    rules: {
      'import/no-named-as-default': 1,
      'import/no-named-as-default-member': 1,
      'import/no-duplicates': 1,
    },
    settings: {},
  },
  'stage-0': {
    rules: {
      'import/no-deprecated': 1,
    },
    settings: {},
  },
  react: {
    rules: {},
    settings: {
      'import/extensions': ['.js', '.jsx'],
    },
  },
  'react-native': {
    rules: {},
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.web.js', '.ios.js', '.android.js'],
        },
      },
    },
  },
  electron: {
    rules: {},
    settings: {
      'import/core-modules': ['electron'],
    },
  },
  typescript: {
    rules: {
      'import/named': 'off',
    },
    settings: {
      'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
  },
};
