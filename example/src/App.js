import React from 'react'

import { BaseThemeProvider } from 'testing'
import AppBody from './AppBody'

export default () => {
  return (
    <BaseThemeProvider>
      <AppBody />
    </BaseThemeProvider>
  )
}
