import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { Center, Flex, Text } from '@mantine/core'

import { Back } from '@/components/Svgr'

export interface HeaderNodes {
  leftNode?: React.ReactNode
  centerNode?: React.ReactNode
  rightNode?: React.ReactNode
}

interface Props extends HeaderNodes {
  visible: boolean
  title?: string | null
}

const Header: React.FC<Props> = ({ visible, title, leftNode, centerNode, rightNode }) => {
  const navigate = useNavigate()

  if (!visible) return null
  return (
    <HeaderWrapper>
      <Flex justify={'flex-start'} align={'center'}>
        {leftNode || <Back onClick={() => navigate(-1)} />}
      </Flex>
      <Center>
        {centerNode || (
          <Text weight={400} size='1rem' color='gold'>
            {title}
          </Text>
        )}
      </Center>
      <Flex justify={'flex-end'} align={'center'}>
        {rightNode}
      </Flex>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: ${({ theme }) => theme.other.zIndex.header};
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  padding: 10px ${({ theme }) => theme.other.pageSpacing};
  height: ${({ theme }) => theme.other.headerHeight};
`
