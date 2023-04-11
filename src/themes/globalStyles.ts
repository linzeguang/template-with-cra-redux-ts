import type { MantineThemeOverride } from '@mantine/core'

const globalStyles: MantineThemeOverride['globalStyles'] = (theme) => ({
  button: {
    padding: 0,
    background: 'none',
    border: 'none',
    outline: 'none !important',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
})

export default globalStyles
