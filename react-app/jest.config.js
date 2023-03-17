module.exports = {
    preset: 'babel-jest',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testMatch: [
      '**/__tests__/**/*.js?(x)',
      '**/?(*.)+(spec|test).js?(x)',
    ],
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
    setupFilesAfterEnv: ['./jest.setup.js'],
  };