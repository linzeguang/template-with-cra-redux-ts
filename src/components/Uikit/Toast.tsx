import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import type { NotificationProps } from '@mantine/notifications'
import { Notifications, notifications } from '@mantine/notifications'

export const Toast = React.memo(() => {
  return (
    <Notifications
      notificationMaxHeight='auto'
      position='bottom-center'
      limit={1}
      sx={{
        width: 'auto',
        maxWidth: '50vw',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
})

export const useToast = () =>
  useCallback(
    (message: NotificationProps['message'], options?: Omit<NotificationProps, 'message'>) => {
      notifications.show({
        message: <>{message}</>,
        ...options,
      })
      notifications.cleanQueue()
    },
    [],
  )

export const useStayTuned = () => {
  const { t } = useTranslation()
  const toast = useToast()

  return useCallback(() => toast(t('stayTuned')), [t, toast])
}
