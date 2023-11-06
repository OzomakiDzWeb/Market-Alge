import React from 'react'
import {BiCurrentLocation, BiPhoneCall} from 'react-icons/bi'
import {AiFillPushpin, AiOutlineMail, AiOutlineUser} from 'react-icons/ai'
import {SlEnvolopeLetter} from 'react-icons/sl'
import Ticket from '../Component/Ticket'
import FooterBottm from '../Component/FooterBottm'
const Contact = () => {
  return (
    <div className='mt-4'>
     <iframe className='w-screen' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102516.52170398766!2d6.846043814845956!3d36.58686083506274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1b0047adeeb83%3A0xc641d2a5c0f17438!2sZerdaza!5e0!3m2!1sen!2sdz!4v1699162682785!5m2!1sen!2sdz"  
       allowfullscreen="" 
       loading="lazy" >
     </iframe>
     <div className='w-[50%] border border-gray mx-auto my-5 p-5 rounded-lg shadow-lg'>
      <h1 className='text-center text-xl mb-4 text-green'>About Company</h1>
      <div className='dark:text-white'>
        <span className='flex  items-center mt-4'><BiCurrentLocation className='text-green ' size={25}/><h2 className='mx-2'>Algeria,skikda,zerdaza</h2></span>
        <span className='flex items-center mt-4'><BiPhoneCall className='text-green ' size={25}/><h2 className='mx-2'>+231794949451</h2></span>
        <span className='flex items-center mt-4'><AiOutlineMail className='text-green ' size={25}/><h2 className='mx-2'>ayoubbouslama1994@gmail.com</h2></span>
      </div>
     </div>
     <div className='px-3'>
      <h1 className='text-xl text-green'>Contact form</h1>
      <p className='text-gray my-3'>Your email address will not be published. Required fields are marked *</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <form>
          <div className='flex w-full items-center border rounded-xl p-2 bg-gray/40 mt-4'>
            <AiOutlineUser size={25}/><input className='outline-none mx-2 bg-transparent' type='text' placeholder='Your Name'/>
          </div>
          <div className='flex w-full items-center border rounded-xl p-2 bg-gray/40 mt-4'>
            <AiOutlineMail size={25}/><input className='outline-none mx-2 bg-transparent' type='text' placeholder='Your Email'/>
          </div>
          <div className='flex w-full items-center border rounded-xl p-2 bg-gray/40 mt-4'>
            <AiFillPushpin size={25}/><input className='outline-none mx-2 bg-transparent' type='text' placeholder='Your Subject'/>
          </div>
            <div className='flex w-full items-center border rounded-xl p-2 bg-gray/40 mt-4'>
            <SlEnvolopeLetter size={25}/><textarea className='outline-none  w-full mx-2 bg-transparent' type='text' placeholder='Your Subject'/>
          </div>
          <button className='btn bg-green mt-4 w-[50%] translate-x-[50%]'>Send</button>
        </form>
        <div className='rounded-lg overflow-hidden'>
          <img src='/src/assets/img/contact-1.png'/>
        </div>
      </div>
     </div>
      <div className='mt-4'>
     <Ticket/>
      <FooterBottm/>
  </div>
    </div>
  )
}

export default Contact