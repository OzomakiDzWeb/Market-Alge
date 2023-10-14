import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../api";
const sliceName= 'productsSlice'
export const fetchProducts = createAsyncThunk(`${sliceName}/fetchProducts` , async()=>{
  const res = await getAllProducts();

  return res.data
})
  
const productsSlice = createSlice({
  name:sliceName,
  initialState :[],
  reducers:{
    
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.fulfilled , (state , action)=>{
      state= action.payload
      return state;
    })
  }
})
export const productsReducer = productsSlice.reducer;