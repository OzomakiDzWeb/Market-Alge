import React, { useEffect, useState } from 'react'
import {getPost} from '../api'
import FooterBottm from '../Component/FooterBottm'
import Ticket from '../Component/Ticket'
const Blog = () => {
  const [postes,setpostes]=useState([])
  useEffect(()=>{
    const getpost=async ()=>{
      const AllPostes=await getPost()
      setpostes(AllPostes)
    }
getpost()
  },[])
  console.log(postes)
  return (
   <div className='mt-4'>
     <div>
      {postes.map(post=>
      <div 
      className='grid grid-cols-1 sm:grid-cols-2 place-items-center dark:text-white  gap-2 p-2 border rounded-lg m-4 hover:scale-105 transition-all duration-200' 
      key={post.id}>
     <div>
       <img src={post.img}/>
     </div>
     <div>
       <h1 className='text-xl mb-4 text-orang'>{post.title}</h1>
      <p className='mb-4'>{post.description}</p>
      <div>
        <h1 className='text-x'>{post.time}</h1>
        <h1 className='text-x'>{Object.values(post).pop()}</h1>
      </div>
     </div> 
      </div>)}
  </div>
  <div className='mt-4'>
     <Ticket/>
      <FooterBottm/>
  </div>
   </div>
  )
}

export default Blog



