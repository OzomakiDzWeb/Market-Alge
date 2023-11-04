import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getDataProduct } from '../Redux-toolkit/productSlic';
import Loding from '../Component/Loding';
import {getAllProducts} from '../api'
import { allProducts } from '../function';
import {filterProductBayCategory,filterProductBayPrice} from '../function'
import CartProdctHome from './CartProdctHome';
import SidbarInput from '../Component/SidbarInput';
import Product from '../Component/Product';
import Pagenation from '../Component/Pagenation';

const Shop = () => {
 
  const dispatch=useDispatch()
  useEffect(()=>{
 const fetchProduct=async ()=>{
  dispatch(getDataProduct())
}
fetchProduct()
  },[dispatch])


   const data = useSelector((state) => state.products);
  const AllProductes=allProducts(data.data)
  const [FiltrProduct,setFiltreProduct]=useState(allProducts(data.data))
 
  
  const [currentPage,setcurrentPage]=useState(1)
  const [productPerPage,setProductPerpage]=useState(15)
  const indexOfLastProduct=currentPage* productPerPage
  const indexOfFirstPost=indexOfLastProduct-productPerPage
  const currentProduct=FiltrProduct.slice(indexOfFirstPost,indexOfLastProduct)
 console.log(currentProduct)
  
  const handelFilter=(key)=>{
    setFiltreProduct(filterProductBayCategory(key,AllProductes))
    
  }
  const handelFilterByprice=(key)=>{
    setFiltreProduct(filterProductBayPrice(key,AllProductes))
  }
  const pagenate=(pageNumber)=>{
    setcurrentPage(pageNumber)
  }



  return (
    <div className='grid grid-cols-10 gap-2 w-screen mt-10'>
       <div className='sm:col-span-3 col-span-10  dark:text-white p-2 shadow-2xl'>
        <SidbarInput handelChek={handelFilter} handelPrice={handelFilterByprice}/>
     </div>
       <div className='sm:col-span-7 col-span-10  '>
       <Product data={currentProduct} loding={data.loading}/>
       <Pagenation productPerPage={productPerPage} totalProduct={FiltrProduct.length} pagenate={pagenate} currentPage={currentPage}/>

       </div>
    </div>
  )
}
// {data.loading?'loding':FiltrProduct.map((product,id)=>(<div key={id}>
//         <CartProdctHome product={product}/>
//        </div>))}
export default Shop