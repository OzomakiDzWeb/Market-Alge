import React from 'react'
import RatingStar from '../Component/RatingStar'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'

const CartProdctHome = ({product}) => {
  
  return (
    <div className='bg-white relative shadow-lg cursor-pointer hover:scale-105 transition-all duration-200 dark:bg-blak-extri dark:text-white p-4 rounded-lg text-center'>
     
     <div className='absolute bg-orang rounded'>{product['number-order']||product.rate||product.discount}</div>
     <div className='flex justify-center'>
          <img className=' rounded bg-white mb-4  h-[150px]' src={product.image_url}/>
     </div>
     <h1 className='h-[100px]'>{product.name}</h1>
     <h1 className='text-xl my-4 text-green'>${product.price}</h1>
     <button className='btn bg-green mb-4'> add To cart</button>
     <div className='flex justify-around'>
         <AiFillEye size={25} className='hover:scale-110 cursor-pointer'/> 
         <AiFillHeart size={25} className='hover:scale-110 cursor-pointer'/>
     </div>
    </div>
  )
}

export default CartProdctHome