import React from 'react'
import { getI18n } from 'react-i18next'

import type { IRoute } from './types'

const i18n = getI18n()
const auth = true
const showNavs = true
const showHeader = true

const Home = React.lazy(() => import('@/pages/Home'))
const Sign = React.lazy(() => import('@/pages/Sign'))
const Settings = React.lazy(() => import('@/pages/Settings'))
const SettingsSecurityCenter = React.lazy(() => import('@/pages/Settings/SecurityCenter'))
const Member = React.lazy(() => import('@/pages/Member'))
const Account = React.lazy(() => import('@/pages/Account'))
const Wallet = React.lazy(() => import('@/pages/Wallet'))
const Bet = React.lazy(() => import('@/pages/Bet'))

export const routes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
    name: i18n.t('nav.home'),
    showNavs,
  },
  {
    path: '/sign',
    element: <Sign />,
    showHeader,
  },
  {
    path: '/member',
    element: <Member />,
    showNavs,
  },
  {
    path: '/account',
    element: <Account />,
    showHeader,
  },
  {
    path: '/wallet',
    element: <Wallet />,
    showHeader,
  },
  {
    path: '/bet',
    element: <Bet />,
    showHeader,
  },
  {
    path: '/settings',
    element: <Settings />,
    children: [
      {
        path: 'security-center',
        name: i18n.t('settings.securityCenter'),
        element: <SettingsSecurityCenter />,
        showHeader,
        auth,
      },
    ],
  },
]

export const routePaths = routes.map((route) => route.path)
