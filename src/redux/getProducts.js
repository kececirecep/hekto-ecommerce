import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: "",
}

 
export const getProducts = createAsyncThunk("getProducts", async () => { 
    const response = await axios.get("https://fakestoreapi.com/products/");
    return response.data;
});


export const getProductsSlice = createSlice({
    name: 'getProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.data = action.payload;
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.loading = false;
            state.error = "error fetching product data";
        })
    }
})



export default getProductsSlice.reducer