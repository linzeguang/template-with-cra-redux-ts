import './i18n'

import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import flexible from './flexible'
import Providers from './Providers'

flexible(window, document)

const container = document.getElementById('app')!
const root = createRoot(container)

root.render(
  <React.Fragment>
    <Providers>
      <App />
    </Providers>
  </React.Fragment>,
)
