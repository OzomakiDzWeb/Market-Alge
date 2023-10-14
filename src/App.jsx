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

import axios from 'axios'

import { useSelector } from 'react-redux'

const App = () => {
  const [data,setData]=useState([])
const [err,seterr]=useState('')
const [loding,setloding]=useState(false)
useEffect(()=>{
 async function fetchdata(){
  setloding(true)
  axios.get('https://api-xh9w.onrender.com/products').then(res=>
  {setloding(false)
    setData(res.data)
  }).catch(err=>seterr(err.meesage))
}
fetchdata()
},[])


console.log(data,err,loding)
  
  return (
    <div className='flex dark:bg-blak-extri ' >
       <div>
        
   
        <Header/>
       </div>
        <div className='mt-[85px] md:mt-[125px]'>
    
          <Routes>
            <Route path='/' element={<Home data={data} loding={loding} err={err}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/sgin' element={<Sgin/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/wishList' element={<WishList/>}/>
            <Route path='/page404' element={<Page404/>}/>
          </Routes>
          
        </div>
      <div>
         <Footer/>

      </div>
    </div>
  )
}

export default App