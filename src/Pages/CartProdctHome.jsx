import React from 'react'
import RatingStar from '../Component/RatingStar'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import {cartAction} from '../Redux-toolkit/cartSlice'
import { useDispatch,useSelector } from 'react-redux';

const CartProdctHome = ({product}) => {
  const cart=useSelector((state) => state.cart.cartItmes)
  const existProduct=(id)=>{
  return  cart.some(obj => obj.id === id);
  }
  console.log(existProduct(6))
  console.log(cart)
   const dispatch=useDispatch()
 const addToCart=()=>{
  dispatch(cartAction.addItmes(product))
 }
 const delet=()=>{
  dispatch(cartAction.deletItme(product.id))
 }
  return (
    <div className='bg-white relative shadow-lg cursor-pointer hover:scale-105 transition-all duration-200 dark:bg-blak-extri dark:text-white p-4 rounded-lg text-center'>
     
     <div className='absolute bg-orang rounded'>{product['number-order']||product.rate||product.discount}</div>
     <div className='flex justify-center'>
          <img className=' rounded bg-white mb-4  h-[150px]' src={product.image_url}/>
     </div>
     <h1 className='h-[100px]'>{product.name}</h1>
     <h1 className='text-xl my-4 text-green'>${product.price}</h1>
     {existProduct(product.id)?
     <button onClick={delet} className='btn bg-orang mb-4'> Delet cart</button>
     :<button onClick={addToCart} className='btn bg-green mb-4'> add To cart</button>}
     <div className='flex justify-around'>
         <AiFillEye size={25} className='hover:scale-110 cursor-pointer'/> 
         <AiFillHeart size={25} className='hover:scale-110 cursor-pointer'/>
     </div>
    </div>
  )
}

export default CartProdctHome