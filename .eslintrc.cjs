/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
    // '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'quotes': ['error', 'single'],
    // 'quote-props': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],
    'vue/multi-word-component-names': 0,
    'no-unused-vars': ['error', { args: 'none' }]
  }
};
