import services from '@/apis/services'
import { userModel } from '@/models'

import { baseUrl } from '../config'
import type { MemberInfo } from '../member'

import type { LoginParams, RegisterParams } from './types'

const baseName = baseUrl

// 登录
export const loginByAccount = (params: LoginParams) =>
  services.post<MemberInfo, LoginParams>(baseName + '/login', { ...params })

// 注册
export const registerByAccount = (params: RegisterParams) =>
  services.post<MemberInfo, RegisterParams>(baseName + '/register', { ...params })

// 登出
export const logout = () => {
  const { token } = userModel.state

  return services.post(baseName + '/logout', undefined, {
    headers: { token: 'Bearer ' + token },
  })
}
