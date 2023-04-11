/**
 * @Author linzeguang
 * @Date 2023-03-30 10:01:31
 * @LastEditTime 2023-04-07 16:10:54
 * @LastEditors linzeguang
 * @Description
 */

import type { Enum } from '@/constants'

export interface LoginParams {
  account: string
  loginIp?: string
  password: string
}

export interface UserInfo {
  account: string
  avatar: string
  customerId: string
  expire: string
  token?: string
  telephone: string
}

export interface TelephoneParams {
  telephone: string
}

export interface SmsCodeParams {
  smsCode: string
}

export interface RegisterParams extends LoginParams, TelephoneParams {}

export interface CheckSmsParams extends TelephoneParams, SmsCodeParams {}

export interface FindPwdParams extends TelephoneParams, SmsCodeParams {
  newPassword: string
}

export interface CheckTelParams extends TelephoneParams {
  newTelephone: string
}

export interface ModifyPwdParams {
  newPassword: string
  password: string
}

export interface ModifyTelParams extends CheckTelParams, SmsCodeParams {}

export interface Wallet {
  availableAmt: number
  customerId: string
  freezeAmt: number
  walletId: number
}

export interface WalletRecordParams {
  customerId?: number
  endDate?: string
  startDate?: string
  markDate?: Enum.MarkDate
  transferType?: Enum.TransferType
}

export interface WalletRecord {
  account: string
  aggreId: number
  aggreName: string
  createTime: string
  customerId: number
  id: number
  orderNo: string
  transferAmount: number
  transferType: Enum.TransferType
  txCode: string
  walletBalance: number
}
