import React, { createContext, useContext } from 'react'
import uses from './uses'
import theme from './mui-theme'

require('react-dom')
window.React4 = require('react')

export const UiContext = createContext(uses)

export const muiTheme = (t) => {
  const { createMuiTheme } = uses
  return createMuiTheme(t || theme)
}

export default () => {
  if (window.React) console.log('Ui Context: React.versions same', window.React === window.React4)
  if (window.React) console.log('Ui Context: React version', window.React.version)
  console.log('Ui Context: React4 version', window.React4.version)
  return useContext(UiContext)
}

