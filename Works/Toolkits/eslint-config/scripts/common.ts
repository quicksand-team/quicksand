import type { Linter } from 'eslint';

/** 插件集 */
export const plugins = [
  'eslint-plugin-import',
  '@typescript-eslint/eslint-plugin',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'eslint-plugin-vue',
];

export type EslintConfig = Required<Pick<Linter.Config, 'rules' | 'settings'>>;

export type EslintConfigWithExtends = EslintConfig & { extends: string[] };
