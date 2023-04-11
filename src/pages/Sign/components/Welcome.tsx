/**
 * @Author linzeguang
 * @Date 2023-03-28 11:04:29
 * @LastEditTime 2023-04-10 11:12:05
 * @LastEditors linzeguang
 * @Description
 */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { rem, Text } from '@mantine/core'

import { Box } from '@/components/Uikit'

const Welcome: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Box>
      <Text mt={rem(34)} weight={700} size={rem(24)}>
        {t('sign.hello')}
      </Text>
      <Text weight={700} size={rem(24)}>
        {t('sign.welcome')}
      </Text>
    </Box>
  )
}

export default Welcome
