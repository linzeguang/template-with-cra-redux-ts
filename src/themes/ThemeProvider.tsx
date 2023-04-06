import type { PropsWithChildren } from 'react'
import React from 'react'
import type { MantineProviderProps, MantineThemeOverride } from '@mantine/core'
import { MantineProvider } from '@mantine/core'

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  colors: {
    dark: ['#fff', '', '', '', '', '', '', '#000', '', ''],
    gold: ['', '', '', '', '', '#D6A400', '', '', '#FFEDC7', '#3D2F00'],
  },
  components: {
    Button: {
      variants: {
        outline: (theme) => ({
          root: {
            color: theme.colors.gold[8],
            background: theme.colors.gold[9],
          },
        }),
      },
    },
  },
  white: '#fff',
  black: '#000',
  primaryColor: 'gold',
  lineHeight: 1.5,
  breakpoints: {},
}

const ThemeProvider: React.FC<PropsWithChildren<MantineProviderProps>> = ({ children }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  )
}

export default ThemeProvider
