import type { MantineThemeOverride } from '@mantine/core'

const globalStyles: MantineThemeOverride['globalStyles'] = (theme) => ({
  button: {
    padding: 0,
    background: 'none',
    border: 'none',
  },
})

export default globalStyles
