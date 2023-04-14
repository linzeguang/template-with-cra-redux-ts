import type { ReactNode } from 'react'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import type { DrawerProps as MDrawerProps } from '@mantine/core'
import { Drawer as MDrawer, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { CancelButton, ConfirmButton } from './Button'

const Button = styled.button``

const Content = styled.div`
  flex: 1;
`

export interface DrawerProps extends Partial<MDrawerProps> {
  targetButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  targetNode: ReactNode
  onOpen?: () => void
  onConfirm?: () => void
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { t } = useTranslation()
  const {
    children,
    opened = false,
    targetNode,
    targetButtonProps,
    onClose,
    onOpen,
    onConfirm,
    ...rest
  } = props
  const [visible, { open, close }] = useDisclosure(opened)

  const handleClose = useCallback(() => {
    onClose?.()
    close()
  }, [close, onClose])

  const handleOpen = useCallback(() => {
    onOpen?.()
    open()
  }, [onOpen, open])

  const handleSubmit = useCallback(() => {
    onConfirm?.()
    close()
  }, [close, onConfirm])

  return (
    <React.Fragment>
      <Button {...targetButtonProps} onClick={handleOpen}>
        {targetNode}
      </Button>
      <MDrawer
        opened={visible}
        onClose={handleClose}
        position='right'
        withCloseButton={false}
        {...rest}
      >
        <Content>{children}</Content>
        <Group position='right' grow>
          <div />
          <CancelButton onClick={handleClose}>{t('cancel')}</CancelButton>
          <ConfirmButton onClick={handleSubmit}>{t('confirm')}</ConfirmButton>
        </Group>
      </MDrawer>
    </React.Fragment>
  )
}
