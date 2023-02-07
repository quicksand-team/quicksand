import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default {
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      project: ['**/tsconfig.json'],
    },
  },
  rules: {
    ...typescriptPlugin.configs.recommended.rules,
    // ...typescriptPlugin.configs['recommended-requiring-type-checking'].rules,
    ...importPlugin.configs.typescript.rules,
  },
};
