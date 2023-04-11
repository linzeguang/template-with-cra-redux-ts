import React, { useMemo } from 'react'

import type { RouterType, TranslationType } from '@/components/HOC'
import { WithRouter, WithTranslation } from '@/components/HOC'
import type { SettingsItemProps } from '@/components/Uikit'
import { PageMain, SettingsItem, useStayTuned } from '@/components/Uikit'

const Settings: React.FC<TranslationType & RouterType> = ({ t, navigate }) => {
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

export default WithTranslation(WithRouter(Settings)) as React.FC
