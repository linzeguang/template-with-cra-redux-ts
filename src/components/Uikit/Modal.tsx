import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { rem, Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import type { OpenConfirmModal } from '@mantine/modals/lib/context'

interface Params extends OpenConfirmModal {
  text?: string | null
}

export function useModal(params: Params) {
  const { text, ...rest } = params
  const { t } = useTranslation()

  return useCallback(
    () =>
      modals.openConfirmModal({
        withCloseButton: false,
        centered: true,
        children: (
          <Text size='1rem' mt={rem(30)} mb={rem(30)} align='center'>
            {text}
          </Text>
        ),
        groupProps: { grow: true, spacing: 0 },
        cancelProps: {
          variant: 'outline',
          sx: {
            height: rem(52),
            border: '1px solid #785C00',
            borderLeft: 0,
            borderRight: 0,
            borderBottom: 0,
            background:
              'linear-gradient(180deg, #1F1700 0%, rgba(115, 86, 0, 0.49) 51.39%, #1F1700 100%)',
            borderRadius: 0,
            ':focus': {
              outline: 'none',
            },
          },
        },
        confirmProps: {
          variant: 'outline',
          sx: {
            height: rem(52),
            border: '1px solid #785C00',
            borderRight: 0,
            borderBottom: 0,
            background:
              'linear-gradient(180deg, #1F1700 0%, rgba(115, 86, 0, 0.49) 51.39%, #1F1700 100%)',
            borderRadius: 0,
            ':focus': {
              outline: 'none',
            },
          },
        },
        labels: { confirm: t('ok'), cancel: t('cancel') },
        ...rest,
      }),
    [rest, t, text],
  )
}
