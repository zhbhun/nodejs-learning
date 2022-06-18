const path = require("path");

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: ["eslint-plugin-import"],
  rules: {
    "import/no-unresolved": "error",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", __dirname]],
        extensions: [".js", ".jsx"],
      },
    },
  },
};
