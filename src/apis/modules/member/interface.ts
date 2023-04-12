import services from '@/apis/services'
import type { EmptyData, IList, IListParams } from '@/apis/types'

import { baseUrl } from '../config'

import type {
  BetRecord,
  BetRecordParams,
  CheckSmsParams,
  CheckTelParams,
  FindPwdParams,
  MemberInfo,
  ModifyPwdParams,
  ModifyTelParams,
  TelephoneParams,
} from './types'

const baseName = baseUrl

// 获取会员信息
export const memberInfo = () => services.get<MemberInfo>(baseName + '/getUserInfo')

// 会员游戏钱包转出
export const withdraw = () => services.post<boolean>(baseUrl + '/withdraw')

// 获取验证码
export const sendSmsCode = (params: TelephoneParams) =>
  services.post<EmptyData, TelephoneParams>(baseName + '/sendSmsCode', { ...params })

// 校验验证码
export const checkSmsCode = (parmas: CheckSmsParams) =>
  services.post<EmptyData, CheckSmsParams>(baseName + '/checkSmsCode', { ...parmas })

// 修改密码
export const modifyPassword = (parmas: ModifyPwdParams) =>
  services.post<EmptyData, ModifyPwdParams>(baseName + '/modifyPassword', { ...parmas })

// 找回密码
export const findPassword = (params: FindPwdParams) =>
  services.post<EmptyData, FindPwdParams>(baseName + '/findPassword', { ...params })

// 修改手机号-校验手机号
export const checkTelephone = (parmas: CheckTelParams) =>
  services.post<EmptyData, CheckTelParams>('/aggre/wap/member/checkTelephone', { ...parmas })

// 修改手机
export const modifyTelephone = (parmas: ModifyTelParams) =>
  services.post<EmptyData, ModifyTelParams>(baseName + '/modifyTelephone', { ...parmas })

// 注单列表
export const betRecord = (params: IListParams<BetRecordParams>) =>
  services.post<BetRecord[], IListParams<BetRecordParams>, IList>(baseName + '/getBet', {
    ...params,
  })

// 注单详情
export const betRecordData = (id: number) => services.get<BetRecord>(baseName + '/bet/' + id)
