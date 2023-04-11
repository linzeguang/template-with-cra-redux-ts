import './store'

import type { PropsWithChildren } from 'react'
import React, { Fragment } from 'react'
import { FocaProvider } from 'foca'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'

import ThemeProvider from './themes'

const Providers: React.FC<PropsWithChildren> = (props) => {
  return (
    <FocaProvider>
      <ThemeProvider>
        <Notifications position='top-center' />
        <ModalsProvider>
          <Fragment {...props} />
        </ModalsProvider>
      </ThemeProvider>
    </FocaProvider>
  )
}

export default Providers
