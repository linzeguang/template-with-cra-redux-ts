/**
 * @Author linzeguang
 * @Date 2023-03-28 11:04:29
 * @LastEditTime 2023-04-11 15:37:24
 * @LastEditors linzeguang
 * @Description
 */

import React from 'react'
import { rem, Text } from '@mantine/core'

import type { TranslationType } from '@/components/HOC'
import { WithTranslation } from '@/components/HOC'
import { PageMain } from '@/components/Uikit'

const Welcome: React.FC<TranslationType> = ({ t }) => {
  return (
    <PageMain>
      <Text mt={rem(34)} weight={700} size={rem(24)}>
        {t('sign.hello')}
      </Text>
      <Text weight={700} size={rem(24)}>
        {t('sign.welcome')}
      </Text>
    </PageMain>
  )
}

export default WithTranslation(Welcome) as React.FC
