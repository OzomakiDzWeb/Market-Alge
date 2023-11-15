import React, { useState } from 'react'
import  ReactDOM  from "react-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { useParams } from 'react-router'

const Details = ({showDetails,setShowDetails,product}) => {
  
     const {id}=useParams()
  return ReactDOM.createPortal (
    <div className={`${showDetails?'flex':'hidden'} bg-black/40 z-50 fixed top-0 w-full h-screen border  items-center justify-center`}>
     <div className='bg-white relative flex flex-col items-center justify-center w-[80%] h-[80%]'>
          <div className='cursor-pointer absolute top-5 left-5 ' onClick={()=>setShowDetails(false)}><AiOutlineClose size={25}/></div>
          <div className='overflow-hidden' >
               <img className='' src={product.image_url}/>
          </div>
         <div className='grid grid-cols-2'>
          <span className='text-green text-xl'>Name</span>
          <span >{product.name}</span>
          <span className='text-green text-xl'>Price</span>
          <span>{product.price}</span>
         </div>
          
     </div>
    </div>,
  
  
   document.getElementById('loding')
    )
}

export default Details