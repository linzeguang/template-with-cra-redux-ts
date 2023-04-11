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
