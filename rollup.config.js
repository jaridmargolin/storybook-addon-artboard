'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

/* -----------------------------------------------------------------------------
 * rollup config
 * -------------------------------------------------------------------------- */

const external = ['@storybook/addons', '@storybook/components', 'react']

const sharedPlugins = [
  babel({ exclude: 'node_modules/**' }),
  resolve({ jsnext: true }),
  commonjs(),
  json()
]

export default [
  {
    input: 'src/index.js',
    external,
    plugins: [...sharedPlugins],
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    }
  },
  {
    input: 'src/index.js',
    external,
    plugins: [...sharedPlugins],
    output: {
      file: 'dist/index.es.js',
      format: 'es'
    }
  },
  {
    input: 'src/register.js',
    external,
    plugins: [...sharedPlugins, terser()],
    output: {
      file: 'dist/register.js',
      format: 'cjs'
    }
  },
  {
    input: 'src/register.js',
    external,
    plugins: [...sharedPlugins, terser()],
    output: {
      file: 'dist/register.es.js',
      format: 'es'
    }
  }
]
