module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/jest-preprocess.js`,
  },
  // testURL: 'http://localhost',
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    'typeface-*': 'identity-obj-proxy',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file.js`,
  },
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      diagnostics: true,
    },
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/setup-jest.js'],
  collectCoverage: false,
  coverageReporters: ['lcov', 'text', 'html'],
}
