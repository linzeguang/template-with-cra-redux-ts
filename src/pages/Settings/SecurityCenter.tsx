import React, { useMemo } from 'react'
import { useModel } from 'foca'

import {
  type RouterType,
  type TranslationType,
  WithRouter,
  WithTranslation,
} from '@/components/HOC'
import type { SettingsItemProps } from '@/components/Uikit'
import { PageMain, SettingsItem } from '@/components/Uikit'
import { userModel } from '@/models'

const basePath = '/settings/security-center'

const SecurityCenter: React.FC<TranslationType & RouterType> = ({ t, navigate }) => {
  const { userInfo } = useModel(userModel)

  const list = useMemo<SettingsItemProps[]>(
    () => [
      {
        name: t('settings.mobileNumber'),
        value: userInfo?.telephone,
        onClick: () => navigate(basePath + '/mobile'),
      },
      {
        name: t('settings.changePassword'),
        onClick: () => navigate(basePath + '/password?type=change'),
      },
    ],
    [navigate, t, userInfo?.telephone],
  )
  return (
    <PageMain>
      {list.map((item) => (
        <SettingsItem key={item.name} {...item} />
      ))}
    </PageMain>
  )
}

export default WithTranslation(WithRouter(SecurityCenter)) as React.FC
