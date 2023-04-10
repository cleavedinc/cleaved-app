const base = require("./jest.config.base.js");

module.exports = {
  ...base,
  projects: [
    "<rootDir>/apps/**/jest.config.js",
    "<rootDir>/packages/**/jest.config.js",
    "<rootDir>/services/**/jest.config.js",
  ],
};
