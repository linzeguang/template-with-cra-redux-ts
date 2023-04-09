import React from 'react'
import styled from '@emotion/styled'
import type { LoadingOverlayProps } from '@mantine/core'
import { LoadingOverlay } from '@mantine/core'

const LoadingGif = styled.img`
  margin: auto;
  max-width: 80%;
  max-height: 60%;
`

export const Loading: React.FC<LoadingOverlayProps> = (props) => {
  return (
    <LoadingOverlay
      loader={<LoadingGif src={require('../../assets/gifs/loading.gif')} />}
      overlayOpacity={0.6}
      {...props}
    />
  )
}
