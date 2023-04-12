import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { Center, Flex, px, rem, Text, useMantineTheme } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

import type { RouterType } from '@/components/HOC'
import { WithRouter } from '@/components/HOC'
import { Back } from '@/components/Svgr'

export interface HeaderNodes {
  leftNode?: React.ReactNode
  centerNode?: React.ReactNode
  rightNode?: React.ReactNode
}

interface Props extends HeaderNodes {
  visible: boolean
  alpha?: boolean
  title?: string | null
}

const Header: React.FC<Props & RouterType> = ({
  alpha = true,
  visible,
  title,
  leftNode,
  centerNode,
  rightNode,
  navigate,
}) => {
  const { fn, other, black } = useMantineTheme()
  const [{ y: scrollY }] = useWindowScroll()
  const headerHeight = px(other.headerHeight)

  const memoAlpha = useMemo<number>(() => {
    if (alpha) return 0
    if (scrollY <= 0) return 0
    if (scrollY >= headerHeight) return 1
    return scrollY / headerHeight
  }, [alpha, headerHeight, scrollY])

  if (!visible) return null
  return (
    <HeaderWrapper style={{ backgroundColor: fn.rgba(black, memoAlpha) }}>
      <Flex justify={'flex-start'} align={'center'}>
        {leftNode || <Back onClick={() => navigate(-1)} />}
      </Flex>
      <Center>
        <Text weight={400} size='1rem'>
          {centerNode || title}
        </Text>
      </Center>
      <Flex justify={'flex-end'} align={'center'}>
        {rightNode}
      </Flex>
    </HeaderWrapper>
  )
}

export default WithRouter(Header) as React.FC<Props>

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: ${({ theme }) => theme.other.zIndex.header};
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  padding: ${rem(10)} ${({ theme }) => theme.other.pageSpacing};
  height: ${({ theme }) => theme.other.headerHeight};

  svg {
    width: ${({ theme }) => `calc(${theme.other.headerHeight} - ${rem(20)})`};
    height: ${({ theme }) => `calc(${theme.other.headerHeight} - ${rem(20)})`};
  }
`
