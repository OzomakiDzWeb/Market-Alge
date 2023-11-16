import React from 'react'
import { useSelector } from 'react-redux'
import CartProdctHome from './CartProdctHome'

const WishList = () => {
   const WatchListProduct = useSelector((state) => state.watchList.watchList)
   console.log(WatchListProduct.length)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
      {WatchListProduct.length>0?WatchListProduct.map(itm=><CartProdctHome product={itm} key={itm.id}/>)
      :<h1 className='text-xxl text-center w-screen p-10 m-5 dark:text-white'>No product in your watch list</h1>}</div>
  )
}

export default WishList