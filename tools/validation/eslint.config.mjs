import security from './node_modules/eslint-plugin-security/index.js';

export default [{ files: ['tools/*.mjs'], plugins: { security }, rules: security.configs.recommended.rules }];
