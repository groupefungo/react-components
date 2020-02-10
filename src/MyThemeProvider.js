import React from 'react'
import muiTheme from './mui-theme'

import useUiContext from './UiContext'

const MyThemeProvider = ({ children }) => {
  const { ThemeProvider } = useUiContext()
  const theme = muiTheme()

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default MyThemeProvider;
