import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/stores'

export interface BasicState {
  theme: 'light' | 'dark'
}

const initialState: BasicState = {
  theme: 'light',
}

export const basicSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    updateTheme: (state, { payload }: PayloadAction<BasicState['theme']>) => {
      state.theme = payload
    },
  },
})

export const { updateTheme } = basicSlice.actions

export const selectTheme = (state: RootState) => state.basic.theme

export default basicSlice.reducer
