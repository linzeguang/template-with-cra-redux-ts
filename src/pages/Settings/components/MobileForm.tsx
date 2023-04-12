import React, { useCallback } from 'react'
import { Space } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'

import { memberInterface, type ModifyTelParams } from '@/apis'
import type { RouterType, TranslationType } from '@/components/HOC'
import { WithRouter, WithTranslation } from '@/components/HOC'
import { StepButton, useToast } from '@/components/Uikit'

import { Form, NormalInput } from './Form'

const MobileForm: React.FC<TranslationType & RouterType> = ({ t, navigate }) => {
  const toast = useToast()
  const [loading, loadingHandlers] = useDisclosure(false)
  const form = useForm<ModifyTelParams>({
    initialValues: {
      telephone: '',
      newTelephone: '',
      // smsCode: '',
    },
    validate: {
      telephone: (value) => (value ? null : true),
      newTelephone: (value) => (value ? null : true),
    },
  })
  // const { newTelephone, telephone } = useMemo(() => form.values, [form.values])

  // const fetchSms = useCallback(async () => {
  //   if (!telephone || !newTelephone) return
  //   const checkRes = await memberInterface.checkTelephone({ telephone, newTelephone })
  //   if (!checkRes.isSuccess) {
  //     form.setFieldError('newTelephone', checkRes.message)
  //     return
  //   }
  //   return memberInterface.sendSmsCode({ telephone })
  // }, [form, newTelephone, telephone])

  const handleSubmit = useCallback(
    async (values: ModifyTelParams) => {
      loadingHandlers.open()
      try {
        const { isSuccess, message } = await memberInterface.modifyTelephone(values)
        if (!isSuccess) throw message
        toast(t('settings.mobileNumberUpdatedSuccessfully'))
        navigate(-1)
      } catch (error) {
        toast(<>{error}</>)
      }
      loadingHandlers.close()
    },
    [loadingHandlers, navigate, t, toast],
  )

  return (
    <Form onSubmit={form.onSubmit(handleSubmit)}>
      <NormalInput
        disabled={loading}
        placeholder={t('settings.originalMobile') as string}
        {...form.getInputProps('telephone')}
      />
      <Space h='md' />
      <NormalInput
        disabled={loading}
        placeholder={t('settings.newMobile') as string}
        {...form.getInputProps('newTelephone')}
      />
      {/* <SmsInput
        disabled={loading}
        placeholder={t('settings.verificationCode') as string}
        fetchSms={fetchSms}
        {...form.getInputProps('smsCode')}
      /> */}
      <Space h='10vh' />
      <StepButton type='submit' loading={loading}>
        {t('submit')}
      </StepButton>
    </Form>
  )
}

export default WithTranslation(WithRouter(MobileForm)) as React.FC
