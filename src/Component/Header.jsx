import { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {BiMenu, BiSolidUserCircle} from 'react-icons/bi'
import {BsFillCartFill,BsFillHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Header = () => {
   const [active,setactive] = useState(null)
    const [darkMode, setDarkMode] = useState(() => {
    // Check the user's preference in local storage
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true';  });
     const {i18n}=useTranslation()
      const [direction, setDirection] = useState('');
     useEffect(()=>{
      document.documentElement.dir = direction;
      for(let i=0;i<document.getElementsByClassName('lang').length;i++){
        const element=document.getElementsByClassName('lang')[i]
        console.log(element)
        if(element.value===i18n.language){
          element.setAttribute('selected','true')
         
        }
        if(i18n.language==='ar'){
          setDirection('rtl')
        }else{
          setDirection('ltr')
        }
      }
      localStorage.setItem('darkMode', darkMode.toString());
      const root = window.document.documentElement;
      darkMode?root.classList.add('dark'):root.classList.remove('dark')
      const scrollActive = () =>{
      setactive(window.scrollY>20)
    }
     window.addEventListener("scroll",scrollActive)
     return ()=>window.removeEventListener("scroll",scrollActive)
    },[direction,i18n.language,darkMode,active])
   
  return (
    <div className={`${active?'py-0 shadow-lg transition-all duration-300 rounded-lg':'fixed w-full px-5 py-5 bg-gray dark:bg-blak-extri dark:text-white transition-all duration-200'}`}>
      <div className='flex justify-between items-center'>
      <div className='flex sm:flex-row flex-col flex-shrink-0 '>
        Market<span className='text-green'>-Alg</span>
      </div>
      <input className='px-2 py-1 rounded-lg outline-none flex-grow mx-5' type='text' placeholder='Search for Product'/>
       <div className='flex gap-3 items-center'>
         <BiSolidUserCircle className='md:block hidden h-5 w-5 rounded-[40%]' size={20}/>
        <Link className='relative    sm:flex hidden  rounded-[40%] justify-center items-center gap-1 px-2 ' to='cart'>
          <BsFillCartFill size={20}/>Cart
          <span className='absolute -top-3 rounded-full h-5 w-5 flex justify-center items-center left-[15px] bg-green'>0</span>
        </Link>
        <Link className='relative  sm:flex hidden   rounded-[40%] justify-center items-center gap-1 px-2 ' to='wishList'>
          <BsFillHeartFill size={20}/>WishList
          <span className='absolute -top-3 rounded-full h-5 w-5 flex justify-center items-center left-[15px] bg-green'>0</span>
        </Link>
    
         <button className='rounded-[40%] ' onClick={()=>setDarkMode(!darkMode)}>
             <img className='md:block hidden' src={`/src/assets/img/${darkMode?'icon-sun.svg':'icon-moon.svg'}`}/>
          </button>
          <select className=" md:block hidden bg-transparent pl-4 border-none focus:outline-none cursor-pointer" 
             onChange={(e)=>i18n.changeLanguage(e.target.value)} >
              <option className="lang" value='en'>en</option>
              <option className="lang" value='fr'>fr</option>
              <option className="lang" value='ar'>ar</option>
              </select>
          <BiMenu size={30} className='md:hidden flex'/>
        </div>
     </div>
    <div></div>
    </div>
  )
}

export default Header