/* eslint-disable import-x/no-named-as-default-member */

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import importAccess from "eslint-plugin-import-access/flat-config";
import importX from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  {
    ignores: ["**/dist/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  ...compat.extends(
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ),
  {
    name: "main",
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["eslint.config.js"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "import-access": importAccess,
      "unused-imports": unusedImports,
    },
    settings: {
      "import-x/resolver": {
        typescript: true,
      },
    },
    rules: {
      curly: "error",
      eqeqeq: ["error", "always", { null: "never" }],
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-namespace": ["off"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "import-access/jsdoc": [
        "error",
        {
          defaultImportability: "package",
        },
      ],
      "react-hooks/exhaustive-deps": "error",
      "unused-imports/no-unused-imports": "error",
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    ...tseslint.configs.disableTypeChecked,
  },
);
