'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// lib
import Backdrop from './Backdrop'
import Frame from './Frame'
import XRay from './XRay'

/* -----------------------------------------------------------------------------
 * defaultModifiers
 * -------------------------------------------------------------------------- */

export default [
  { name: 'xray', icon: 'wrench', component: XRay },
  { name: 'backdrop', icon: 'mirror', component: Backdrop },
  { name: 'frame', icon: 'photo', component: Frame }
]

export { Backdrop, Frame, XRay }
