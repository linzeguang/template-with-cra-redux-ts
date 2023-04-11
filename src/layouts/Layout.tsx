import React, { createContext, useMemo, useState } from 'react'

import { useRoute } from '@/routes'

import Header from './Header'
import Main from './Main'
import Navs from './Navs'

interface Context {
  setLeftNode: React.Dispatch<React.SetStateAction<React.ReactNode>>
  setCenterNode: React.Dispatch<React.SetStateAction<React.ReactNode>>
  setRightNode: React.Dispatch<React.SetStateAction<React.ReactNode>>
}

export const LayoutContext = createContext<Context>({
  setLeftNode: () => null,
  setCenterNode: () => null,
  setRightNode: () => null,
})

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const route = useRoute()
  const [leftNode, setLeftNode] = useState<React.ReactNode>()
  const [centerNode, setCenterNode] = useState<React.ReactNode>()
  const [rightNode, setRightNode] = useState<React.ReactNode>()

  const { showHeader = false, showNavs = false, name } = useMemo(() => route || {}, [route])

  return (
    <LayoutContext.Provider
      value={{
        setLeftNode,
        setCenterNode,
        setRightNode,
      }}
    >
      <Header visible={showHeader} title={name} {...{ leftNode, centerNode, rightNode }} />
      <Main showHeader={showHeader} showNavs={showNavs}>
        {children}
      </Main>
      <Navs visible={showNavs} />
    </LayoutContext.Provider>
  )
}

export default Layout