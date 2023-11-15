import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
watchList:[],
}

const watchListSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addWatchList:(state,action) => {
      const newItmes = action.payload
      const existItmes = state.watchList.find(itm => itm.id === newItmes.id)
      
      state.totalQuntity++
      
      if(!existItmes){
        state.watchList.push({
             id:newItmes.id,
          productName:newItmes.name,
          image:newItmes.image_url,
          price:newItmes.price,
        })
      }
      toast.success(`add ${newItmes.name} to WatchList`)
    },
    deleWatchList:(state,action) => {
      const id= action.payload
      const existItme=state.watchList.find(itm =>itm.id === id)
      if(existItme){
       state.watchList=state.watchList.filter(itm=>itm.id !== id) 
      }
      toast.warn(`delet from WatchList`)
    }
  }
});


export const watchListAction = watchListSlice.actions

export default watchListSlice.reducer