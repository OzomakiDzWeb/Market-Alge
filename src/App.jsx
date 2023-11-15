import React, { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Sgin from './Pages/Sgin'
import Login from './Pages/Login'
import Shop from './Pages/Shop'
import WishList from './Pages/WishList'
import Page404 from './Pages/Page404'

import { useDispatch, useSelector } from 'react-redux'
import { getDataProduct } from './Redux-toolkit/productSlic'
import Details from './Component/Details'
import { allProducts } from './function'
import { ToastContainer } from 'react-toastify'

const App = () => {

 const dispatch=useDispatch()
  useEffect(()=>{
 const fetchProduct=async ()=>{
  dispatch(getDataProduct())
}
fetchProduct()
  },[dispatch])
 const data = useSelector((state) => state.products);
  const AllProductes=allProducts(data.data)
const [showDetails,setShowDetails]=useState(false)
  const [product,setproduct]=useState([])
  return (
    <div className='flex flex-col dark:bg-blak-extri relative ' >
       <div>
        <Header/>
       </div>
        <div className='mt-[85px] md:mt-[125px]'>
        <Routes>
            <Route path='/' element={<Home setproduct={setproduct} setShowDetails={setShowDetails}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/sgin' element={<Sgin/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/wishList' element={<WishList/>}/>
            <Route path='/*' element={<Page404/>}/>
            {/* <Route path='/details' element={<Details/>}/> */}
          </Routes>
        </div>
      <div>
         <Footer/>
       </div>
       <Details product={product} AllProductes={AllProductes} showDetails={showDetails} setShowDetails={setShowDetails}/>
       
    </div>
  )
}

export default App