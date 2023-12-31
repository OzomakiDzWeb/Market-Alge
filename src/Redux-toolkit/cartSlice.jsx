import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
cartItmes:[],
totalAmount:0,
totalQuntity:0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItmes:(state,action) => {
      const newItmes = action.payload
      const existItmes = state.cartItmes.find(itm => itm.id === newItmes.id)
      
      state.totalQuntity++
      
      if(!existItmes){
        state.cartItmes.push({
            id:newItmes.id,
          productName:newItmes.name,
          image:newItmes.image_url,
          price:newItmes.price,
          quantity:1,
          totalPrice:newItmes.price
        })
      }else{
        existItmes.quantity++
        existItmes.totalPrice=Number(existItmes.totalPrice)+(newItmes.price)
        
      }
       toast.success(`product Add`)
      state.totalAmount = state.cartItmes.reduce((total,item) => total+Number(item.price) * Number(item.quantity),0)
     
    },
    deletItme:(state,action) => {
      const id= action.payload
      const existItme=state.cartItmes.find(itm =>itm.id === id)
      if(existItme){
       state.cartItmes=state.cartItmes.filter(itm=>itm.id !== id) 
       state.totalQuntity=state.totalQuntity-existItme.quantity
      }
      toast.warn(`delet Product`)
       state.totalAmount = state.cartItmes.reduce((total,item) => total+Number(item.price) * Number(item.quantity),0)
    },
      decremant:(state,action)=>{
      const newItmes = action.payload
      const existItme=state.cartItmes.find(itm =>itm.id ===newItmes. id)
      existItme.quantity--
      existItme.totalPrice=newItmes.price * existItme.quantity
      state.totalQuntity=state.totalQuntity- 1
        state.totalAmount = state.cartItmes.reduce((total,item) => total+Number(item.price) * Number(item.quantity),0)
        toast.success(`remove one product`)
      }
  }
});


export const cartAction = CartSlice.actions

export default CartSlice.reducer