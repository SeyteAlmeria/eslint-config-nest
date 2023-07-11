module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin", "@seyte/eslint-plugin-nest-decorator-scope-request"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "nest-decorator-scope-request": "error",
  },
};
