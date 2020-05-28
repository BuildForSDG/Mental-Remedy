module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  plugins: ['react'],
  extends: ['airbnb-base',
    'eslint:all',
    'plugin:react/recommended'],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53'
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'class-methods-use-this': 0,
    'react/prop-types': 0,
    'spaced-comment': 0,
    'max-lines': 0,
    'multiline-ternary': 0,
    'no-magic-numbers': 0,
    'arrow-body-style': 0,
    'object-shorthand': 0,
    'no-ternary': 0,
    'sort-keys': 0,
    'max-len': 0,
    'no-console': 0,
    'no-return-assign': 0,
    'linebreak-style': 0,
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['none',
          'all',
          'multiple',
          'single']
      }
    ]
  }
};
