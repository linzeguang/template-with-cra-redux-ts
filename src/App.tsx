import React from 'react'
import { HashRouter } from 'react-router-dom'

import { Loading } from './components/Uikit'
import Layout from './layouts/Layout'
import Routing from './routes'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <React.Suspense fallback={<Loading visible overlayOpacity={0} />}>
          <Routing />
        </React.Suspense>
      </Layout>
    </HashRouter>
  )
}

export default App
