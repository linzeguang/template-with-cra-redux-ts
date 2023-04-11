import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import type { SettingsItemProps } from '@/components/Uikit'
import { PageMain, SettingsItem, useStayTuned } from '@/components/Uikit'

const Settings: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const toastStayTuned = useStayTuned()

  const list = useMemo<SettingsItemProps[]>(
    () => [
      {
        name: t('settings.securityCenter'),
        onClick: () => navigate('/settings/security-center'),
      },
      {
        name: t('settings.detectNewVersions'),
        onClick: toastStayTuned,
      },
      {
        name: t('settings.aboutUs'),
        onClick: toastStayTuned,
      },
    ],
    [navigate, t, toastStayTuned],
  )

  return (
    <PageMain>
      {list.map((item) => (
        <SettingsItem key={item.name} {...item} />
      ))}
    </PageMain>
  )
}

export default Settings
