import React from 'react'

//import { ThemeProvider, createMuiTheme } from '@material-ui/core'

import { BaseThemeProvider } from 'testing'
import AppBody from './AppBody'

require('react-dom')
window.React2 = require('react')

console.log('App React2 version', window.React2.version)
console.log('App react versions', window.React === window.React2)

export default () => {
  return (
    <BaseThemeProvider>
      <AppBody />
    </BaseThemeProvider>
  )
}
