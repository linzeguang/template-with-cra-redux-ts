import React from 'react'
import { Text } from '@mantine/core'

import { FlexColumn } from './Box'

export const NoData: React.FC<{ text?: string; mt?: string | number }> = ({ text, mt }) => {
  return (
    <FlexColumn align='center' sx={{ marginTop: mt }}>
      <img src='./images/no-data.png' alt='no-data' width={108} />
      {text && <Text sx={{ marginTop: '1rem', fontSize: '1rem', color: '#999999' }}>{text}</Text>}
    </FlexColumn>
  )
}
