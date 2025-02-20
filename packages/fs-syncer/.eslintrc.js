const baseConfig = require('@mmkal/rig/.eslintrc')

module.exports = {
  ...baseConfig,
  
  ignorePatterns: [
    ...baseConfig.ignorePatterns,
    'fixtures', // https://github.com/eslint/eslint/issues/8429#issuecomment-355967308
  ],
}
