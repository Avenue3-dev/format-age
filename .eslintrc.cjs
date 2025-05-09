module.exports = {
  root: true,
  env: { es2020: true },
  ignorePatterns: ['dist'],
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.build.json'],
  },
  extends: ['@avenue3-dev/eslint-config/react'],
  overrides: [],
  rules: {
    'barrel-files/avoid-barrel-files': [
      'error',
      { amountOfExportsToConsiderModuleAsBarrel: 2 },
    ],
  },
};
