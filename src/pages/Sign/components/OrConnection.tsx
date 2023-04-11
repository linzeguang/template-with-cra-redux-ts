import React from 'react'
import styled from '@emotion/styled'
import { Flex, rem, Space, Text } from '@mantine/core'

import type { TranslationType } from '@/components/HOC'
import { WithTranslation } from '@/components/HOC'
import { FlexColumn } from '@/components/Uikit'

const Title = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${rem(12)};

  span {
    flex: 1;
    position: relative;
    height: 1px;

    ::after {
      content: '';
      position: absolute;
      top: 0;
      display: block;
      width: 5px;
      height: 5px;
      border: 1px solid #ffeb3b;
      border-radius: 50%;
    }

    &.left {
      margin-right: 12px;
      background: linear-gradient(to right, transparent, #ffeb3b);
      ::after {
        right: 0;
        transform: translate(4px, -2px);
      }
    }
    &.right {
      margin-left: 12px;
      background: linear-gradient(to left, transparent, #ffeb3b);
      ::after {
        left: 0;
        transform: translate(-4px, -2px);
      }
    }
  }
`

const OrConnection: React.FC<TranslationType> = ({ t }) => {
  return (
    <FlexColumn>
      <Title>
        <span className='left' />
        {t('sign.otherConnection')}
        <span className='right' />
      </Title>
      <Space h='sm' />
      <Text sx={{ color: '#333', fontSize: rem(12) }} align='center'>
        {t('stayTuned')}
      </Text>
      <Space h='sm' />
    </FlexColumn>
  )
}

export default WithTranslation(OrConnection) as React.FC
