/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prefer-const': 'warn',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-extra-semi': 'off'
  }
}
