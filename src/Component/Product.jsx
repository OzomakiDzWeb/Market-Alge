import React from 'react'
import CartProdctHome from '../Pages/CartProdctHome'
import Loding from './Loding'

const Product = ({data,loding}) => {
     if(loding){
          return <div className='w-full flex justify-center h-full items-center'>
            <Loding/>
            </div> 
        }
   
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
     {data.map(product=><h1 key={product.id}><CartProdctHome product={product}/></h1>)}
    </div>
  )
}

export default Product