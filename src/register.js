'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import React from 'react'
import addons, { types } from '@storybook/addons'

// lib
import { ADDON_ID } from './constants'
import Tool from './components/Tool'

/* -----------------------------------------------------------------------------
 * artboard - Manager
 * -------------------------------------------------------------------------- */

addons.register(ADDON_ID, api => {
  const channel = addons.getChannel()

  addons.add(ADDON_ID, {
    title: 'Artboard',
    type: types.TOOL,
    render: () => <Tool channel={channel} api={api} />
  })
})
