import { createTheme } from '@mui/material'

import { breakpoints, mediaQueries } from './breakpoints'
import { components } from './components'

const theme = createTheme({
  breakpoints,
  mediaQueries,
  components,
})

export default theme
