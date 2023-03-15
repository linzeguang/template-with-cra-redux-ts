import React from 'react'
import { Button, styled } from '@mui/material'

import { template } from '@/apis'

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.mediaQueries.mobile]: {
    fontSize: 14,
  },
  [theme.mediaQueries.tablet]: {
    fontSize: 16,
  },
  [theme.mediaQueries.laptop]: {
    fontSize: 18,
  },
  [theme.mediaQueries.desktop]: {
    fontSize: 20,
  },
}))

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <StyledButton variant='contained' onClick={() => template.fetchList().then(console.log)}>
          fetchList
        </StyledButton>
        <StyledButton variant='contained' onClick={() => template.fetchTest().then(console.log)}>
          fetchTest
        </StyledButton>
        <StyledButton
          variant='contained'
          onClick={() => template.fetchTodo().then(console.log).catch(console.log)}
        >
          fetchTodo
        </StyledButton>
      </div>
    </div>
  )
}

export default Home
