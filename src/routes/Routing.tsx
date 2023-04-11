import React from 'react'
import { useCallback } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { useModel } from 'foca'

import { userModel } from '@/models'

import { routes } from './routes'
import type { IRoute } from './types'

const Routing: React.FC = () => {
  const { isLogin } = useModel(userModel)

  const renderRoutes = useCallback(
    (routes: IRoute[]) => {
      return routes.map((route) => {
        const { auth, redirect, children } = route

        if (children) route.children = renderRoutes(children)

        if (redirect) route.element = <Navigate to={redirect} />

        if (auth && !isLogin) route.element = <Navigate to='/sign' replace />

        return route
      })
    },
    [isLogin],
  )

  return useRoutes(renderRoutes(routes))
}

export default Routing
