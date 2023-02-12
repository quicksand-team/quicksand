import type { EslintConfig, EslintConfigWithExtends } from './common.js';
import { deepmergeCustom } from 'deepmerge-ts';

export function mergeEslintConfigs(
  configs: Record<string, EslintConfigWithExtends>,
): Record<string, EslintConfig> {
  const result: Record<string, EslintConfig> = {};

  for (const [name, config] of Object.entries(configs)) {
    result[name] = {
      rules: config.rules || {},
      settings: config.settings || {},
    };

    if (config.extends) {
      for (const extend of config.extends) {
        const extendConfig = configs[extend];

        if (extendConfig && extendConfig.rules) {
          result[name].rules = { ...extendConfig.rules, ...result[name].rules };
          result[name].settings = deepmergeCustom({
            mergeArrays: false,
          })(extendConfig.settings, result[name].settings);
        }
      }
    }
  }
  return result;
}
