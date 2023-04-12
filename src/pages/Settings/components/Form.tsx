import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import type { TextInputProps } from '@mantine/core'
import { Button, Loader, rem, Text, TextInput } from '@mantine/core'
import { useCounter, useInterval } from '@mantine/hooks'

import type { IPromise } from '@/apis/types'
import type { EmptyData } from '@/apis/types'
import { useToast } from '@/components/Uikit'

TextInput.defaultProps = {
  size: 'md',
  rightSectionWidth: 'auto',
  styles: (theme) => ({
    root: {
      position: 'relative',
      marginBottom: rem(24),
      lineHeight: 1,

      ':last-of-type': {
        marginBottom: 0,
      },
    },
    input: {
      paddingRight: rem(56),
      fontSize: rem(14),
      color: theme.colors.gold[8],
      borderColor: 'transparent',

      '::placeholder': {
        fontSize: rem(14),
        color: theme.colors.dark[0],
      },
    },
    rightSection: {
      paddingRight: rem(14),
    },
    error: {
      position: 'absolute',
      bottom: 0,
      transform: 'translateY(120%)',
      paddingLeft: rem(14),
      fontSize: rem(10),
    },
  }),
}

export const NormalInput = React.memo((props: TextInputProps) => <TextInput {...props} />)

export const PasswordInput = React.memo((props: TextInputProps) => (
  <TextInput type='password' {...props} />
))

type SmsStatus = 'loading' | 'loaded' | 'wait'

export const SmsInput = (
  props: TextInputProps & { fetchSms: () => Promise<IPromise<EmptyData> | undefined> },
) => {
  const { fetchSms, ...rest } = props
  const { t } = useTranslation()
  const toast = useToast()
  const [countDown, countDownHandlers] = useCounter(10, { min: 0, max: 60 })
  const { start, stop } = useInterval(countDownHandlers.decrement, 1000)
  const [smsStatus, setSmsStatus] = useState<SmsStatus>('wait')

  const handleSmsCode = useCallback(async () => {
    setSmsStatus('loading')
    try {
      const result = await fetchSms()
      if (!result) return

      const { isSuccess, message } = result
      if (!isSuccess) throw message
      setSmsStatus('loaded')
      start()
    } catch (error) {
      toast(<>{error}</>)
      setSmsStatus('wait')
    }
  }, [fetchSms, start, toast])

  // 处理验证码等待期
  useEffect(() => {
    if (countDown === 0) {
      setSmsStatus('wait')
      stop()
      countDownHandlers.reset()
    }
  }, [countDown, countDownHandlers, stop])

  return (
    <TextInput
      rightSection={
        <Button
          variant='subtle'
          sx={{ padding: 0 }}
          disabled={smsStatus !== 'wait'}
          onClick={handleSmsCode}
        >
          {smsStatus === 'wait' ? (
            <Text size='xs'>{t('settings.send')}</Text>
          ) : smsStatus === 'loading' ? (
            <Loader size='xs' />
          ) : (
            <Text size='xs'>{countDown}s</Text>
          )}
        </Button>
      }
      {...rest}
    />
  )
}

export const Form = styled.form`
  position: relative;
  margin-top: ${rem(62)};
`
