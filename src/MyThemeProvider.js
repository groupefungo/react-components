import React from 'react'

import useUiContext, { UiContext, muiTheme } from './useUiContext'

const MyThemeProvider = ({ children }) => {
  const uses = useUiContext()
  const { ThemeProvider } = uses;
  const theme = muiTheme()

  return (
    <UiContext.Provider value={uses}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </UiContext.Provider>
  )
}

export default MyThemeProvider;
