import { configureStore } from '@reduxjs/toolkit'
 import { productsReducer } from './productSlic'
 import CartReducer from './cartSlice'


export const store = configureStore({
  reducer:{
    products: productsReducer,
    cart:CartReducer
   
  }
})