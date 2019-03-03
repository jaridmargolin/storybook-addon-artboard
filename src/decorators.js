'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import React from 'react'
import addons from '@storybook/addons'

// lib
import Artboard from './components/Artboard'
import Backdrop from './modifiers/Backdrop'
import Frame from './modifiers/Frame'
import XRay from './modifiers/XRay'

/* -----------------------------------------------------------------------------
 * decoratots
 * -------------------------------------------------------------------------- */

export const withArtboard = storyFn => (
  <Artboard {...{ channel: addons.getChannel() }}>{storyFn()}</Artboard>
)

// modifiers
export const withBackdrop = storyFn => <Backdrop active>{storyFn()}</Backdrop>
export const withFrame = storyFn => <Frame active>{storyFn()}</Frame>
export const withXRay = storyFn => <XRay active>{storyFn()}</XRay>
