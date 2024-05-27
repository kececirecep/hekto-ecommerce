import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    favoriteArray: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFav(state, action) {
            const newItem = action.payload;
            const gelenItem = state.favoriteArray.find(item => item.id == newItem.id)

            if (!gelenItem) {
                state.favoriteArray.push(action.payload)
                toast('Product Added to Favorite!', {
                    icon: '❤️',
                });
            }
        },
        removeToFav(state, action) {
            state.favoriteArray = state.favoriteArray.filter(item => item.id !== action.payload)
            toast.success("Product removed from cart");
        }
    },
})

export const { addToFav, removeToFav } = favoriteSlice.actions


export default favoriteSlice.reducer