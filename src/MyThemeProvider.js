import React from 'react'

import useUiContext, { UiContext, muiTheme } from './useUiContext'

const MyThemeProvider = ({ t, children }) => {
  const uses = useUiContext()
  const { ThemeProvider } = uses;
  const theme = t || muiTheme()

  return (
    <UiContext.Provider value={uses}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </UiContext.Provider>
  )
}

export default MyThemeProvider;
