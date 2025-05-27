const config = {
  setupFilesAfterEnv: ['./jest-setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.jpg': '<rootDir>/fileMock.js'
  }
};

export default config;
