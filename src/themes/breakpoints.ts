import type { BreakpointsOptions, ThemeOptions } from '@mui/material'

const values: BreakpointsOptions['values'] = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
}

export const breakpoints: BreakpointsOptions = {
  values,
}

export const mediaQueries: ThemeOptions['mediaQueries'] = {
  small: `@media screen and (max-width: ${values.sm - 1}px)`,
  mobile: `@media screen and (min-width: ${values.sm}px) and (max-width: ${values.md - 1}px)`,
  tablet: `@media screen and (min-width: ${values.md}px) and (max-width: ${values.lg - 1}px)`,
  laptop: `@media screen and (min-width: ${values.lg}px) and (max-width: ${values.xl - 1}px)`,
  desktop: `@media screen and (min-width: ${values.xl}px)`,
}
