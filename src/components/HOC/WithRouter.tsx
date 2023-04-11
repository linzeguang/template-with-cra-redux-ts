import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export type RouterType = { navigate: ReturnType<typeof useNavigate> } & ReturnType<
  typeof useLocation
>

export const WithRouter = <Props extends RouterType>(Component: React.FC<Props>) => {
  const EnhancedComponent: React.FC<Props> = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    return <Component {...props} navigate={navigate} {...location} />
  }

  return EnhancedComponent
}
