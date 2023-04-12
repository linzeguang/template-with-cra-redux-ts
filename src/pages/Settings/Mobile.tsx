import React from 'react'
import { useModel } from 'foca'
import { rem, Text } from '@mantine/core'

import type { TranslationType } from '@/components/HOC'
import { WithTranslation } from '@/components/HOC'
import { PageMain } from '@/components/Uikit'
import { userModel } from '@/models'

import MobileForm from './components/MobileForm'

const Mobile: React.FC<TranslationType> = ({ t }) => {
  const { memberInfo } = useModel(userModel)
  return (
    <PageMain>
      <Text
        sx={(theme) => ({ marginTop: rem(30), color: theme.colors['gold'][3], fontSize: rem(12) })}
      >
        {t('settings.mobileNumberBound')} {memberInfo?.telephone || '--'}
      </Text>
      <MobileForm />
    </PageMain>
  )
}

export default WithTranslation(Mobile) as React.FC
