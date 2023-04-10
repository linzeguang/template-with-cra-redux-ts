import type { PropsWithChildren } from 'react'
import React from 'react'
import type { MantineProviderProps, MantineThemeOverride } from '@mantine/core'
import { MantineProvider } from '@mantine/core'

import components from './components'
import globalStyles from './globalStyles'

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  colors: {
    dark: ['#fff', '', '', '', '', '#3D2F00', '#261D00', '#000', '', ''],
    gold: ['', '', '', '', '#B58B00', '#D6A400', '#BDAE2A', '#FFEB3B', '#FFEDC7', ''],
  },
  white: '#fff',
  black: '#000',
  primaryColor: 'gold',
  globalStyles,
  lineHeight: 1.5,
  activeStyles: { transform: 'scale(0.98)', backgroundSize: 'auto' },
  defaultGradient: { from: '#fef924', to: '#522d00', deg: 180 },
  components,
  other: {
    headerHeight: '50px',
    navHeight: '64px',
    pageSpacing: '1rem',
    zIndex: {
      loading: 50,
      header: 100,
      footer: 100,
    },
  },
}

const ThemeProvider: React.FC<PropsWithChildren<MantineProviderProps>> = ({ children }) => {
  return (
    <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
      {children}
    </MantineProvider>
  )
}

export default ThemeProvider
