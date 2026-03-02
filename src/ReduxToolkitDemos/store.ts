import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import counterReducer from './slices/counterSlice'
import arrayReducer from './slices/arraySlice'
import todosReducer from './slices/todosSlice'
import usersReducer from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    array: arrayReducer,
    todos: todosReducer,
    users: usersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
