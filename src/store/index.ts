import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../reducers/index'
import productReducer from "../reducers/productSlice";
import cartReducer from '../reducers/cartSlice'
export const store = configureStore({
    reducer:{
        user:userReducer,
        product:productReducer,
        cart:cartReducer
    }
})
export type AppDipatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;