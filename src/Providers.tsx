import './store'

import type { PropsWithChildren } from 'react'
import React, { Fragment } from 'react'
import { FocaProvider } from 'foca'
import { ModalsProvider } from '@mantine/modals'

import { Toast } from './components/Uikit/Toast'
import ThemeProvider from './themes'

const Providers: React.FC<PropsWithChildren> = (props) => {
  return (
    <FocaProvider>
      <ThemeProvider>
        <Toast />
        <ModalsProvider>
          <Fragment {...props} />
        </ModalsProvider>
      </ThemeProvider>
    </FocaProvider>
  )
}

export default Providers
