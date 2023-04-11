import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useModel } from 'foca'

import type { SettingsItemProps } from '@/components/Uikit'
import { PageMain, SettingsItem } from '@/components/Uikit'
import { userModel } from '@/models'

const basePath = '/settings/security-center'

const SecurityCenter: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
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

export default SecurityCenter
