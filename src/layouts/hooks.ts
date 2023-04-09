import { useContext, useEffect } from 'react'

import { LayoutContext } from './Layout'

export function useLayoutHeader() {
  const { setLeftNode, setCenterNode, setRightNode } = useContext(LayoutContext)

  useEffect(() => {
    return () => {
      setLeftNode?.(undefined)
      setCenterNode?.(undefined)
      setRightNode?.(undefined)
    }
  }, [setCenterNode, setLeftNode, setRightNode])

  return {
    setLeftNode,
    setCenterNode,
    setRightNode,
  }
}
