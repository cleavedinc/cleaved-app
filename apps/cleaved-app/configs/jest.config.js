const base = require("../../../jest.config.base");

const appName = "Cleaved Application";

module.exports = {
  ...base,
  displayName: appName,
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@root/(.*)$": "<rootDir>/$1",
  },
  name: appName,
  rootDir: "../",
  setupFilesAfterEnv: ["../../jest-test-helpers.js"],
};
