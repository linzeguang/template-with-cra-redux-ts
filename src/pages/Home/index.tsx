import React from 'react'
import styled from '@emotion/styled'
import { rem } from '@mantine/core'

import { PageMain } from '@/components/Uikit'

import Banners from './components/Banners'
import Games from './components/Games'
import PrizePool from './components/PrizePool'

const Content = styled(PageMain)`
  padding: 0;
  background: linear-gradient(to bottom, #000 0, #000 ${rem(200)}, #1a1a1a ${rem(276)}, #1a1a1a);
`

const Home: React.FC = () => {
  return (
    <Content style={{ flex: 1 }}>
      <Banners />
      <PrizePool />
      <Games />
    </Content>
  )
}

export default Home
