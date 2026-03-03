import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slices/userSlice";
import { categoriesSlice } from "../slices/categoriesSlice";

export const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        categories: categoriesSlice.reducer
    }
})