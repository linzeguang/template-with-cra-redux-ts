/**
 * @Author linzeguang
 * @Date 2023-03-28 18:38:16
 * @LastEditTime 2023-04-10 18:49:39
 * @LastEditors linzeguang
 * @Description
 */

// import store from '@/stores'

import services from '../services'
import type { EmptyData, IList, IListParams } from '../types'

import type {
  CheckSmsParams,
  CheckTelParams,
  FindPwdParams,
  LoginParams,
  ModifyPwdParams,
  ModifyTelParams,
  RegisterParams,
  TelephoneParams,
  UserInfo,
  Wallet,
  WalletRecord,
  WalletRecordParams,
} from './types.user'

const baseName = '/member'

// 登录
export const loginByAccount = (params: LoginParams) =>
  services.post<UserInfo, LoginParams>(baseName + '/login/loginByAccount', { ...params })

// 注册
export const registerByAccount = (params: RegisterParams) =>
  services.post<UserInfo, RegisterParams>(baseName + '/login/registerByAccount', { ...params })

// 登出
// export const logout = () => {
//   const { user } = store.getState()
//   const { token } = user

//   return services.post(baseName + '/login/logout', undefined, {
//     headers: { token },
//   })
// }

// 获取验证码
export const sendSmsCode = (params: TelephoneParams) =>
  services.post<EmptyData, TelephoneParams>(baseName + '/login/sendSmsCode', { ...params })

// 找回密码
export const findPassword = (params: FindPwdParams) =>
  services.post<EmptyData, FindPwdParams>(baseName + '/login/findPassword', { ...params })

// 校验验证码
export const checkSmsCode = (parmas: CheckSmsParams) =>
  services.post<EmptyData, CheckSmsParams>(baseName + '/login/checkSmsCode', { ...parmas })

// 获取会员信息
export const customerInfo = () => services.get<UserInfo>(baseName + '/customer/info')

// 获取钱包信息
export const walletInfo = () => services.get<Wallet>(baseName + '/wap/wallet/info')

// 修改手机号-校验手机号
export const checkTelephone = (parmas: CheckTelParams) =>
  services.post<EmptyData, CheckTelParams>(baseName + '/customer/checkTelephone', { ...parmas })

// 修改密码
export const modifyPassword = (parmas: ModifyPwdParams) =>
  services.post<EmptyData, ModifyPwdParams>(baseName + '/customer/modifyPassword', { ...parmas })

// 修改手机
export const modifyTelephone = (parmas: ModifyTelParams) =>
  services.post<EmptyData, ModifyTelParams>(baseName + '/customer/modifyTelephone', { ...parmas })

// 会员钱包流水
export const walletRecord = (params: IListParams<WalletRecordParams>) =>
  services.post<WalletRecord[], IListParams<WalletRecordParams>, IList>(
    baseName + '/customer/wallet/getRecords',
    {
      ...params,
    },
  )

// 会员钱包流水详情
export const walletRecordData = (id: number) =>
  services.get<WalletRecord>(baseName + '/customer/wallet/record/' + id)
