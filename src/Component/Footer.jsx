import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiCurrentLocation, BiPhoneCall } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 text-black md:grid-cols-4 gap-3 bg-gray p-5 dark:bg-black '>
      <div className='overflow-hidden'>
         <div className='flex sm:flex-row flex-col flex-shrink-0 text-xxl mb-3'>
        Market<span className='text-green'>-Alg</span>
         </div>
         <div className='dark:text-white'>
        <span className='flex  items-center mt-4'><BiCurrentLocation className='text-green ' size={25}/><h2 className='mx-2'>Algeria,skikda,zerdaza</h2></span>
        <span className='flex items-center mt-4'><BiPhoneCall className='text-green ' size={25}/><h2 className='mx-2'>+231794949451</h2></span>
        <span className='flex items-center mt-4'><AiOutlineMail className='text-green ' size={25}/><h2 className='mx-2'>ayoubbouslama1994@gmail.com</h2></span>
      </div>
      </div>
      
      <ul>
        <li className='text-xl mb-3 text-green'>Linkes</li>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li className='text-xl mb-3 text-green'>Company</li>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li className='text-xl mb-3 text-green'>Install App</li>
      <li>From app store or Google Play</li>
      <li><img src='/src/assets/img/app-store.jpg'/></li>
      <li><img src='/src/assets/img/google-play.jpg'/></li>
      <li>Secured Payment Gateways</li>
      <li><img src='/src/assets/img/payment-method.png'/></li>
      </ul>
    </div>
  )
}

export default Footer