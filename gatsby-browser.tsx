import React from 'react'
import { loadIcons } from './src/components/icon/FontAwesome'
import AllProviders from './src/components/provider'

loadIcons()

export const wrapRootElement = ({ element }) => <AllProviders>{element}</AllProviders>
