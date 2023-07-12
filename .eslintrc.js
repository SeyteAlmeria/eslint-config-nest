/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "nest_decorator_scope_request"],
  root: true,
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-case-declarations": "off",
    "@typescript-eslint/adjacent-overload-signatures": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "nest_decorator_scope_request/rule": "error",
  },
};
