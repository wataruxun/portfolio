module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['import',],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      },
      typescript: {
        extensions: ['.ts', '.tsx', '.astro'],
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'sort-imports': 0,
    'import/order': [2, { alphabetize: { order: 'asc' } }],
    'no-else-return': [2, { allowElseIf: false }],
    'max-depth': [1, 3],
    '@typescript-eslint/no-unused-vars': 'error',
    eqeqeq: ['error', 'always']
  },
  overrides: [
    {
      files: ['**/*.astro'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ],
  globals: {
    cy: true
  }
};
