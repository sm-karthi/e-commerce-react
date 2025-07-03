import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./reducers/Product-reducer";

export const store = configureStore({
    reducer:{
        app: productSlice.reducer
    }
})