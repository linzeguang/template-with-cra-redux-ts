import React from 'react'
import { Button, styled } from '@mui/material'

import { template } from '@/apis'
import Modal, { useModal } from '@/components/Modal'
import { Close } from '@/components/Svgr'

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
  const [show] = useModal(
    <Modal title='Cras mattis consectetur purus sit amet fermentum'>
      {[...new Array(500)].map(() => [
        `Cras mattis consectetur purus sit amet fermentum.`,
        <br key='' />,
      ])}
    </Modal>,
  )

  return (
    <div>
      <div>
        <StyledButton onClick={show}>
          modal test
          <Close />
        </StyledButton>
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
