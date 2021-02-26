module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/index.tsx',
    '!src/react-app-env.d.ts',
    '!src/reportWebVitals.ts',
    '!src/styles/**',
    '!src/**/*.style.ts'
  ],
  modulePaths: ['<rootDir>/src/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
