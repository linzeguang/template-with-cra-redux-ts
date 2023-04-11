import React from 'react'
import { Text } from '@mantine/core'

import type { TranslationType } from '@/components/HOC'
import { WithTranslation } from '@/components/HOC'
import { PageMain } from '@/components/Uikit'

const Mobile: React.FC<TranslationType> = ({ t }) => {
  return (
    <PageMain>
      <Text color='gold'>{t('settings.mobileNumberBound')}</Text>
    </PageMain>
  )
}

export default WithTranslation(Mobile) as React.FC
