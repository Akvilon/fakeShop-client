import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {ApiService} from "../../../services";
import {Product, ProductsState} from "./types";

const initialState: ProductsState = {
    productsList: [],
    loading: false,
    error: undefined
};

export const fetchProducts = createAsyncThunk<Array<Product>>(
'products/fetchProducts',
    async () => {
        const data = await ApiService.getProducts()
        return data as Array<Product>
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchProducts.fulfilled, (state, {payload}) => {
                state.productsList = payload
                state.loading = false
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const {} = productsSlice.actions
export default productsSlice.reducer