module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
  ],

  globals: {},

  overrides: [
    {
      env: {
        node: true,
      },

      files: ['./.eslintrc.js'],
    },

    {
      files: ['./**/*.spec.js', './**/specs/**/*.js'],

      globals: {
        expect: 'writable',
      },
    },

    {
      files: ['./**/*.spec.js', './**/specs/**/*.js'],

      rules: {
        'react/prop-types': 'off',
      },
    },

    {
      env: {
        node: true,
      },

      files: ['./config/**/*.js', './scripts/**/*.js'],
    },
  ],

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['import', 'prettier', 'promise', 'mocha', 'jsx-a11y', 'react', 'react-hooks'],
  root: true,

  rules: {
    'eslint-comments/no-unused-disable': 'error',
    'import/extensions': ['error', 'ignorePackages', {js: 'never'}],
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/prop-types': 'off',
  },

  settings: {
    react: {
      version: '16',
    },
  },
}
