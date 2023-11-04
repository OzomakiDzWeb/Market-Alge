import React from 'react'

const SidbarInput = ({handelChek,handelPrice}) => {
  
  return (
    <div className='flex-row flex sm:flex-col items-start justify-between'>
      <div >
          <h1>Filter by Category</h1>
        <div className='flex'>
            <input
            type="radio"
            id='all'
            name='category'
            onChange={(e)=>{
               handelChek(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>all</h1>
        </div>
        <div className='flex'>
            <input
            type="radio"
            id='vegetables'
           name='category'
            onChange={(e)=>{
               handelChek(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>vegetables</h1>
        </div>
        <div className='flex'>
            <input
            type="radio"
            id='fruits'
            name='category'
            onChange={(e)=>{
               handelChek(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>fruits</h1>
        </div>
        <div className='flex'>
            <input
            type="radio"
            id='beverages'
            name='category'
            onChange={(e)=>{
               handelChek(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>beverages</h1>
        </div>
        <div className='flex'>
            <input
            type="radio"
            name='category'
            id='dairy'
            onChange={(e)=>{
               handelChek(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>dairy</h1>
        </div>
        <div className='flex'>
            <input
            type="radio"
            name='category'
            id='desserts'
            onChange={(e)=>{
               handelChek(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>desserts</h1>
        </div>
        <div className='flex'>
            <input
            type="radio"
            name='category'
            id='meat'
            onChange={(e)=>{
               handelChek(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>meat</h1>
        </div><div className='flex'>
            <input
            type="radio"
            name='category'
            id='snacks'
            onChange={(e)=>{
               handelChek(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>snacks</h1>
        </div>
        <div className='flex'>
            <input
            type="radio"
            name='category'
            id='cheese'
            onChange={(e)=>{
               handelChek(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>cheese</h1>
        </div>
      </div>
        <div>
           <h1 className=' sm:mt-4 '>Filter by Price</h1>
        <div className='flex'>
            <input
            type="radio"
            id='less < 50'
            name='price'
            onChange={(e)=>{
               handelPrice(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>less 50</h1>
        </div>
         <div className='flex'>
            <input
            type="radio"
            id='50-100'
            name='price'
            onChange={(e)=>{
               handelPrice(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>50-100</h1>
        </div>
        <div className='flex'>
            <input
            type="radio"
            id='100-150'
            name='price'
            onChange={(e)=>{
               handelPrice(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>100-150</h1>
        </div>
          <div className='flex'>
            <input
            type="radio"
            id='above-150'
            name='price'
            onChange={(e)=>{
               handelPrice(e.target.id)
              
            }}
            />
          <h1 className='mx-2'>above-150</h1>
        </div>
        </div>
    </div>
  )
}

export default SidbarInput