import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cart: [],
    loading: false,
    error: ""
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemCart(state, action) {

            const newItem = action.payload;
            const gelenItem = state.cart.find(item => item.id == newItem.id)

            if (gelenItem) {
                gelenItem.adet += 1;
            } else {
                state.cart.push(newItem)
            } 
            toast.success("Product Added to Cart");
        },
        removeItemCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
            toast.success("Product removed from cart");
        },
        allClearCart(state) {
            state.cart = [];
            toast.success("Cart Emptied");
        },
        urunArttir(state, action) {
            const newItem = action.payload;
            const gelenItem = state.cart.find(item => item.id == newItem)

            if (gelenItem) {
                gelenItem.adet += 1;
            }
        },
        urunAzalt(state, action) {
            const newItem = action.payload;
            const gelenItem = state.cart.find(item => item.id == newItem);

            if (gelenItem) {
                if (gelenItem.adet > 1) {
                    gelenItem.adet -= 1;
                } else if (gelenItem.adet === 1) {
                    state.cart = state.cart.filter(item => item.id !== newItem);
                }
            }
        }
    },
})

export const { addItemCart, removeItemCart, allClearCart, urunArttir, urunAzalt } = cartSlice.actions


export default cartSlice.reducer