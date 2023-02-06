module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'standard'],
  plugins: ['html'],
  settings: {
    'html/indent': '+2',
    'html/report-bad-indent': 'error'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-tabs': ['off'],
    'no-mixed-spaces-and-tabs': ['off'],
    'no-multi-spaces': ['error'],
    'no-trailing-spaces': ['error'],
    'key-spacing': ['warn'],
    'object-curly-spacing': ['warn', 'always'],
    'react/no-unescaped-entities': ['off'],
    'react/prop-types': ['off']
  }
};
