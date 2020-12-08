module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
    transform: {
        '^.+\\.(js|ts)x?$': 'babel-jest'
    },
    testEnvironment: 'node',
    clearMocks: true,
    verbose: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
    coveragePathIgnorePatterns: [
      'node_modules',
      'coverage',
      'src/index.ts',
      'src/app.ts',
      'src/core/constantes/httpStatusCodes.ts',
      'src/models/index.js',
      'src/database/config/db.config.js',
      'src/database/models/index.js',
      'src/database/migrations',
      'src/tests/docs/test_docs.test.js'
    ],
};