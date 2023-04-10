import React from 'react'
import styled from '@emotion/styled'
import type { LoadingOverlayProps } from '@mantine/core'
import { LoadingOverlay, useMantineTheme } from '@mantine/core'

const LoadingGif = styled.img`
  margin: auto;
  max-width: 80%;
  max-height: 60%;
`

export const Loading: React.FC<LoadingOverlayProps> = (props) => {
  const theme = useMantineTheme()
  return (
    <LoadingOverlay
      zIndex={theme.other.zIndex.loading}
      loader={<LoadingGif src={require('../../assets/gifs/loading.gif')} />}
      overlayOpacity={0.1}
      overlayColor={theme.black}
      {...props}
    />
  )
}
