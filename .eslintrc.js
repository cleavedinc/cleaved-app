module.exports = exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  ignorePatterns: ["**/src/**/*.json"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": 0,
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        singleQuote: false,
        trailingComma: "es5",
      },
    ],
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "spaced-comment": ["error", "always", { markers: ["/"] }],
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".test.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
