import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'next',
      'next/core-web-vitals',
      'next/typescript',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslint.config.mjs', 'public'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'prefer-template': 'error',
      'react/self-closing-comp': 'error',
      'react/no-unknown-property': [
        2,
        {
          ignore: ['jsx'],
        },
      ],
      'prettier/prettier': [
        'warn',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          parser: 'typescript',
          endOfLine: 'auto',
        },
      ],
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
          distinctGroup: false,
          groups: [
            ['builtin', 'external'],
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react+(|-dom|-router-dom)',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    overrides: [
      {
        files: ['*.[!d].ts', '*.[!d].tsx'],
      },
    ],
  }),
];

export default eslintConfig;
