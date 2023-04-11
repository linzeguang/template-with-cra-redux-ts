import services from '@/apis/services'
import type { IList, IListParams } from '@/apis/types'

import { baseUrl } from '../config'

import type { WalletRecord, WalletRecordParams } from './types'

const baseName = baseUrl + '/wallet'

// 获取钱包余额
export const walletBalance = () => services.get<number>(baseName + '/getBalance')

// 会员钱包流水
export const walletRecord = (params: IListParams<WalletRecordParams>) =>
  services.post<WalletRecord[], IListParams<WalletRecordParams>, IList>(baseName + '/getRecords', {
    ...params,
  })

// 会员钱包流水详情
export const walletRecordData = (id: number) =>
  services.get<WalletRecord>(baseName + '/record/' + id)
