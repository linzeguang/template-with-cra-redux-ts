import React from 'react'
import styled from '@emotion/styled'
import type { LoadingOverlayProps } from '@mantine/core'
import { LoadingOverlay, useMantineTheme } from '@mantine/core'

const LoadingGif = styled.img`
  max-width: 40%;
  max-height: 40%;
`

export const Loading: React.FC<LoadingOverlayProps & { loaderStyle?: React.CSSProperties }> = (
  props,
) => {
  const { children, loaderStyle, ...rest } = props
  const theme = useMantineTheme()
  return (
    <>
      <LoadingOverlay
        zIndex={theme.other.zIndex.loading}
        loader={<LoadingGif style={loaderStyle} src={require('../../assets/gifs/loading.gif')} />}
        overlayOpacity={0.1}
        overlayColor={theme.black}
        {...rest}
      />
      {!rest.visible && props.children}
    </>
  )
}
