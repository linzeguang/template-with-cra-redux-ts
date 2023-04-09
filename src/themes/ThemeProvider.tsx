import type { PropsWithChildren } from 'react'
import React from 'react'
import type { MantineProviderProps, MantineThemeOverride } from '@mantine/core'
import { MantineProvider } from '@mantine/core'

import components from './components'
import globalStyles from './globalStyles'

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  colors: {
    dark: ['#fff', '', '', '', '', '', '', '#000', '', ''],
    gold: ['', '', '', '', '#B58B00', '#D6A400', '', '', '#FFEDC7', '#3D2F00'],
  },
  white: '#fff',
  black: '#000',
  primaryColor: 'gold',
  lineHeight: 1.5,
  activeStyles: {
    transform: 'none',
    backgroundSize: 'auto',
  },
  globalStyles,
  components,
}

const ThemeProvider: React.FC<PropsWithChildren<MantineProviderProps>> = ({ children }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  )
}

export default ThemeProvider
