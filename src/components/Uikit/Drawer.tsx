import type { ReactNode } from 'react'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import type { DrawerProps as MDrawerProps } from '@mantine/core'
import { Drawer as MDrawer, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { CancelButton, ConfirmButton } from './Button'

const Button = styled.button`
  height: 100%;
`

export interface DrawerProps extends Partial<MDrawerProps> {
  targetNode: ReactNode
  onOpen?: () => void
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { t } = useTranslation()
  const { children, opened = false, targetNode, onClose, onOpen, ...rest } = props
  const [visible, { open, close }] = useDisclosure(opened)

  const handleClose = useCallback(() => {
    onClose?.()
    close()
  }, [close, onClose])

  const handleOpen = useCallback(() => {
    onOpen?.()
    open()
  }, [onOpen, open])

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>{targetNode}</Button>
      <MDrawer
        opened={visible}
        onClose={handleClose}
        position='right'
        withCloseButton={false}
        {...rest}
      >
        {children}
        <Group position='right' grow>
          <div />
          <CancelButton onClick={handleClose}>{t('cancel')}</CancelButton>
          <ConfirmButton onClick={handleOpen}>{t('submit')}</ConfirmButton>
        </Group>
      </MDrawer>
    </React.Fragment>
  )
}
