import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'

export type IRoute =
  | (IndexRouteObject & {
      name?: string | null
      redirect?: string
      auth?: boolean
      showHeader?: boolean
      showNavs?: boolean
    })
  | (Omit<NonIndexRouteObject, 'children'> & {
      name?: string | null
      redirect?: string
      auth?: boolean
      showHeader?: boolean
      showNavs?: boolean
      children?: IRoute[]
    })
