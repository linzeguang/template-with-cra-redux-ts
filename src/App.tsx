import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Button } from '@mui/material'

import Routing from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to='/'>
        <Button>Home</Button>
      </Link>
      <Link to='/about'>
        <Button>About</Button>
      </Link>
      <Routing />
    </BrowserRouter>
  )
}

export default App
