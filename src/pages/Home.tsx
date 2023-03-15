import React from 'react'
import { Button } from '@mui/material'

import { template } from '@/api'

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Button variant='contained' onClick={() => template.fetchList().then(console.log)}>
          fetchList
        </Button>
        <Button variant='contained' onClick={() => template.fetchTest().then(console.log)}>
          fetchTest
        </Button>
        <Button
          variant='contained'
          onClick={() => template.fetchTodo().then(console.log).catch(console.log)}
        >
          fetchTodo
        </Button>
      </div>
    </div>
  )
}

export default Home
