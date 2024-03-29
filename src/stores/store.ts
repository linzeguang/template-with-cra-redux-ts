import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import basicReducer from '@/features/basicSlice'

const reducers = combineReducers({
  basic: basicReducer,
})

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: storage,
  },
  reducers,
)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
