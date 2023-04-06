import React from 'react'
import { Button, Highlight } from '@mantine/core'

const Home: React.FC = () => {
  return (
    <>
      <Button>98765678</Button>
      <Button variant='outline'>98765678</Button>
      <Highlight highlight='this'>Highlight This, definitely THIS and also this!</Highlight>
    </>
  )
}

export default Home
