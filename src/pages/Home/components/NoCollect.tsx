import React from 'react'
import styled from '@emotion/styled'
import { Flex, rem, Text } from '@mantine/core'

import { noColloct } from '@/assets/images'
import { NoCollect as NoCollectSvg } from '@/components/Svgr'
import { FlexColumn } from '@/components/Uikit'

const Button = styled.button({
  position: 'relative',
  width: '100%',
  height: '5rem',
  marginBottom: rem(52),
  padding: '6px 10px',
  display: 'flex',
  alignItems: 'flex-start',
  transform: 'translateZ(0)',

  '::after': {
    content: "''",
    position: 'absolute',
    zIndex: -2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, #fef924, #522d00)',
    borderRadius: '0.5rem',
  },
  '::before': {
    content: "''",
    position: 'absolute',
    zIndex: -1,
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    background: '#303030',
    borderRadius: '0.5rem',
  },
})

const NoCollectIcon = styled(NoCollectSvg)`
  position: absolute;
  right: ${rem(2)};
  top: ${rem(2)};
  width: 12px;
  height: 12px;
  padding: 3px;
  box-sizing: content-box;
  border: 1px dashed #e6e21e;
`

const Arrow = styled('div')({
  position: 'absolute',
  width: rem(28),
  height: rem(64),
  top: 0,
  right: 0,
  transform: 'translate(120%, -80%)',
  border: '2px solid',
  borderImage: 'linear-gradient(to bottom, transparent 0%, #FFEA4F 100%) 2',
  borderLeftWidth: 0,
  borderTopWidth: 0,

  '::after': {
    content: "''",
    width: 6,
    height: 6,
    borderTop: '2px solid #FFEA4F',
    borderLeft: '2px solid #FFEA4F',
    position: 'absolute',
    bottom: -1,
    left: -4,
    transform: 'translate(50%, 50%) rotate(-45deg)',
  },
})

const NoCollect: React.FC = () => {
  return (
    <FlexColumn align='center' mt='4vh'>
      <Button>
        <Text size='xs' align='left'>
          Click on the heart-shaped icon to collect your favorite games.
        </Text>
      </Button>
      <Flex sx={{ position: 'relative' }}>
        <Arrow />
        <NoCollectIcon />
        <img src={noColloct} alt='no-collect' style={{ width: rem(80) }} />
      </Flex>
    </FlexColumn>
  )
}

export default NoCollect
