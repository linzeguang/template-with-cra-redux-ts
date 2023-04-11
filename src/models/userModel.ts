import { defineModel } from 'foca'

import type { UserInfo, Wallet } from '@/apis'
import { game, user } from '@/apis'

export interface UserState {
  isLogin: boolean
  signArgeement: boolean
  token?: string
  userInfo?: UserInfo
  walletInfo?: Wallet
}

const initialState: UserState = {
  isLogin: false,
  signArgeement: false,
  token: undefined,
  userInfo: undefined,
  walletInfo: undefined,
}

export const userModel = defineModel('user', {
  initialState,
  reducers: {
    updateUserInfo(state, userInfo: UserState['userInfo']) {
      if (!userInfo) return
      state.isLogin = true
      state.signArgeement = true
      state.userInfo = userInfo
      if (userInfo.token) state.token = userInfo.token
    },
    updateWalletInfo(state, walletInfo: UserState['walletInfo']) {
      state.walletInfo = walletInfo
    },
    clear(state) {
      return {
        ...initialState,
        signArgeement: state.signArgeement,
      }
    },
  },
  methods: {
    async fetchUserInfo() {
      const { data, isSuccess } = await user.customerInfo()
      if (isSuccess && data) {
        this.updateUserInfo(data)
      } else {
        this.clear()
      }
    },
    async fetchWalletInfo() {
      await game.withdraw()
      const { data, isSuccess } = await user.walletInfo()
      isSuccess && data && this.updateWalletInfo(data)
    },
  },
  events: {
    onInit() {
      console.log('foca userModel init')
      if (!this.state.isLogin) return
      this.fetchUserInfo()
      this.fetchWalletInfo()
    },
  },
})
