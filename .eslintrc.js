'use strict'

/* -----------------------------------------------------------------------------
 * eslint config
 * -------------------------------------------------------------------------- */

module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: ['standard', 'standard-react'],
  rules: {
    'quote-props': ['error', 'consistent-as-needed']
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: { jest: true }
    }
  ]
}
