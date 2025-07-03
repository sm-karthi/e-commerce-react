import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
            return state
        },
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload];
            return state
        },
        deleteProducts: (state, action) => {
            let index = state.products.findIndex(obj => obj.id === action.payload.id);
            state.products.splice(index, 1)
            return state
        },
        editProduct: (state, action) => {
            let index = state.products.findIndex(obj => obj.id === action.payload.id);
            state.products[index] = action.payload.values;
            return state;
        }
    }
})

export const { setProducts, addProduct, deleteProducts, editProduct } = productSlice.actions