module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "@typescript-eslint/recommended-requiring-type-checking",
  ],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    // TypeScript específicas
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",

    // Reglas generales
    "no-console": "warn",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-unused-expressions": "error",
    "prefer-const": "error",
    "no-var": "error",

    // Estilo
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    indent: ["error", 2],
    "no-trailing-spaces": "error",
    "eol-last": "error",

    // Funciones
    "func-style": ["error", "expression"],
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",

    // Variables
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-unused-vars": "off",
  },
  ignorePatterns: ["dist/", "node_modules/", "*.js", "*.d.ts"],
};
