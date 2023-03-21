import type { PropsWithChildren } from 'react'
import React from 'react'
import styled from '@emotion/styled'
// import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { Close } from '../Svgr'

import type { ModalProps } from './types'

const CloseButton = styled(Close)(() => ({
  position: 'absolute',
  top: 16,
  right: 24,
  width: 32,
  height: 32,
  cursor: 'pointer',
}))

const Title = styled(DialogTitle)<{ hideCloseButton: boolean }>(({ hideCloseButton }) => ({
  position: 'relative',
  display: 'flex',
  paddingRight: !hideCloseButton ? 80 : undefined,
  minHeight: 64,
}))

const Modal: React.FC<PropsWithChildren<ModalProps>> = (props) => {
  const { children, hideCloseButton = false, title, onDismiss } = props

  return (
    <React.Fragment>
      {(title || !hideCloseButton) && (
        <Title id='alert-dialog-title' hideCloseButton={hideCloseButton}>
          {title}
          {!hideCloseButton && <CloseButton onClick={onDismiss} />}
        </Title>
      )}
      <DialogContent>
        {['string', 'number'].includes(typeof children) ? (
          <DialogContentText>{children}</DialogContentText>
        ) : (
          children
        )}
      </DialogContent>
    </React.Fragment>
  )
}

export default Modal
