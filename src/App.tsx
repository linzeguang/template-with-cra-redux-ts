import React from 'react'
import { HashRouter } from 'react-router-dom'

import Layout from './layouts/Layout'
import Routing from './routes'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <React.Suspense fallback={null}>
          <Routing />
        </React.Suspense>
      </Layout>
    </HashRouter>
  )
}

export default App
