import { defineModel } from 'foca'

import type { MemberInfo } from '@/apis'
import { memberInterface, walletInterface } from '@/apis'

export interface UserState {
  isLogin: boolean
  signArgeement: boolean
  token?: string
  memberInfo?: MemberInfo
  balance?: number
}

const initialState: UserState = {
  isLogin: false,
  signArgeement: false,
  token: undefined,
  memberInfo: undefined,
  balance: undefined,
}

export const userModel = defineModel('user', {
  initialState,
  reducers: {
    updateMemberInfo(state, memberInfo: UserState['memberInfo']) {
      if (!memberInfo) return
      state.isLogin = true
      state.signArgeement = true
      state.memberInfo = memberInfo
      if (memberInfo.token) state.token = memberInfo.token
    },
    updateBalance(state, balance: UserState['balance']) {
      state.balance = balance
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
      const { data, isSuccess } = await memberInterface.memberInfo()
      if (isSuccess && data) {
        this.updateMemberInfo(data)
      } else {
        this.clear()
      }
    },
    async fetchWalletInfo() {
      await memberInterface.withdraw()
      const { data, isSuccess } = await walletInterface.walletBalance()
      isSuccess && this.updateBalance(data || 0)
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
