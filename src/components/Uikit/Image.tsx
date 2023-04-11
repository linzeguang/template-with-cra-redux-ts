import React from 'react'
import styled from '@emotion/styled'

import type { ImageAssets } from '@/assets/images'

import { FixedBox } from './Box'

export const Image = styled.img``

const TopImageBox = styled(FixedBox)<{ filterColor: string }>`
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;

  img {
    width: 100%;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme, filterColor }) =>
      theme.fn.gradient({ from: 'transparent', to: filterColor, deg: 180 })};
  }
`

export const PageTopImage: React.FC<{ assets: ImageAssets; color?: string }> = (props) => {
  const { assets, color = '#000' } = props

  return (
    <TopImageBox filterColor={color}>
      <Image src={assets['1x']} srcSet={`${assets['1x']}, ${assets['2x']} 2x`} />
    </TopImageBox>
  )
}
