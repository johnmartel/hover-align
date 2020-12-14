module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['scripts/**/*.js', '!scripts/index.js', '!node_modules/**'],
  coverageDirectory: '<rootDir>/reports/coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    '^@scripts/(.*)$': '<rootDir>/scripts/$1',
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/reports/unittests',
        outputName: 'junit.xml',
      },
    ],
  ],
  setupFilesAfterEnv: ['jest-extended'],
  testMatch: ['**/__tests__/**/*.test.js'],
  testEnvironment: 'node',
};
