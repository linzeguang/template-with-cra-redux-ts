import type { PropsWithChildren } from 'react'
import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ModalsProvider } from '@mantine/modals'

import store from './stores'
import ThemeProvider from './themes'

const persistor = persistStore(store)

const Providers: React.FC<PropsWithChildren> = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <ModalsProvider>
            <Fragment {...props} />
          </ModalsProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default Providers
