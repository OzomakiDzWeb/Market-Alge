import { configureStore } from '@reduxjs/toolkit'
 import { productsReducer } from './productSlic'
 import CartReducer from './cartSlice'
 import WatchListReduce from './watchListSlice'

export const store = configureStore({
  reducer:{
    products: productsReducer,
    cart:CartReducer,
    watchList:WatchListReduce
   
  }
})