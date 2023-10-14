module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:prettier/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  root: true,
  env: {
    es6: true,
    node: true,
    es2021: true,
  },
  ignorePatterns: ['.eslintrc.js', 'app/__tests__/*', 'loadFixtures.js', 'dist/*', '.prettierrc.js', '.eslintignore', 'migrations/*'],
  rules: {
    'no-var': 'error',
    semi: 'error',
    // 'indent': ['error', 2, { "SwitchCase": 1 }],
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    "@typescript-eslint/no-unused-vars": "error",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-duplicate-enum-values': ['off'],
    "no-console": 0 // 0 - Disable, 1 - Warning, 2 - Error
  },
};
