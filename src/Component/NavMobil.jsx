import i18next from 'i18next'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {AiOutlineClose} from 'react-icons/ai'
import { BiSolidUserCircle } from 'react-icons/bi'
import { BsFillCartFill, BsFillHeartFill } from 'react-icons/bs'
import {  Link, NavLink } from 'react-router-dom'
import {AllCategore} from '../constant'
const NavMobil = ({setShowMobilMenu,setDarkMode,darkMode}) => {
  const {t}=useTranslation()
  const [menu,setMenu]=useState(true)
  const [categores,setCategores]=useState(false)
  const activLik=({isActive})=>(isActive?" animate-link font-bold":'font-bold')
  return (
    <div className='fixed w-full h-screen top-0 left-0 bg-white/50  dark:text-white dark:bg-blak-extri/50'>
      <div className='w-4/5 relative bg-white border border-green rounded-lg shadow-2xl dark:bg-[#000] flex flex-col justify-start items-center pt-10  h-full' >
        <AiOutlineClose className='absolute cursor-pointer top-2 right-5' 
                        size={20} 
                        onClick={()=>setShowMobilMenu(false)}/>
        <div className='flex justify-between w-full gap-4 px-2 pb-10 dark:text-green'>
          <button className={`${menu?'bg-orng-extri':''} btn hover:bg-orang`} 
                  onClick={()=>{setMenu(true);setCategores(false)}}>
                  Menu
          </button>
          <button className={`${categores?'bg-orng-extri':''} btn hover:bg-orang`} 
                  onClick={()=>{setMenu(false);setCategores(true)}}>
                    Categories
          </button>
        </div>
        <div className='flex gap-3 items-center pb-10'>
                <div className='md:flex flex-row  h-5 w-5 rounded-[40%]'>
                    <BiSolidUserCircle  size={20}/>
                 </div>
                 <Link className='relative    sm:flex   rounded-[40%] justify-center items-center gap-1 px-2 ' to='cart'>
                    <BsFillCartFill size={20}/>{t('Header.cart')}
                    <span className='absolute -top-3 rounded-full h-5 w-5 flex justify-center items-center left-[15px] bg-green'>0</span>
                  </Link>
                  <Link className='relative  sm:flex    rounded-[40%] justify-center items-center gap-1 px-2 ' to='wishList'>
                    <BsFillHeartFill size={20}/>{t('Header.wishlist')}
                    <span className='absolute -top-3 rounded-full h-5 w-5 flex justify-center items-center left-[15px] bg-green'>0</span>
                  </Link>
                   <button className='rounded-[40%] ' 
                            onClick={()=>setDarkMode(!darkMode)}>
                       <img className='md:block ' 
                            src={`/src/assets/img/${darkMode?'icon-sun.svg':'icon-moon.svg'}`}/>
                    </button>
                    <select className=" md:block  bg-transparent pl-4 border-none focus:outline-none cursor-pointer" 
                             onChange={(e)=>i18next.changeLanguage(e.target.value)} >
                         <option className="lang" value='en'>en</option>
                         <option className="lang" value='fr'>fr</option>
                         <option className="lang" value='ar'>ar</option>
                    </select>
           </div>
        <div>
          {menu && 
            
           <div className='flex divide-y-2 flex-col justify-center items-center gap-3'>
                <NavLink to='/' className={activLik}>{t('Header.home')}</NavLink>
                <NavLink to='/about' className={activLik}>{t('Header.about')}</NavLink>
                <NavLink to='/shop' className={activLik}>{t('Header.shop')}</NavLink>
                <NavLink to='/blog' className={activLik}>{t('Header.blog')}</NavLink>
                <NavLink to={'/contact'} className={activLik}>{t('Header.Contact')}</NavLink>
           </div> 
}
          {categores && <div className='flex divide-y-2 flex-col justify-center items-center gap-3'>
            {AllCategore.map(ctg=>{
             return <div  key={ctg}>{ctg}</div>
            })}
            </div>}
           </div>

         <div className='flex gap-6 pt-10 w-full px-2'>
                                <button className='btn bg-green'>Sgin</button>
                                <button className='btn bg-orang'>LogIn</button>
                              </div>
      </div>

    </div>
  )
}

export default NavMobil