/// <reference types="@emotion/react/types/css-prop" />

import '@emotion/react'

import type { DefaultMantineColor, MantineTheme, Tuple } from '@mantine/core'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MantineTheme {}
}

type ExtendedCustomColors = 'gold' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }

  interface MantineThemeOther {
    headerHeight: string
    navHeight: string
    pageSpacing: string
    zIndex: {
      loading: number
      header: number
      footer: number
    }
  }
}
