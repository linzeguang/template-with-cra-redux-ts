import type { Enum } from '@/constants'

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
