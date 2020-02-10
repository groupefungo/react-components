import React from 'react'
import { useUiContext } from 'testing'

export default () => {
  const uiContext = useUiContext()
  const { AppBar, Toolbar, IconButton, Typography, Menu } = uiContext
  return (
    <React.Fragment>
      <AppBar color="secondary" position="fixed" elevation={1}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={console.log('asdfasdf')}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap color="primary">
            RCAAQ
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}
