module.exports = {
    preset: 'babel-jest',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
    },
    testMatch: [
      '**/__tests__/**/*.js?(x)',
      '**/?(*.)+(spec|test).js?(x)',
      "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    testEnvironment: "enzyme",
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },   
    },
    collectCoverageFrom: [
      'src/**/*.js',
      '!**/node_modules/**',
      '!**/vendor/**',
    ],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  };