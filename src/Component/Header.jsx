
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {BiMenu, BiSolidUserCircle} from 'react-icons/bi'
import {BsFillCartFill,BsFillHeartFill} from 'react-icons/bs'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import {RiMenuSearchLine} from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'
import TicketCategori from './TicketCategori'
import NavMobil from './NavMobil'
const Header = () => {

const {t}=useTranslation()
  const [ShowMobilMenu,setShowMobilMenu]=useState(false)
   const [active,setactive] = useState(null)
   const [ShowCategore,setShowCategore]=useState(false)
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
    
    const activLik=({isActive})=>(isActive?" animate-link font-bold":'font-bold')
  return (
    <div className={`py-0 shadow-lg ${active?'pb-0 ':'pb-4'} mb-5 transition-all duration-300 rounded-lg fixed w-full z-30`}>
      <div className='flex py-4 w-full justify-between items-center bg-gray px-5 dark:bg-blak-extri dark:text-white transition-all duration-200'>
      <div className='flex sm:flex-row flex-col flex-shrink-0 '>
        Market<span className='text-green'>-Alg</span>
      </div>
      <input className='px-2 py-1 rounded-lg outline-none flex-grow mx-5' type='text' placeholder='Search for Product'/>
       <div className='flex gap-3 items-center'>
         <div className='md:flex flex-row hidden h-5 w-5 rounded-[40%]'>
          <BiSolidUserCircle  size={20}/>
         </div>
        <Link className='relative    sm:flex hidden  rounded-[40%] justify-center items-center gap-1 px-2 ' to='cart'>
          <BsFillCartFill size={20}/>{t('Header.cart')}
          <span className='absolute -top-3 rounded-full h-5 w-5 flex justify-center items-center left-[15px] bg-green'>0</span>
        </Link>
        <Link className='relative  sm:flex hidden   rounded-[40%] justify-center items-center gap-1 px-2 ' to='wishList'>
          <BsFillHeartFill size={20}/>{t('Header.wishlist')}
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
          <BiMenu onClick={()=>setShowMobilMenu(true)} size={30} className='md:hidden flex'/>
        </div>
     </div>
    <div className={`${active?'bg-green':''} justify-between items-center py-2 hidden sm:flex px-5  dark:bg-gray `}>
      <button className='flex relative bg-orang rounded-lg gap-2 px-2 py-2'>
        <RiMenuSearchLine size={20}/>
        <p>{t('Header.gategories')}</p>
        <div>{ShowCategore
           ?<AiFillCaretUp onClick={()=>setShowCategore(!ShowCategore)}/>
           :<AiFillCaretDown onClick={()=>setShowCategore(!ShowCategore)}/>}
        </div>
        <div className={`${ShowCategore?'grid':'hidden'} border grid-cols-2 gap-2 p-2  border-green rounded-lg absolute top-10 w-[250px] left-0`}>
          <TicketCategori/>
          <TicketCategori/>
          <TicketCategori/>
          <TicketCategori/>
          <TicketCategori/>
          <TicketCategori/>
          <TicketCategori/>
          <TicketCategori/>
          <TicketCategori/>
          <TicketCategori/>
          </div>
      </button>
      <div className='flex gap-3'>
        <NavLink to='/' className={activLik}>{t('Header.home')}</NavLink>
        <NavLink to='/about' className={activLik}>{t('Header.about')}</NavLink>
        <NavLink to='/shop' className={activLik}>{t('Header.shop')}</NavLink>
        <NavLink to='/blog' className={activLik}>{t('Header.blog')}</NavLink>
        <NavLink to={'/contact'} className={activLik}>{t('Header.Contact')}</NavLink>
      </div>
    </div>
    {ShowMobilMenu && <NavMobil setShowMobilMenu={setShowMobilMenu} setDarkMode={setDarkMode} darkMode={darkMode}/>}

    </div>
  )
}

export default Header