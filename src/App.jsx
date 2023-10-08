import React from 'react'
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
const App = () => {
  return (
    <div >
       <div>
        <Header/>
       </div>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
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