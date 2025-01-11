import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.app.json",
      },
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
