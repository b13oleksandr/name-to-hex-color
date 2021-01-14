module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'airbnb-base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jest'
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'no-bitwise': 'off',
    'comma-dangle': ['error', 'never'],
    'import/extensions': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      }
    }
  }
};
