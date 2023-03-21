export type Handler<T = void> = () => T

export interface ModalsContext {
  isOpen: boolean
  nodeId: string
  modalNode: React.ReactNode
  setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>
  onPresent: (node: React.ReactNode, newNodeId: string, closeOverlayClick: boolean) => void
  onDismiss: Handler
}

export interface InjectedProps {
  onDismiss?: Handler
  mode?: string
}

export interface ModalProps extends InjectedProps {
  title?: React.ReactNode
  hideCloseButton?: boolean
}
