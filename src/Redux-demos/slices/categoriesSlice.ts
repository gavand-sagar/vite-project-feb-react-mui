import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        items: ["laptop", "mobile", "tv", 'lamp'],
        value: 0,
        username: 'sagar'
    },
    reducers: {
        removeLastCategory: (state) => {
            const oldArray = [...state.items]
            oldArray.pop()
            // return {
            //     value: state.value, // exctly same prev data
            //     username: state.username, // exctly same prev data
            //     items: oldArray
            // }

            return {
                ...state,
                items: oldArray
            }
        },
        addNewCategory: (state, action) => {
            const data = action.payload
            const newItems = [...state.items]
            newItems.push(data)
            return {
                ...state,
                items: newItems
            }
        },
        resetAll: (state) => {
            return {
                ...state,
                items: []
            }
        }
    }
})

export const { removeLastCategory, addNewCategory, resetAll } = categoriesSlice.actions