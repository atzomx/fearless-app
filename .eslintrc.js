module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        curly: 'off',
        'import/order': [
          1,
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'sibling',
              'parent',
              'index',
            ],
            pathGroups: [
              {
                pattern: 'react+(|-native)',
                group: 'external',
                position: 'before',
              },
              { pattern: '@core', group: 'internal' },
              { pattern: '@core/**', group: 'internal' },
              { pattern: '@e', group: 'sibling' },
              { pattern: '@e/**', group: 'sibling' },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
