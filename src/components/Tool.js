'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icons, IconButton } from '@storybook/components'

// lib
import modifiers from '../modifiers'

/* -----------------------------------------------------------------------------
 * ArtboardTool
 * -------------------------------------------------------------------------- */

export default class ArtboardTool extends Component {
  static propTypes = {
    api: PropTypes.object,
    channel: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.state = modifiers.reduce((state, { name }) => {
      const val = props.api.getQueryParam(name) === 'true'
      return Object.assign(state, { [name]: val })
    }, {})
  }

  componentDidMount () {
    this.props.channel.on('artboard/mounted', this.onArtboardMounted)
  }

  setArtboard () {
    this.props.channel.emit('artboard/toggle', this.state)
  }

  onArtboardMounted = () => {
    this.setArtboard()
  }

  onToggle = name => {
    const { api } = this.props
    const toggleState = { [name]: !this.state[name] }

    api.setQueryParams(toggleState)
    this.setState(toggleState, () => this.setArtboard())
  }

  render () {
    return modifiers.map(({ icon, name }) => (
      <IconButton
        key={name}
        active={!!this.state[name]}
        onClick={() => this.onToggle(name)}
      >
        <Icons icon={icon} />
      </IconButton>
    ))
  }
}
