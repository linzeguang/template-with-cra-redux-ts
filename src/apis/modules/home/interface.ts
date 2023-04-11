import services from '@/apis/services'

import { baseUrl } from '../config'

import type { BannerInfo, GameInfo, GamePlatform, GameType } from './types'

const baseName = baseUrl + '/home'

// 轮播图
export const getBannerList = () => services.get<BannerInfo[]>(baseName + '/getBannerList')

// 侧边栏游戏分类及游戏平台
export const getVerticalList = () => services.get<GameType[]>(baseName + '/getVerticalList')

// 游戏平台下属游戏
export const getVerticalGameList = (params: { id: number; typeId: number }) =>
  services.get<GameInfo[], { id: number }>(baseName + '/getVerticalGameList', params)

// 热门游戏及其所在平台
export const getGameHotList = () => services.get<GamePlatform[]>(baseName + '/getGameHotList')

// 打开游戏
export const launchGame = (id: number) => services.get<string>(baseName + '/launchGame/' + id)
