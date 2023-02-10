import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./reduxState"


export const Store = configureStore({
    reducer: {
        myReducer,
    }
})
