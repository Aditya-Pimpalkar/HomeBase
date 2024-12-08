module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript linting rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser', // Specify TypeScript parser
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX for TypeScript files
    },
  },
  settings: {
    react: { version: '18.2' }
  },
  plugins: ['react-refresh', '@typescript-eslint'], // Add TypeScript plugin
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'warn', // Optional: Warn on usage of `any` type
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional: Disable enforcing explicit return types
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Apply TypeScript rules to .ts and .tsx files
      rules: {
        // You can add TypeScript-specific rule overrides here
      },
    },
  ],
}
