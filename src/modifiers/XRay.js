'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import React from 'react'
import PropTypes from 'prop-types'
import XRay from 'react-x-ray'
import ConditionalWrap from 'conditional-wrap'

/* -----------------------------------------------------------------------------
 * ArtboardXRay
 * -------------------------------------------------------------------------- */

const ArtboardXRay = ({ active, children }) => (
  <ConditionalWrap
    condition={active}
    children={children}
    wrap={children => (
      <XRay
        grid={8}
        style={{ width: '100%', height: '100%', overflow: 'auto' }}
      >
        {children}
      </XRay>
    )}
  />
)

ArtboardXRay.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node
}

export default ArtboardXRay
