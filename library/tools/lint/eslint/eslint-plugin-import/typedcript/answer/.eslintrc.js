const allExtensions = [".ts", ".tsx", ".js", ".jsx"];

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: ["@typescript-eslint", "eslint-plugin-import"],
  rules: {
    "import/no-unresolved": "error",
  },
  settings: {
    "import/extensions": allExtensions,
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: allExtensions,
      },
      typescript: {
        project: __dirname,
      },
    },
  },
};
