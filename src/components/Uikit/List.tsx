import React from 'react'
import { Flex, NavLink, rem, Text } from '@mantine/core'

import { ArrowRight } from '../Svgr'

export interface SettingsItemProps {
  name: string
  value?: string
  onClick?: () => void
}

export const SettingsItem: React.FC<SettingsItemProps> = ({ name, value, onClick }) => {
  return (
    <NavLink
      label={name}
      rightSection={
        <Flex align='center'>
          {value && <Text size='xs'>{value}</Text>}
          <ArrowRight />
        </Flex>
      }
      onClick={onClick}
      sx={{
        padding: `${rem(20)} 0`,
        borderBottom: '1px solid #785C00',
      }}
    />
  )
}
