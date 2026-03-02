import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        username: 'Sagar',
        email: "gavand.sagar.s@gmail.com"
    },
    reducers: {
        // change in the data can only be done from this location only
        // no place in entire app can change anything from redux


        // reducer is data changing function
        // which return a complete new state

        changeUsernameToSuperman: (state) => ({
            ...state,
            username: 'Superman'
        })
    }
})


export const { changeUsernameToSuperman } = userSlice.actions
