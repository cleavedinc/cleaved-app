module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  rootDir: "./",
  setupFilesAfterEnv: ["./jest-test-helpers.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/*/node_modules"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
};
