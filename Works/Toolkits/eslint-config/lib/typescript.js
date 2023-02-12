import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

import importPluginConfigs from './configs/eslint-plugin-import.js';
import typescriptPluginConfigs from './configs/@typescript-eslint_eslint-plugin.js';

export default {
  files: [
    '**/*.ts',
    '**/*.cts',
    '**/*.mts',
    '**/*.tsx',
    '**/*.ctsx',
    '**/*.mtsx',
    '**/*.vue',
  ],
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      project: ['**/tsconfig.json', '**/tsconfig.*.json'],
      extraFileExtensions: ['.vue'],
    },
  },
  rules: {
    ...typescriptPluginConfigs.recommended.rules,
    ...typescriptPluginConfigs['recommended-requiring-type-checking'].rules,
    ...importPluginConfigs.typescript.rules,
    // 覆盖eslint-recommended中的规则
    ...typescriptPlugin.configs['eslint-recommended'].overrides[0].rules,
  },
  settings: {
    ...typescriptPluginConfigs.recommended.settings,
    ...typescriptPluginConfigs['recommended-requiring-type-checking'].settings,
    ...importPluginConfigs.typescript.settings,
  },
};
