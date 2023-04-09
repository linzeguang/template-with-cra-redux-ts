import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Layout from './layouts/Layout'
import Routing from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense fallback={null}>
          <Routing />
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
