'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// lib
import Backdrop from './modifiers/Backdrop'
import Frame from './modifiers/Frame'
import XRay from './modifiers/XRay'

/* -----------------------------------------------------------------------------
 * defaultModifiers
 * -------------------------------------------------------------------------- */

export default [
  { name: 'xray', icon: 'wrench', component: XRay },
  { name: 'backdrop', icon: 'mirror', component: Backdrop },
  { name: 'frame', icon: 'photo', component: Frame }
]
