import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        items: ["laptop", "mobile", "tv", 'lamp']
    },
    reducers: {
        removeLastCategory: (state) => {
            const oldArray = [...state.items]
            oldArray.pop()
            return {
                items: oldArray
            }
        },
        addNewCategory: (state, action) => {
            const data = action.payload
            const newItems = [...state.items]
            newItems.push(data)
            return {
                items: newItems
            }
        }
    }
})

export const { removeLastCategory, addNewCategory } = categoriesSlice.actions