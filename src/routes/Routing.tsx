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
    (_routes: IRoute[]) => {
      return _routes.map((route) => {
        const { auth, redirect, children } = route

        // 深拷贝避免原始配置被篡改
        const newRoute = Object.assign({}, route)

        if (children) newRoute.children = renderRoutes(children)

        if (redirect) newRoute.element = <Navigate to={redirect} />

        if (auth && !isLogin) newRoute.element = <Navigate to='/sign' replace />

        return newRoute
      })
    },
    [isLogin],
  )

  return useRoutes(renderRoutes(routes))
}

export default Routing
