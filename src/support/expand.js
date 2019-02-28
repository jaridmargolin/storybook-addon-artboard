'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import { css } from '@emotion/core'

/* -----------------------------------------------------------------------------
 * expand
 * -------------------------------------------------------------------------- */

export default (display = 'block') => css`
  display: ${display};
  position: absolute;
  overflow: auto;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`
