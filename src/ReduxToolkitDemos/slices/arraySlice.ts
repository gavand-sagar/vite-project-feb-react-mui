import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ArrayState {
  items: string[]
}

const initialState: ArrayState = {
  items: [],
}

export const arraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    },
  },
})

export const { addItem, removeItem } = arraySlice.actions
export default arraySlice.reducer
