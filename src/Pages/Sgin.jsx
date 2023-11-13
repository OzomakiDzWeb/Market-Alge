import React from 'react'
import FooterBottm from '../Component/FooterBottm'
import Ticket from '../Component/Ticket'

const Sgin = () => {
  return (
     <div className='flex flex-col items-center mt-4'>
      <h1 className='text-xxl text-green mt-5'>Sign Up</h1>
      <form className='flex flex-col p-4 rounded-lg shadow-lg my-5 w-[40%] bg-gray dark:bg-black dark:text-white' >
         <label htmlFor='name'>User name</label>
        <input className='outline-none px-2 py-3 rounded-lg' type='email' placeholder='your name'/>
        <label htmlFor='name'>Email</label>
        <input className='outline-none px-2 py-3 rounded-lg' type='email' placeholder='your Email'/>
         <label className='mt-5' htmlFor='name'>Password</label>
        <input className='outline-none px-2 py-3 rounded-lg' type='password' placeholder='your Password'/>
        <label className='mt-5' htmlFor='name'>Repeat Password</label>
        <input className='outline-none px-2 py-3 rounded-lg' type='password' placeholder='Repeat Password'/>
        <button className='btn bg-green mt-4'>Sgin In</button>
      </form>
       <div className='mt-4'>
        <Ticket/>
        <FooterBottm/>
         </div>
    </div>
  )
}

export default Sgin