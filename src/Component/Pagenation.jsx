import React from 'react'

const Pagenation = ({productPerPage,totalProduct,pagenate,currentPage}) => {
     const pageNember=[];
     for(let i=1;i<=Math.ceil(totalProduct/productPerPage);i++){
         pageNember.push(i) 
     }
  
   return (
   <nav className='mt-5 ' >
     <ul className='flex flex-row flex-wrap items-center justify-center' >
          {pageNember.map(num=>(
               <li key={num} 
                 className={`${currentPage===num?'bg-green':'bg-orang'} 
                 cursor-pointer h-[25px] w-[25px] flex items-center justify-center p-1  m-2 rounded-[50%] border`}>
                    <a onClick={()=>{pagenate(num)}} >{num}</a>
               </li>
          ))}
     </ul>
 </nav>
  )
}

export default Pagenation