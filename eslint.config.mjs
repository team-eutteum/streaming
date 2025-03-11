import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { rules } from "eslint-config-prettier";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "prefer-template": "error",
      "react/self-closing-comp": "error",
      "prettier/prettier": [
        "warn",
        {
          "printWidth": 80,
          "tabWidth": 2,
          "singleQuote": true,
          "parser": "typescript",
          "endOfLine": "auto"
        }
      ],
    }
  }
];

export default eslintConfig;
