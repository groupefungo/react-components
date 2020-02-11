import React from 'react'

import uses from './uses'
import muiTheme from './mui-theme'
import UiContext from './UiContext'

export default ({ t, children }) => {
  const { ThemeProvider, createMuiTheme } = uses;

  const theme = createMuiTheme(t || muiTheme)

  return (
    <UiContext.Provider value={uses}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </UiContext.Provider>
  )
}
