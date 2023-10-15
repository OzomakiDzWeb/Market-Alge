import React, { useEffect, useState } from 'react'
import Section1Home from '../Component/Section1Home'
import SliderHome from '../Component/SliderHome'
import CartProdctHome from './CartProdctHome';
import { AiFillStar, AiFillTags, AiOutlinePercentage } from 'react-icons/ai';
import { PiPentagramBold } from 'react-icons/pi';
import Slider from '../Component/SliderBlog'
const Home = ({loding,data,err}) => {
  const topRating = data["top-rating"] || [];
  const discount = data["discount"] || [];
  const topOrder = data["number-orders"] || [];
 const [activProduct,setActivProduct]=useState('order')


console.log(discount)
  return (
    <div className=' mx-auto'>
   
      <Section1Home/>
      <SliderHome/>
      <div className='flex flex-col justify-center items-center md:grid grid-cols-6 mx-5 rounded-[50px] bg-gray'>
        <div className='col-span-2 bg-bg-home bg-cover bg-center bg-no-repeat rounded-[50px]'>
         <div className='w-full h-full  flex-flex-col p-3 bg-gradient-to-t from-green to-orang/60 rounded-[50px] '>
         <div className='sm:w-1/2 text-white'>
             <h1 className='text-xxl leading-7'>Daily Best Sells</h1>
            <p className='text-xl my-5'>Exclusive Offer - 20% Off</p>
            <h3>Specialist in the grocery store from $7.99</h3>
         </div>
            <img  className='  aspect-square' src='/src/assets/img/banner-1.png'/>
          </div>
        </div>
        <div className='  col-span-4  p-5'>
          <div className='flex justify-around my-4'>
            <div style={{color:`${activProduct==='order'?'#3cb47c':'#000'}`}} onClick={()=>setActivProduct('order')} className='flex gap-2 items-center cursor-pointer '><AiFillTags/>Top Order</div>
            <div style={{color:`${activProduct==='discount'?'#3cb47c':'#000'}`}} onClick={()=>setActivProduct('discount')} className='flex gap-2 items-center cursor-pointer '><AiOutlinePercentage/>Top Discount</div>
            <div style={{color:`${activProduct==='rating'?'#3cb47c':'#000'}`}} onClick={()=>setActivProduct('rating')} className='flex gap-2 items-center cursor-pointer '><PiPentagramBold/>Top Rating</div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2  gap-1 md:grid-cols-4'>
          
              {topOrder.map(produ=>{
            return <div style={{display:`${activProduct==='order'?'block':'none'}`}} key={produ.id}>  <CartProdctHome product={produ}/></div>
              })}
               {topRating.map(produ=>{
            return  <div style={{display:`${activProduct==='rating'?'block':'none'}`}} key={produ.id}> <CartProdctHome  product={produ}/></div>
              })}
               {discount.map(produ=>{
            return <div style={{display:`${activProduct==='discount'?'block':'none'}`}} key={produ.id}>  <CartProdctHome product={produ}/></div>
              })}
            </div>
        </div>
      </div>
      {/* .................... */}
      <div className='grid grid-cols-1 mt-10  sm:grid-cols-2 md:grid-cols-4'>
         <div className='relative m-2  py-5 px-2 text-right  rounded-[20px] shadow-lg bg-bg-feature1 bg-cover bg-center'>
                <h5>
                    Everyday Fresh with
                    <br />
                    Our Products
                  </h5>
                  <span> Go to supplier</span>
          </div>
             <div className='relative m-2  py-5 px-2 text-right  rounded-[20px] shadow-lg bg-bg-feature2 bg-cover bg-center'>
                <h5>
                    Everyday Fresh with
                    <br />
                    Our Products
                  </h5>
                  <span> Go to supplier</span>
          </div>
             <div className='relative m-2  py-5 px-2 text-right  rounded-[20px] shadow-lg bg-bg-feature3 bg-cover bg-center'>
                <h5>
                    Everyday Fresh with
                    <br />
                    Our Products
                  </h5>
                  <span> Go to supplier</span>
          </div>
             <div className='relative m-2  py-5 px-2 text-right  rounded-[20px] shadow-lg bg-bg-feature4 bg-cover bg-center'>
                <h5>
                    Everyday Fresh with
                    <br />
                    Our Products
                  </h5>
                  <span> Go to supplier</span>
          </div>
        </div>
        {/* ......slider blogs........... */}
        <div className='flex flex-col md:grid grid-cols-12 gap-2 place-content-between mx-5'>
          <div className='col-span-7'>
            <Slider/>
          </div>
          <div className='col-start-9 col-end-13 dark:bg-black flex flex-col py-5 my-4 px-2  dark:text-white bg-gray rounded-[30px]'>
            <h1 className='text-xl mb-10'>Clients Reviews</h1>
            <div className='border mt-10 p-4  rounded-lg h-full flex flex-col justify-start'>
              <div className=' rounded-[50%] h-[100px] w-[100px] overflow-hidden top-0 -translate-y-[50%]'>
                <img src='/src/assets/img/client-1.png'/>
              </div>
              <p className='text-sm'>While running an early stage startup everything feels hard, that’s why it’s been so nice to have our accounting feel easy. We recommed Qetus.</p>
              <h1 className='my-4 text-x'>Jacob Leonardo</h1>
              <p className='text-sm'>Senior Manager of Excel Solution</p>
              <div className='text-[#FFFF00] flex mt-4'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                </div>
            </div>
          </div>
        </div>
        {/* .......ticket */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 dark:text-white '>
          <div className='bg-gray dark:bg-black m-1 rounded-lg p-2 grid grid-cols-2 place-content-center'>
            <div className='aspect-auto'>
              <img className='h-[100px]' src='/src/assets/img/icon-1.png'/>
            </div>
            <div className='flex flex-col justify-between ml-3'>
              <h1 className='text-xl'>Best offers</h1>
              <p className='text-md'>Orders $50 or more</p>
            </div>
          </div>
             <div className='bg-gray dark:bg-black m-1 rounded-lg p-2 grid grid-cols-2 place-content-center'>
            <div className='aspect-auto'>
              <img className='h-[100px]' src='/src/assets/img/icon-2.png'/>
            </div>
            <div className='flex flex-col justify-between ml-3'>
              <h1 className='text-xl'>Free delivery</h1>
              <p className='text-md'>24/7 amazing services</p>
            </div>
          </div>
           <div className='bg-gray dark:bg-black m-1 rounded-lg p-2 grid grid-cols-2 place-content-center'>
            <div className='aspect-auto'>
              <img className='h-[100px]' src='/src/assets/img/icon-3.png'/>
            </div>
            <div className='flex flex-col justify-between ml-3'>
              <h1 className='text-xl'>Great daily deal</h1>
              <p className='text-md'>When you sign up</p>
            </div>
          </div>
           <div className='bg-gray dark:bg-black m-1 rounded-lg p-2 grid grid-cols-2 place-content-center'>
            <div className='aspect-auto'>
              <img className='h-[100px]' src='/src/assets/img/icon-4.png'/>
            </div>
            <div className='flex flex-col justify-between ml-3  '>
              <h1 className='text-xl break-words '>Wide assortment</h1>
              <p className='text-md'>Mega Discounts</p>
            </div>
          </div>
           <div className='bg-gray dark:bg-black m-1 rounded-lg p-2 grid grid-cols-2 place-content-center'>
            <div className='aspect-auto'>
              <img className='h-[100px]' src='/src/assets/img/icon-5.png'/>
            </div>
            <div className='flex flex-col justify-between ml-3'>
              <h1 className='text-xl'>Easy returns</h1>
              <p className='text-md'>Within 30 days</p>
            </div>
          </div>
        </div>
        {/* last section */}
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
              <form className='p-2 rounded-lg dark:bg-black bg-white flex'>
                <input className='inpt outline-none dark:bg-black dark:text-white text-black' type='email' placeholder='your Email Address'/>
                <button className='btn bg-orang'>Subscribe</button>
              </form>
              <div className='flex'>
               <img className='w-1/2' src='/src/assets/img/google-play.jpg'/>
                <img className='w-1/2' src='/src/assets/img/app-store.jpg'/>
              </div>
            </div>
            <div className='mx-4  sm:col-start-5 sm:col-end-9 md:col-span-4 '>
              <img src='/src/assets/img/footer-img-2.png'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home