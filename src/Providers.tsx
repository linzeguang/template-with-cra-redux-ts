import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@mui/material'

import store from './stores'
import theme from './themes'

const persistor = persistStore(store)

const Providers: React.FC<PropsWithChildren> = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} {...props}>
        <ThemeProvider theme={theme} {...props} />
      </PersistGate>
    </Provider>
  )
}

export default Providers
