module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  ignorePatterns: [
    'node_modules',
    'dist/'
  ],
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
        'jest/globals': true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-array-index-key': 'off',
    'no-unused-vars': 'off',
    'comma-dangle': ['error', 'never'],
    'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
    'react/self-closing-comp': 'off',
    'no-nested-ternary': 'off'
  }
};
