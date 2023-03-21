import { useMediaQuery, useTheme } from '@mui/material'

export const useMediaQuerys = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.mediaQueries.small)
  const isMobile = useMediaQuery(theme.mediaQueries.mobile)
  const isTablet = useMediaQuery(theme.mediaQueries.tablet)
  const isLaptop = useMediaQuery(theme.mediaQueries.laptop)
  const isDesktop = useMediaQuery(theme.mediaQueries.desktop)

  return { isSmall, isMobile, isTablet, isLaptop, isDesktop }
}
