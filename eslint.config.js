import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

export default [
  {
    files: ["/*.ts", "/*.tsx"],
    ignores: ["nodemodules", "dist", "build"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.app.json",
      },
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
      "react-hooks": reactHooks,
      "unused-imports": unusedImportsPlugin,
    },

    rules: {
      ...tsPlugin.configs["recommended-requiring-type-checking"].rules,

      ...reactHooks.configs.recommended.rules,

      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/unbound-method": "off",

      "no-debugger": "error",

      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^",
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-console": "warn",
    },
  },
];
