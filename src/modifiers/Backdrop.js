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
 * ArtboardBackdrop
 * -------------------------------------------------------------------------- */

const Background = styled.div`
  ${expand()};
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAb0lEQVQ4jc2SsQqAMBBDX6Wbg4Pc6v//lo4tDt2Fc3OyaUGEZs0RjuQFd9+BhXeVnPNW8QCIwArMwpeagEv4ynsCPmmMAFVUs8QInNTLKtQXAiCklFwdmNmB4KT5Ig1OekqUnIwx4+8BkpOeFSQnN6TuF8X6ILg6AAAAAElFTkSuQmCC');
`

const ArtboardBackdrop = ({ active, children }) => (
  <ConditionalWrap
    condition={active}
    children={children}
    wrap={children => <Background>{children}</Background>}
  />
)

ArtboardBackdrop.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node
}

export default ArtboardBackdrop
