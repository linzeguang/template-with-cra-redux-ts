import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { user } from '@/apis'
import type { UserInfo, Wallet } from '@/apis/modules/types.user'
import type { RootState } from '@/stores'

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

export const fetchUserInfo = createAsyncThunk('user/fetchUserInfo', async () => {
  return user.customerInfo()
})

export const fetchWalletInfo = createAsyncThunk('user/fetchWalletInfo', async () => {
  return user.walletInfo()
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state, { payload }: PayloadAction<UserState['userInfo']>) => {
      state.isLogin = !!payload
      if (payload?.token) state.token = payload?.token
      state.userInfo = payload
    },
    clearStatus: (state) => {
      state.isLogin = false
      state.token = undefined
      state.userInfo = undefined
    },
    toggleSignArgeement: (state, { payload }: PayloadAction<UserState['signArgeement']>) => {
      state.signArgeement = payload
    },
    updateWalletInfo: (state, { payload }: PayloadAction<UserState['walletInfo']>) => {
      state.walletInfo = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.fulfilled, (state, action, ...args) => {
        // const { data, isSuccess } = action.payload
        // state.isLogin = isSuccess
        // state.userInfo = isSuccess ? data : undefined
        // if (data?.token) state.token = data?.token

        console.log('>>>>>> args: ', args)
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.userInfo = undefined
      })
    // .addCase(fetchWalletInfo.fulfilled, (state, action) => {
    //   const { data, isSuccess } = action.payload

    //   state.walletInfo = isSuccess ? data : undefined
    // })
    // .addCase(fetchWalletInfo.rejected, (state) => {
    //   state.walletInfo = undefined
    // })
  },
})

export const { updateUserInfo, clearStatus, toggleSignArgeement, updateWalletInfo } =
  userSlice.actions

export const selectIsLogin = (state: RootState) => state.user.isLogin
export const selectUserInfo = (state: RootState) => state.user.userInfo
export const selectWalletInfo = (state: RootState) => state.user.walletInfo
export const selectSignArgeement = (state: RootState) => state.user.signArgeement

export default userSlice.reducer
