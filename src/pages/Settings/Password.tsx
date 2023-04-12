import React, { useCallback, useEffect, useMemo } from 'react'
import useUrlState from '@ahooksjs/use-url-state'
import { Button, rem, Space, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'

import { memberInterface } from '@/apis'
import type { RouterType, TranslationType } from '@/components/HOC'
import { WithRouter, WithTranslation } from '@/components/HOC'
import { PageMain, StepButton, useToast } from '@/components/Uikit'
import { regular } from '@/constants'
import type { Keys } from '@/i18n'
import { useLayoutHeader } from '@/layouts'
import { userModel } from '@/models'

import { Form, NormalInput, PasswordInput, SmsInput } from './components/Form'

interface FormData {
  telephone: string
  smsCode: string
  password: string
  confirmPassword: string
}

interface UrlState extends Partial<Omit<FormData, 'password' | 'confirmPassword'>> {
  type: 'retrieve' | 'reset' | 'change'
}

const headerTitle: Record<UrlState['type'], Keys> = {
  retrieve: 'settings.retrievePassword',
  reset: 'settings.resetPassword',
  change: 'settings.changePassword',
}

const Password: React.FC<TranslationType & RouterType> = ({ t, navigate }) => {
  const toast = useToast()
  const { setCenterNode } = useLayoutHeader()
  const [loading, loadingHandlers] = useDisclosure(false)
  const [querys, setQuerys] = useUrlState<UrlState>({ type: 'change' })
  const { type: stepType, telephone: qTel, smsCode: qSms } = querys as UrlState

  const form = useForm<FormData>({
    initialValues: {
      telephone: qTel || '',
      smsCode: qSms || '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      telephone: (value) => (value ? null : true),
      smsCode: (value) => (value ? null : true),
      password: (value) => (regular.password.test(value) ? null : t('sign.password.rule')),
      confirmPassword: (value, values) => {
        if (!value) return true
        if (stepType === 'reset' && values.password !== value) return t('sign.confirmPassword.rule')
        return null
      },
    },
  })

  const Retrieve = useMemo(
    () => (
      <>
        <Text
          sx={(theme) => ({
            position: 'absolute',
            top: '-2rem',
            color: theme.colors['gold'][3],
            fontSize: rem(12),
            lineHeight: 2,
          })}
        >
          {t('settings.phoneVerfication')}
        </Text>
        <NormalInput
          disabled={loading}
          placeholder={t('settings.originalMobile') as string}
          {...form.getInputProps('telephone')}
        />
        <SmsInput
          disabled={loading}
          placeholder={t('settings.verificationCode') as string}
          fetchSms={async () => undefined}
          {...form.getInputProps('smsCode')}
        />
      </>
    ),
    [form, loading, t],
  )
  const Reset = useMemo(
    () => (
      <>
        <PasswordInput
          disabled={loading}
          placeholder={t('settings.newPassword') as string}
          {...form.getInputProps('password')}
        />
        <PasswordInput
          disabled={loading}
          placeholder={t('settings.confirmPassword') as string}
          {...form.getInputProps('confirmPassword')}
        />
      </>
    ),
    [form, loading, t],
  )
  const Change = useMemo(
    () => (
      <>
        <PasswordInput
          disabled={loading}
          placeholder={t('settings.currentPassword') as string}
          sx={{ '.mantine-TextInput-input': { paddingRight: '8rem' } }}
          rightSection={
            <Button variant='subtle' sx={{ padding: 0 }}>
              <Text size='xs'>{t('sign.forgot')}</Text>
            </Button>
          }
          {...form.getInputProps('confirmPassword')}
        />
        <PasswordInput
          disabled={loading}
          placeholder={t('settings.newPassword') as string}
          {...form.getInputProps('password')}
        />
      </>
    ),
    [form, loading, t],
  )

  const handleStep = useCallback(async () => {
    const { password, confirmPassword, telephone, smsCode } = form.values

    if (stepType === 'retrieve') {
      const hasError = [form.validateField('telephone'), form.validateField('smsCode')].some(
        (item) => item.hasError,
      )
      if (hasError) return
      return setQuerys({ type: 'reset', telephone, smsCode })
    }
    if (form.validate().hasErrors) return
    loadingHandlers.open()
    try {
      const { isSuccess, message } = await (stepType === 'change'
        ? memberInterface.modifyPassword({ password: confirmPassword, newPassword: password })
        : memberInterface.findPassword({
            newPassword: password,
            telephone: telephone || '',
            smsCode: smsCode || '',
          }))

      if (!isSuccess) throw message
      toast(t('settings.passwordUpdatedSuccessfully'))
      userModel.clear()
      navigate('/sign', { replace: true })
    } catch (error) {
      toast(<>error</>)
    }
    loadingHandlers.close()
  }, [form, loadingHandlers, navigate, setQuerys, stepType, t, toast])

  useEffect(() => {
    setCenterNode(t(headerTitle[stepType]))
  }, [setCenterNode, stepType, t])

  return (
    <>
      <PageMain style={{ flex: 1 }}>
        <Form>
          {stepType === 'retrieve' && Retrieve}
          {stepType === 'reset' && Reset}
          {stepType === 'change' && Change}
        </Form>
      </PageMain>
      <PageMain>
        <StepButton loading={loading} onClick={handleStep}>
          {t(stepType === 'retrieve' ? 'next' : 'submit')}
        </StepButton>
        <Space h='10vh' />
      </PageMain>
    </>
  )
}

export default WithTranslation(WithRouter(Password)) as React.FC
