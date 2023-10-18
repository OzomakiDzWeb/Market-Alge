import React from 'react'
import Ticket from '../Component/Ticket'

const About = () => {
  return (
    <div className='mt-5 mx-5'>
      {/* section 1 */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center'>
        <div className='col-span-1 '>
          <img className='rounded-[45px]' src='/src/assets/img/about-1.png'/>
        </div>
        <div className='col-span-1 flex flex-col justify-evenly text-[#aaaaaa] '>
          <h1 className='text-xxl text-black dark:text-white'>Welcom to Market-Alg</h1>
          <p className='text-x mt-5 leading-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laboriosam, doloribus error quia modi maiores neque, iure excepturi odit exercitationem consequatur? Laboriosam, necessitatibus nisi veniam beatae sed, facere cum voluptatum saepe reprehenderit sunt quis ut sapiente assumenda commodi consequatur culpa architecto. Sint a quae amet nobis, neque atque aliquid similique facere nesciunt beatae asperiores quis eveniet voluptates. Sed lpt!</p>
          <p className=' mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente quis aliquid exercitationem rem repellendus eaque quas fugiat voluptates aut sit suscipit laboriosam et quae doloribus maiores maxime enim quod cum nam accusamus voluptatum omnis delectus a. Quo aspernatur, illum optio itaque excepturi soluta earum, consequuntur facere distinctio, necessitatibus accusantium rerum sunt iure natus dolor iste nesciunt corporis quae modi laboriosam molestiae? Voluptatum numquam velit perferendis, dolore reprehenderit placeat quasi officiis modi, voluptate odit tempora, assumenda quae voluptatem dicta voluptates.</p>
          <div className='grid grid-cols-3 gap-1 mt-5'>
            <img className='rounded-[20px] cursor-pointer hover:scale-105 transition-all duration-200' src='/src/assets/img/about-2.png'/>
            <img className='rounded-[20px] cursor-pointer hover:scale-105 transition-all duration-200' src='/src/assets/img/about-3.png'/>
            <img className='rounded-[20px] cursor-pointer hover:scale-105 transition-all duration-200' src='/src/assets/img/about-4.png'/>
          </div>
        </div>
      </div>
      {/* sextion 2*/}
      <div className='my-10'>
        <h1 className='my-8 text-xxl text-center w-full text-black dark:text-white'> What We Provide?</h1>
        <div>
          <Ticket/>
        </div>
      </div>
      {/* section 3 */}
      <div className='grid  my-10 '>
        <div className='grid-rows-1 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center'>
          <div className='grid-cols-1'>
            <img src='/src/assets/img/about-5.png'/>
          </div>
          <div className='grid-cols-1 '>
            <h2 className='text-xl text-green'>Our performance</h2>
            <h1 className='my-3 text-xxl'>Your Partner for <br/>
               e-commerce grocery solution</h1>
            <p className='mb-3 text-[#aaaaaa]'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
            <p className='text-[#aaaaaa]'>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
          </div>
          <div className='grid col-span-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10'>
            <div className='col-span-1'>
              <h1 className='text-xl mb-3'>Who we are</h1>
              <p className='text-[#aaaaaa]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde laboriosam voluptatum, deserunt aut fugit nostrum alias, rem, magni sint eaque nemo adipisci pariatur ad vel harum blanditiis beatae consequatur.</p>
            </div>
             <div className='col-span-1'>
              <h1 className='text-xl mb-3'>Our history</h1>
              <p className='text-[#aaaaaa]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde laboriosam voluptatum, deserunt aut fugit nostrum alias, rem, magni sint eaque nemo adipisci pariatur ad vel harum blanditiis beatae consequatur.</p>
            </div>
             <div className='col-span-1'>
              <h1 className='text-xl mb-3'>Our mission</h1>
              <p className='text-[#aaaaaa]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde laboriosam voluptatum, deserunt aut fugit nostrum alias, rem, magni sint eaque nemo adipisci pariatur ad vel harum blanditiis beatae consequatur.</p>
            </div>
          </div>
        </div>
      </div>
      {/* section  4 */}
      <div className='bg-bg-about-9 bg-cover bg-no-repeat bg-center bg-fixed rounded-[30px] my-10'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 bg-black/70 text-white rounded-[30px] '>
         <div className='flex flex-col items-center my-10'>
           <h1 className='text-xxl'>3+</h1>
           <p className='text-x'>Glorious years</p>
         </div>
         <div className='flex flex-col items-center my-10'>
           <h1 className='text-xxl'>3+</h1>
           <p className='text-x'>Glorious years</p>
         </div>
         <div className='flex flex-col items-center my-10'>
           <h1 className='text-xxl'>3+</h1>
           <p className='text-x'>Glorious years</p>
         </div>
         <div className='flex flex-col items-center my-10'>
           <h1 className='text-xxl'>3+</h1>
           <p className='text-x'>Glorious years</p>
         </div>
         <div className='flex flex-col items-center my-10'>
           <h1 className='text-xxl'>3+</h1>
           <p className='text-x'>Glorious years</p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default About