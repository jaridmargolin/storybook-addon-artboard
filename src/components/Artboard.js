'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// lib
import expand from '../support/expand'
import modifiers from '../modifiers'

/* -----------------------------------------------------------------------------
 * Artboard
 * -------------------------------------------------------------------------- */

export default class Artboard extends Component {
  static propTypes = {
    children: PropTypes.node,
    channel: PropTypes.object
  }

  static Artboard = styled.div`
    ${expand()};
  `

  state = {}

  onArtboardToggle = vals => {
    this.setState(vals)
  }

  componentDidMount () {
    this.props.channel.on('artboard/toggle', this.onArtboardToggle)
    this.props.channel.emit('artboard/mounted')
  }

  componentWillUnmount () {
    this.props.channel.removeListener('artboard/toggle', this.onArtboardToggle)
  }

  render () {
    const { Artboard } = this.constructor
    const { children } = this.props

    // don't render until our panel has set the xray value
    if (Object.keys(this.state).length === 0) {
      return null
    }

    return (
      <Artboard>
        {modifiers
          .slice()
          .reverse()
          .reduce((children, { name, component: Component }) => {
            return <Component active={this.state[name]} children={children} />
          }, children)}
      </Artboard>
    )
  }
}
