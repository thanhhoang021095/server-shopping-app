export default {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    // "@typescript-eslint/no-misused-promises":0,
    // "@typescript-eslint/no-extraneous-class":0,
    "@typescript-eslint/no-unused-vars": [
      "off"
    ],
    // "no-console": 0
  },
  "env": {
    "browser": true,
    "node": true
  }
}