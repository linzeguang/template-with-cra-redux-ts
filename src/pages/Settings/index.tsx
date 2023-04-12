import React, { useCallback, useMemo } from 'react'
import { Space } from '@mantine/core'

import { signInterface } from '@/apis'
import type { RouterType, TranslationType } from '@/components/HOC'
import { WithRouter, WithTranslation } from '@/components/HOC'
import type { SettingsItemProps } from '@/components/Uikit'
import { PageMain, SettingsItem, StepButton, useModal, useStayTuned } from '@/components/Uikit'
import { userModel } from '@/models'

const Settings: React.FC<TranslationType & RouterType> = ({ t, navigate }) => {
  const toastStayTuned = useStayTuned()

  const handleLogout = useCallback(async () => {
    signInterface.logout()
    userModel.clear()
  }, [])

  const showModal = useModal({
    text: t('sign.logout.confirm'),
    onConfirm: handleLogout,
  })

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
    <>
      <PageMain style={{ flex: 1 }}>
        {list.map((item) => (
          <SettingsItem key={item.name} {...item} />
        ))}
      </PageMain>
      <PageMain>
        <StepButton onClick={showModal}>{t('sign.logout')}</StepButton>
        <Space h='10vh' />
      </PageMain>
    </>
  )
}

export default WithTranslation(WithRouter(Settings)) as React.FC
