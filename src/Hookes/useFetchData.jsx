import  { useEffect, useState } from 'react'
import axios from "axios";


const useFetchData = () => {
     const BASE_URL = "https://api-xh9w.onrender.com";
     const [product,setproduct]=useState([])
     const [err,seterr]=useState()
     const [loding,setloding]=useState(false)
     useEffect(()=>{
          const getAllProducts=async()=>{
            setloding(true)
            await  axios.get(`${BASE_URL}/products`).
          then(res=>{
               setproduct(res.data) 
               setloding(false) })
          .catch(error=> {setloding(false) 
             seterr(error.messege)})
          }
          getAllProducts()
          
             },[])
    
             
  return {loding,product,err}

}

export default useFetchData
