import { configureStore } from '@reduxjs/toolkit'
 import { productsReducer } from './productSlic'



export const store = configureStore({
  reducer:{
    products: productsReducer,
   
  }
})