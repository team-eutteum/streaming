import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    'plugin:prettier/recommended',
  ),
  {
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
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          "pathGroupsExcludedImportTypes": ["builtin"],
          "distinctGroup": false,
          "groups": [
            ["builtin", "external"],
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type"
          ],
          "pathGroups": [
            {
              "pattern": "react+(|-dom|-router-dom)",
              "group": "external",
              "position": "before"
            },
            {
              "pattern": "@/**",
              "group": "internal",
              "position": "before"
            }
          ],
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
    },
  },
];

export default eslintConfig;
