import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Highlight } from '@mantine/core'

const Home: React.FC = () => {
  return (
    <>
      <Link to='/settings/security-center'>999</Link>
      <Button>98765678</Button>
      <Button variant='outline'>98765678</Button>
      <Button variant='gradient' color='gold'>
        98765678
      </Button>
      <Highlight highlight='this'>Highlight This, definitely THIS and also this!</Highlight>
    </>
  )
}

export default Home
