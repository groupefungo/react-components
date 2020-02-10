import React, { createContext } from 'react'
import uses from './uses'

const useUiContext = () => {
  const c = createContext(uses)

  console.log('React.version', React.version)
  return {
    uiContext: c,
    ...uses
  }
}

export default useUiContext;
