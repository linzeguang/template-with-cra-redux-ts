import { useCallback, useContext, useEffect, useRef } from 'react'
import get from 'lodash/get'

import { Context } from './ModalContext'
import type { Handler } from './types'

export function useModal(
  modal: React.ReactNode,
  closeOnOverlayClick = true,
  updateOnPropsChange = false,
  modalId = 'defaultNodeId',
): [Handler, Handler] {
  const currentModal = useRef<React.ReactNode>()
  currentModal.current = modal

  const { isOpen, nodeId, modalNode, setModalNode, onPresent, onDismiss } = useContext(Context)

  const onPresentCallback = useCallback(() => {
    onPresent(currentModal.current, modalId, closeOnOverlayClick)
  }, [modalId, onPresent, closeOnOverlayClick])

  // 如果 props 发生变化，则更新组件
  // 小心使用，因为它可能会导致不必要的重新渲染
  // 通常，如果模态是静态的，则不需要更新，当您希望 props 发生变化时使用
  useEffect(() => {
    // 如果同一页面上有 2 个 useModal 挂钩并且其中一个具有 updateOnPropsChange，则需要 NodeId
    if (updateOnPropsChange && isOpen && nodeId === modalId) {
      const modalProps = get(modal, 'props')
      const oldModalProps = get(modalNode, 'props')
      if (
        modalProps &&
        oldModalProps &&
        JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)
      ) {
        setModalNode(modal)
      }
    }
  }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode])

  return [onPresentCallback, onDismiss]
}
