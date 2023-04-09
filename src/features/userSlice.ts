import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/stores'

export interface UserState {
  isLogin: boolean
}

const initialState: UserState = {
  isLogin: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleIsLogin: (state, { payload }: PayloadAction<UserState['isLogin']>) => {
      state.isLogin = payload
    },
  },
})

export const { toggleIsLogin } = userSlice.actions

export const selectIsLogin = (state: RootState) => state.user.isLogin

export default userSlice.reducer
