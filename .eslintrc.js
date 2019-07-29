module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint','eslint-plugin-prettier'],
  env: {
    browser: true,
    node: true,
  },
  'rules': {
    'react/react-in-jsx-scope': 0,
    'ordered-imports': 0,
    'quotemark': 0,
    'no-console': 0,
    'semicolon': 0,
    'jsx-no-lambda': 0,
  },
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
};