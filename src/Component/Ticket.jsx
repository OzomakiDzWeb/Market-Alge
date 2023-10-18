import React from 'react'

const Ticket = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 dark:text-white '>
          <div className='bg-gray dark:bg-black m-1 rounded-lg p-2 grid grid-cols-2 place-content-center cursor-pointer hover:scale-105 transition-all duration-150 '>
            <div className='aspect-auto'>
              <img className='h-[100px]' src='/src/assets/img/icon-1.png'/>
            </div>
            <div className='flex flex-col justify-between ml-3'>
              <h1 className='text-xl'>Best offers</h1>
              <p className='text-md'>Orders $50 or more</p>
            </div>
          </div>
             <div className='bg-gray dark:bg-black m-1 rounded-lg p-2 grid grid-cols-2 place-content-center cursor-pointer hover:scale-105 transition-all duration-150 '>
            <div className='aspect-auto'>
              <img className='h-[100px]' src='/src/assets/img/icon-2.png'/>
            </div>
            <div className='flex flex-col justify-between ml-3'>
              <h1 className='text-xl'>Free delivery</h1>
              <p className='text-md'>24/7 amazing services</p>
            </div>
          </div>
           <div className='bg-gray dark:bg-black m-1 rounded-lg p-2 grid grid-cols-2 place-content-center cursor-pointer hover:scale-105 transition-all duration-150 '>
            <div className='aspect-auto'>
              <img className='h-[100px]' src='/src/assets/img/icon-3.png'/>
            </div>
            <div className='flex flex-col justify-between ml-3'>
              <h1 className='text-xl'>Great daily deal</h1>
              <p className='text-md'>When you sign up</p>
            </div>
          </div>
           <div className='bg-gray dark:bg-black m-1 rounded-lg p-2 grid grid-cols-2 place-content-center cursor-pointer hover:scale-105 transition-all duration-150 '>
            <div className='aspect-auto'>
              <img className='h-[100px]' src='/src/assets/img/icon-4.png'/>
            </div>
            <div className='flex flex-col justify-between ml-3  '>
              <h1 className='text-xl break-words '>Wide assortment</h1>
              <p className='text-md'>Mega Discounts</p>
            </div>
          </div>
           <div className='bg-gray dark:bg-black m-1 rounded-lg p-2 grid grid-cols-2 place-content-center cursor-pointer hover:scale-105 transition-all duration-150 '>
            <div className='aspect-auto'>
              <img className='h-[100px]' src='/src/assets/img/icon-5.png'/>
            </div>
            <div className='flex flex-col justify-between ml-3'>
              <h1 className='text-xl'>Easy returns</h1>
              <p className='text-md'>Within 30 days</p>
            </div>
          </div>
        </div>
  )
}

export default Ticket