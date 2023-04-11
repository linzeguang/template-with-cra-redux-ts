import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import useUrlState from '@ahooksjs/use-url-state'
import styled from '@emotion/styled'
import type { ButtonProps, TextProps } from '@mantine/core'
import { Button, createPolymorphicComponent, rem, Space, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure, useScrollIntoView } from '@mantine/hooks'

import { signImages } from '@/assets/images'
import { Write } from '@/components/Svgr'
import { Box, FlexColumn, Image } from '@/components/Uikit'
import { regular } from '@/constants'
import { selectSignArgeement } from '@/features/userSlice'
import { useAppSelector } from '@/stores'

import { Checkbox, NormalInput, PasswordInput } from './Form'
import OrConnection from './OrConnection'
import type { SignData, SignType } from './types'

const SignForm: React.FC = () => {
  const { t } = useTranslation()
  const [{ signType }, setQuerys] = useUrlState<{ signType: SignType }>({ signType: 'login' })
  const signArgeement = useAppSelector(selectSignArgeement)
  const [loading, handlers] = useDisclosure(false)
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLInputElement>({})
  const form = useForm<SignData>({
    initialValues: {
      username: '',
      password: '',
      argeement: signArgeement,
    },
    validate: {
      username: (value) => (regular.username.test(value) ? null : t('sign.username.rule')),
      password: (value) => (regular.password.test(value) ? null : t('sign.password.rule')),
      ...(signType === 'register'
        ? {
            confirmPassword: (value, { password }) =>
              value === password ? null : t('sign.confirmPassword.rule'),
          }
        : {}),
    },
  })
  const isValided = useMemo(() => form.isValid(), [form])

  const config = useMemo(() => {
    if (signType === 'login')
      return {
        leftButtonText: t('sign.login'),
        rightButtonText: t('sign.register'),
        formItems: (
          <>
            <NormalInput
              disabled={loading}
              placeholder={t('sign.username') as string}
              rightSection={<Write />}
              {...form.getInputProps('username')}
            />
            <PasswordInput
              disabled={loading}
              placeholder={t('sign.password') as string}
              {...form.getInputProps('password')}
            />
          </>
        ),
      }
    return {
      leftButtonText: t('sign.register'),
      rightButtonText: t('sign.login'),
      formItems: (
        <>
          <NormalInput
            disabled={loading}
            label={t('sign.username')}
            placeholder={t('sign.username.rule') as string}
            rightSection={<Write />}
            {...form.getInputProps('username')}
          />
          <PasswordInput
            disabled={loading}
            label={t('sign.password')}
            placeholder={t('sign.password.rule') as string}
            {...form.getInputProps('password')}
          />
          <PasswordInput
            disabled={loading}
            placeholder={t('sign.confirmPassword') as string}
            {...form.getInputProps('confirmPassword')}
          />
          <NormalInput
            disabled={loading}
            placeholder={t('sign.mobile') as string}
            {...form.getInputProps('telephone')}
          />
        </>
      ),
    }
  }, [form, loading, signType, t])

  const handleChange = useCallback(() => {
    setQuerys({ signType: signType === 'login' ? 'register' : 'login' })
    form.reset()
  }, [form, setQuerys, signType])

  const handleSubmit = useCallback(
    (values: SignData) => {
      const { argeement } = values
      if (!argeement) {
        form.setFieldError('argeement', true)
        return scrollIntoView({ alignment: 'center' })
      }
      handlers.open()
    },
    [form, handlers, scrollIntoView],
  )

  return (
    <Wrapper>
      <Content>
        <Image
          className='card-bg'
          src={signImages['card']['1x']}
          srcSet={`${signImages['card']['1x']}, ${signImages['card']['2x']} 2x`}
        />
        <LeftButton>{config.leftButtonText}</LeftButton>
        <RightButton onClick={handleChange}>{config.rightButtonText}</RightButton>
        <Form onSubmit={form.onSubmit(handleSubmit)}>
          <FlexColumn align='center' sx={{ flex: 1 }}>
            <FlexColumn sx={{ flex: 1, width: '100%' }} justify='center'>
              {config.formItems}
            </FlexColumn>
            <>
              <Space h='lg' />
              <Button variant={isValided ? 'gradient' : 'outline'} type='submit' loading={loading}>
                {config.leftButtonText}
              </Button>
              {signType === 'login' ? (
                <>
                  <Space h='xs' />
                  <Button size='xs' variant='subtle'>
                    {t('sign.forgot')}
                  </Button>
                </>
              ) : null}
              <Space h='lg' ref={targetRef} />
              <Checkbox
                disabled={loading}
                label={t('sign.agreement')}
                {...form.getInputProps('argeement', { type: 'checkbox' })}
              />
              <Space h='lg' />
            </>
          </FlexColumn>
          <OrConnection />
        </Form>
      </Content>
    </Wrapper>
  )
}

export default SignForm

const Wrapper = styled(Box)`
  margin-top: ${rem(24)};
  .card-bg {
    position: relative;
    z-index: 1;
    width: 100%;
    pointer-events: none;
  }
`

const Content = styled.div`
  position: relative;
`

const LeftButton = createPolymorphicComponent<'div', TextProps>(styled(Text)`
  position: absolute;
  z-index: 2;
  top: 1.66%;
  height: 8.2%;
  width: 52%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 2rem;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gold[7]};
  }
`)

const RightButton = createPolymorphicComponent<'button', ButtonProps>(styled(Button)`
  position: absolute;
  z-index: 0;
  top: 1.66%;
  right: 2.4%;
  width: 52%;
  height: 8.2%;
  padding-left: 4%;
  font-weight: normal;
  border-radius: 0 ${rem(12)} 0 0;
`)

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  bottom: 0;
  top: 9.86%;
  left: 0;
  right: 0;
  padding: ${rem(20)} ${rem(28)};
  border-radius: 1rem;

  button[type='submit'] {
    width: 100%;
    border-radius: 50px;
  }
`
