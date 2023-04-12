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
const SettingsPassword = React.lazy(() => import('@/pages/Settings/Password'))
const SettingsMobile = React.lazy(() => import('@/pages/Settings/Mobile'))
const Members = React.lazy(() => import('@/pages/Members'))
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
    path: 'sign',
    element: <Sign />,
    showHeader,
  },
  {
    path: 'members',
    element: <Members />,
    showNavs,
    auth,
  },
  {
    path: 'account',
    element: <Account />,
    showHeader,
  },
  {
    path: 'wallet',
    element: <Wallet />,
    showHeader,
  },
  {
    path: 'bet',
    element: <Bet />,
    showHeader,
  },
  {
    path: 'settings',
    children: [
      {
        index: true,
        element: <Settings />,
        name: i18n.t('settings'),
        showHeader,
        auth,
      },
      {
        path: 'security-center',
        children: [
          {
            index: true,
            name: i18n.t('settings.securityCenter'),
            element: <SettingsSecurityCenter />,
            showHeader,
            auth,
          },
          {
            path: 'password',
            element: <SettingsPassword />,
            showHeader,
          },
          {
            path: 'mobile',
            name: i18n.t('settings.changeMobileNumber'),
            element: <SettingsMobile />,
            showHeader,
            auth,
          },
        ],
      },
    ],
  },
]

export const routePaths = routes.map((route) => route.path)
