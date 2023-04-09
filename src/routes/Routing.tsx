import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import store from '@/stores/store'

import { routes } from './routes'
import type { IRoute } from './types'

const renderRoutes = (routes: IRoute[]) => {
  const { user } = store.getState()
  const { isLogin } = user

  return routes.map((route) => {
    const { auth, redirect, children } = route

    if (children) route.children = renderRoutes(children)

    if (redirect) route.element = <Navigate to={redirect} />

    if (auth && !isLogin) route.element = <Navigate to='/sign' replace />

    return route
  })
}

const Routing: React.FC = () => {
  return useRoutes(renderRoutes(routes))
}

export default Routing
