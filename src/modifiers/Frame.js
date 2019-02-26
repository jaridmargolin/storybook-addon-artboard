'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ConditionalWrap from 'conditional-wrap'

// lib
import expand from '../support/expand'

/* -----------------------------------------------------------------------------
 * ArtboardFrame
 * -------------------------------------------------------------------------- */

const Frame = styled.div`
  ${expand()};
  align-items: center;
  justify-content: center;
  padding: 16px;
`

const ArtboardFrame = ({ active, children }) => (
  <ConditionalWrap
    condition={active}
    children={children}
    wrap={children => <Frame>{children}</Frame>}
  />
)

ArtboardFrame.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node
}

export default ArtboardFrame
