import type { PropsWithChildren } from 'react'
import React from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@mui/material'

import { ModalProvider } from './components/Modal'
import store from './stores'
import theme from './themes'

const persistor = persistStore(store)

const Providers: React.FC<PropsWithChildren> = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ModalProvider {...props} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default Providers
