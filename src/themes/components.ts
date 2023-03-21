import type { ThemeOptions } from '@mui/material'

export const components: ThemeOptions['components'] = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        minWidth: '20vw',
      },
    },
  },
}
