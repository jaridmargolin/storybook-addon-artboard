'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import React from 'react'
import addons from '@storybook/addons'

// lib
import Artboard from './components/Artboard'

/* -----------------------------------------------------------------------------
 * withArtboard
 * -------------------------------------------------------------------------- */

export const withArtboard = storyFn => (
  <Artboard {...{ channel: addons.getChannel() }}>{storyFn()}</Artboard>
)
