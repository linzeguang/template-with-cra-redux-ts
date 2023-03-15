import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import Providers from './Providers'

const container = document.getElementById('app')!
const root = createRoot(container)

root.render(
  <React.Fragment>
    <Providers>
      <App />
    </Providers>
  </React.Fragment>,
)
