module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest/setup.js'],
  moduleNameMapper: {
    '/.(jpg|jpeg|png|gif|webp|svg)$': './__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
