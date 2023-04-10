const base = require("../../../jest.config.base.js");

const appName = "Cleaved Forms";

module.exports = {
  ...base,
  displayName: appName,
  globals: {
    "ts-jest": {
      diagnostics: false,
      isolatedModules: true,
      tsConfig: "./tsconfig.json",
    },
  },
  name: appName,
  rootDir: "../",
  setupFilesAfterEnv: ["../../jest-test-helpers.js"],
};
