import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../api";
import axios from "axios";

export const getDataProduct = createAsyncThunk(`productsSlice/getDataProduct` , async (arg,{rejectWithValue})=>{
  try{
  const {data}= await axios.get("https://api-xh9w.onrender.com/products")
  return data
  }catch(err){
    rejectWithValue(err.response.data)
  }
})
const productsSlice = createSlice({
  name:'productsSlice',
  initialState :{
    data:[],
    loading:false,
    err:''
  },
  reducers:{
    
  },
  extraReducers:{
    [getDataProduct.pending]:(state,{payload})=>{
       state.loading=true},

    [getDataProduct.fulfilled]:(state,{payload})=>{
      state.loading=false,
      state.data=payload,
      state.err=''},
    
      [getDataProduct.rejected]:(state,{payload})=>{
      state.loading=false,
      state.data=[],
    state.err=payload}
      

  
  }
})
export const productsReducer = productsSlice.reducer;