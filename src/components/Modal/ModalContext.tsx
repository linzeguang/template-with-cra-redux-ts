import type { PropsWithChildren } from 'react'
import React, { createContext, useCallback, useMemo, useState } from 'react'
import type { DialogProps } from '@mui/material/Dialog'
import Dialog from '@mui/material/Dialog'

import type { ModalsContext } from './types'

export const Context = createContext<ModalsContext>({
  isOpen: false,
  nodeId: '',
  modalNode: null,
  setModalNode: () => null,
  onPresent: () => null,
  onDismiss: () => null,
})

export const ModalProvider: React.FC<PropsWithChildren> = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalNode, setModalNode] = useState<React.ReactNode>()
  const [nodeId, setNodeId] = useState('')
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true)

  const handlePresent = useCallback(
    (node: React.ReactNode, newNodeId: string, closeOverlayClick: boolean) => {
      setModalNode(node)
      setIsOpen(true)
      setNodeId(newNodeId)
      setCloseOnOverlayClick(closeOverlayClick)
    },
    [],
  )

  const handleDismiss = useCallback(() => {
    setModalNode(undefined)
    setIsOpen(false)
    setNodeId('')
    setCloseOnOverlayClick(true)
  }, [])

  const handleClose = useCallback<Exclude<DialogProps['onClose'], undefined>>(
    (_, reason) => {
      switch (reason) {
        case 'backdropClick':
          if (closeOnOverlayClick) handleDismiss()
          break
        default:
          handleDismiss()
      }
    },
    [closeOnOverlayClick, handleDismiss],
  )

  const providerValue = useMemo(() => {
    return {
      isOpen,
      nodeId,
      modalNode,
      setModalNode,
      onPresent: handlePresent,
      onDismiss: handleDismiss,
    }
  }, [isOpen, nodeId, modalNode, setModalNode, handlePresent, handleDismiss])

  return (
    <Context.Provider value={providerValue}>
      <React.Fragment {...props} />
      <Dialog
        open={isOpen}
        maxWidth={false}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        {React.isValidElement(modalNode) &&
          React.cloneElement(modalNode, {
            // @ts-ignore
            onDismiss: handleDismiss,
          })}
      </Dialog>
    </Context.Provider>
  )
}
