import { defineModel } from 'foca'

import type { BannerInfo, GameInfo, GamePlatform, GameType } from '@/apis'
import { homeInterface } from '@/apis'

export interface CommonState {
  banners: BannerInfo[]
  gameTypes: GameType[]
  currentType: GameType['type']
  hotGamePlatforms: GamePlatform[]
  gamePlatforms: GamePlatform[]
  gamePlatform: GamePlatform
  gameList: GameInfo[]
}

const initialState: CommonState = {
  banners: [],
  gameTypes: [],
  currentType: 'HOT',
  hotGamePlatforms: [],
  gamePlatforms: [],
  gamePlatform: {} as GamePlatform,
  gameList: [],
}

export const commonModel = defineModel('common', {
  initialState,
  computed: {
    gameType() {
      const { gameTypes, currentType } = this.state
      return gameTypes.find((item) => item.type === currentType)
    },
  },
  reducers: {
    setBanners(state, banners: CommonState['banners']) {
      state.banners = banners
    },
    setGametypes(state, gameTypes: CommonState['gameTypes']) {
      state.gameTypes = gameTypes
    },
    setHotGamePlatforms(state, hotGamePlatforms: CommonState['hotGamePlatforms']) {
      state.hotGamePlatforms = hotGamePlatforms
      state.gamePlatforms = hotGamePlatforms
      state.gamePlatform = hotGamePlatforms[0] || {}
      state.gameList = hotGamePlatforms[0].childrens || []
    },
    setGameList(state, gameList: CommonState['gameList']) {
      state.gameList = gameList
    },
  },
  methods: {
    init() {
      this.setState(initialState)
    },
    async fetchBanners() {
      const { data, isSuccess } = await homeInterface.getBannerList()
      isSuccess && data && this.setBanners(data)
    },
    async fetchGameTypes() {
      const { data, isSuccess } = await homeInterface.getVerticalList()
      isSuccess && this.setGametypes(data || [])
    },
    async fetchHotGame() {
      const { data, isSuccess } = await homeInterface.getGameHotList()
      isSuccess && data && this.setHotGamePlatforms(data)
    },
    // 获取类型游戏，tid => 游戏类型id，pid => 游戏平台id
    async fetchGameList(tid: number, pid: number) {
      const { isSuccess, data } = await homeInterface.getVerticalGameList({
        id: pid,
        typeId: tid,
      })
      isSuccess && this.setGameList(data || [])
    },
    changeCurrentType(gameType: GameType) {
      const { type, childrens, id } = gameType
      this.setState({ currentType: type })
      if (type === 'HOT') {
        this.fetchHotGame()
      } else if (type === 'COLLECT') {
        this.setState({
          gameList: [],
          gamePlatforms: [],
          gamePlatform: {} as GamePlatform,
        })
      } else {
        if (childrens && childrens.length) {
          this.setState({
            gamePlatforms: childrens,
            gamePlatform: childrens[0],
          })
          this.fetchGameList(id, childrens[0].id)
        } else {
          this.setState({
            gamePlatforms: [],
            gamePlatform: {} as GamePlatform,
          })
        }
      }
    },
    changeGamePlatform(gamePlatform: GamePlatform) {
      const { currentType } = this.state
      this.setState({ gamePlatform })
      if (currentType === 'HOT') {
        this.setState({
          gameList: gamePlatform.childrens || [],
        })
      } else {
        const gameType = this.gameType.value
        gameType && this.fetchGameList(gameType.id, gamePlatform.id)
      }
    },
  },
  events: {
    async onInit() {
      this.fetchBanners()
      this.fetchGameTypes()
      const { gamePlatform, currentType } = this.state
      const gameType = this.gameType.value
      if (currentType === 'HOT') {
        this.fetchHotGame()
      } else {
        gameType && this.fetchGameList(gameType.id, gamePlatform.id)
      }
    },
  },
})
