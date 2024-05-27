import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: "",
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getProductId = createAsyncThunk("getProduct", async (id) => {
    await delay(1000)
    const response = await axios.get("https://fakestoreapi.com/products/" + id);
    return response.data;

});

export const getProductIdSlice = createSlice({
    name: 'getProductId',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductId.pending, (state) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getProductId.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.data = action.payload;
        })
        builder.addCase(getProductId.rejected, (state) => {
            state.loading = false;
            state.error = "error fetching product data";
        })
    }
})



export default getProductIdSlice.reducer