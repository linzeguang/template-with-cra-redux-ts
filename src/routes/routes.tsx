import React from 'react'
import { getI18n } from 'react-i18next'

import type { IRoute } from './types'

const i18n = getI18n()

const Home = React.lazy(() => import('@/pages/Home'))
const About = React.lazy(() => import('@/pages/About'))

const auth = true
const showNavs = true
const showHeader = true

export const routes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
    name: i18n.t('nav.home'),
    showNavs,
  },
  {
    path: '/about',
    element: <About />,
    name: i18n.t('nav.deposit'),
    showNavs,
  },
  {
    path: '/sign',
    element: <About />,
    showHeader,
  },
  {
    path: '/settings',
    children: [
      {
        path: 'security-center',
        element: <About />,
        name: i18n.t('settings.securityCenter'),
        showHeader,
        // auth,
      },
    ],
  },
]

export const routePaths = routes.map((route) => route.path)
