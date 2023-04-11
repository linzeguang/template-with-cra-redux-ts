/**
 * @Author linzeguang
 * @Date 2023-04-03 14:31:20
 * @LastEditTime 2023-04-07 18:03:12
 * @LastEditors linzeguang
 * @Description
 */

import type { Enum } from '@/constants'

export interface BannerInfo {
  activeId: number
  link: string
  linkType: number
  pic: string
}

// 游戏类型
export interface GameType {
  id: number
  logo: string
  name: string
  pid: number
  type: string
  childrens?: GamePlatform[]
}

// 游戏平台
export interface GamePlatform {
  id: number
  logo: string
  name: string
  pid: number
  type?: string
  childrens?: GameInfo[]
}

// 游戏信息
export interface GameInfo {
  hot?: 0 | 1
  id: number
  logo: string
  name: string
  pid?: number
}

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
