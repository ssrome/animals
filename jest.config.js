const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  //   moduleNameMapper: {
  //     "^@/components/(.*)$": "<rootDir>/components/$1",

  //     "^@/pages/(.*)$": "<rootDir>/pages/$1",
  //   },
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/__tests__/e2e/*", "/__tests__/support/*"],
};

module.exports = createJestConfig(customJestConfig);
