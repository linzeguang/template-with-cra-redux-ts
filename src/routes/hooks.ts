import { useMemo } from 'react'
import { matchRoutes, useLocation } from 'react-router-dom'

import { routes } from './routes'
import type { IRoute } from './types'

export function useRoute() {
  const location = useLocation()

  return useMemo<IRoute | null>(() => {
    const mrs = matchRoutes(routes, location.pathname)?.reverse()[0]
    if (!mrs) return null
    console.log('>>>>>> route: ', mrs.route)
    return mrs.route
  }, [location.pathname])
}
