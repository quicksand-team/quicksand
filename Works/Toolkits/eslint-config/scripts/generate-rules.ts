import type { Rule } from 'eslint';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import fsExt from 'fs-extra';
import path from 'node:path';
import process from 'node:process';
import { plugins } from './common.js';

/** 生成规则集 */
export async function generateRules() {
  /** 规则集目录 */
  const rulesDir = path.join(process.cwd(), 'lib/rules');

  // 输出eslint内置规则
  const eslintRules = [...builtinRules.entries()].reduce(
    (obj: Record<string, Rule.RuleModule>, [key, value]) => (
      (obj[key] = value), obj
    ),
    {},
  );
  fsExt.outputJsonSync(path.join(rulesDir, 'eslint.json'), eslintRules, {
    spaces: 2,
  });

  // 遍历输出插件规则
  for (const plugin of plugins) {
    /** 插件模块 */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const module = await import(plugin);
    /** 插件规则集 */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const rules = module.default.rules as Record<string, Rule.RuleModule>;
    /** 规则集文件路径 */
    const rulesPath = path.join(rulesDir, `${plugin.replace('/', '_')}.json`);
    // 输出规则集
    fsExt.outputJsonSync(rulesPath, rules, {
      spaces: 2,
    });
  }
  console.log('规则文件集生成完成');
}
