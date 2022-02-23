module.exports = {
  '*.{js,jsx,mjs,mjsx,cjs,cjsx,ts,tsx}': [
    'node --max_old_space_size=8192 ./node_modules/eslint/bin/eslint.js --fix --color --quiet',
  ],
  '**/*': ['prettier --write --ignore-unknown'],
};
