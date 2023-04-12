import type { Enum } from '@/constants'

export interface MemberInfo {
  account: string
  avatar: string
  customerId: string
  expire: string
  token?: string
  telephone: string
}

export interface ModifyPwdParams {
  newPassword: string
  password: string
}

export interface TelephoneParams {
  telephone: string
}

export interface SmsCodeParams {
  smsCode: string
}

export interface CheckSmsParams extends TelephoneParams, SmsCodeParams {}

export interface CheckTelParams extends TelephoneParams {
  newTelephone: string
}

export interface FindPwdParams extends TelephoneParams, SmsCodeParams {
  newPassword: string
}

export interface ModifyTelParams extends CheckTelParams, Partial<SmsCodeParams> {}

export interface BetRecordParams {
  betStatus?: string
  customerId?: number
  platformId?: number
  typeId?: number
}

export interface BetRecord {
  account: string
  aggreId: number
  aggreName: string
  betTime: string
  betType: string
  betUpdateTime: string
  createBy: number
  createTime: string
  currency: string
  customerId: number
  gameCode: string
  gameId: number
  gameName: string
  id: number
  orderNo: string
  platformId: number
  platformName: string
  platformTxId: string
  realBetAmount: number
  realWinAmount: number
  txStatus: Enum.BetStatus
  txTime: string
  type: Enum.BetType
  typeId: string
  typeName: string
  updateBy: number
  updateTime: string
}
