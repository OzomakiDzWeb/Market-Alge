import React from 'react'
import CartProdctHome from '../Pages/CartProdctHome'

const Product = ({data,loding}) => {
     if(loding){
          return <h2>loding...</h2>
     }
   
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
     {data.map(product=><h1 key={product.id}><CartProdctHome product={product}/></h1>)}

    </div>
  )
}

export default Product