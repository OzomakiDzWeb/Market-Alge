import React from 'react'
import { useSelector } from 'react-redux'

const WishList = () => {
   const WatchListProduct = useSelector((state) => state.watchList.watchList)
   console.log(WatchListProduct.length)
  return (
    <div>{WatchListProduct.length}</div>
  )
}

export default WishList