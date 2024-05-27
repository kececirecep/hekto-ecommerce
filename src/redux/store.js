import { configureStore } from '@reduxjs/toolkit'
import getProductsSlice from './getProducts'
import getProductIdSlice from './getProductId'
import cartSlice from './addToCart'
import favoriteSlice from './favoriteSlice'

export const store = configureStore({
    reducer: {
        getProducts: getProductsSlice,
        getProductId: getProductIdSlice,
        cart: cartSlice,
        favorite: favoriteSlice,
    },
})