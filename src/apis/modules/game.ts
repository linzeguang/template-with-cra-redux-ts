/**
 * @Author linzeguang
 * @Date 2023-04-03 14:08:09
 * @LastEditTime 2023-04-07 18:32:11
 * @LastEditors linzeguang
 * @Description
 */

import services from '../services'
import type { IList, IListParams } from '../types'

import type {
  BannerInfo,
  BetRecord,
  BetRecordParams,
  GameInfo,
  GamePlatform,
  GameType,
} from './types.game'

const baseName = '/game'

export const getBannerList = () => services.get<BannerInfo[]>(baseName + '/wap/home/getBannerList')

export const getVerticalList = () =>
  services.get<GameType[]>(baseName + '/wap/home/getVerticalList')

export const getVerticalGameList = (params: { id: number; typeId: number }) =>
  services.get<GameInfo[], { id: number }>(baseName + '/wap/home/getVerticalGameList', params)

export const getGameHotList = () =>
  services.get<GamePlatform[]>(baseName + '/wap/home/getGameHotList')

export const launchGame = (id: number) => services.get<string>(baseName + '/wap/launchGame/' + id)

export const withdraw = () => services.get<boolean>(baseName + '/wap/withdraw')

// 注单记录
export const betRecord = (params: IListParams<BetRecordParams>) =>
  services.post<BetRecord[], IListParams<BetRecordParams>, IList>(baseName + '/wap/getBet', {
    ...params,
  })

// 会员钱包流水详情
export const betRecordData = (id: number) => services.get<BetRecord>(baseName + '/wap/bet/' + id)
