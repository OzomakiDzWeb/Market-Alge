import React from 'react'

const FooterBottm = () => {
  return (
    <div className='bg-bg-layer bg-cover my-4 overflow-hidden'>
          <div className='p-4 overflow-hidden bg-gradient-to-t bg-green/70 from-orang/80 grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 place-content-center '>
            <div className='mx-4  sm:col-span-6 md:col-span-4 '>
              <img src='/src/assets/img/footer-img-1.png'/>
            </div>
            <div className='mx-4 flex flex-col justify-around   sm:col-span-6 md:col-span-4 dark:text-black text-white'>
              <div className='text-center'>
                Start You'r Daily Shopping with Nest <br/>Mart
              </div>
              <h1 className='text-xl text-center'>Stay home & get your<br/> daily needs from our<br/> shop</h1>
              <form className='p-2 rounded-lg dark:bg-black bg-white flex mt-4'>
                <input className='inpt outline-none dark:bg-black dark:text-white text-black' type='email' placeholder='your Email Address'/>
                <button className='btn bg-orang'>Subscribe</button>
              </form>
              <div className='flex mt-3'>
               <img className='w-1/2' src='/src/assets/img/google-play.jpg'/>
                <img className='w-1/2' src='/src/assets/img/app-store.jpg'/>
              </div>
            </div>
            <div className='mx-4  sm:col-start-5 sm:col-end-9 md:col-span-4 '>
              <img src='/src/assets/img/footer-img-2.png'/>
            </div>
          </div>
        </div>
  )
}

export default FooterBottm