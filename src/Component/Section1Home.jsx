import React from 'react'
import { useTranslation } from 'react-i18next'

const Section1Home = () => {
     const {t}=useTranslation()
  return (
    <div className='grid grid-cols-6 gap-5 w-[100vw] h-[400px] '>
        <div className='border h-full md:col-span-4 col-span-6 flex flex-col justify-center  border-dashed border-green bg-home1 bg-no-repeat bg-center bg-cover p-3'>
          <span className='text-xxl text-green'>{t('Home.section1.div1.title1')}</span>
          <h1 className='text-xl py-10 leading-10'>{t('Home.section1.div1.title2.p1')}<br/> {t('Home.section1.div1.title2.p2')}</h1>
          <button className='btn w-1/2 bg-green'>{t('Home.section1.div1.button')}</button>
        </div>
        <div className='col-span-2 md:flex flex-col justify-between gap-3 hidden'>
          <div className='border h-full border-dashed border-green p-3 bg-home2 bg-cover bg-no-repeat bg-center flex '>
            <div>
              <p className='text-x py-5 leading-5'>{t('Home.section1.div2.title1')} <br/>{t('Home.section1.div2.title1')}</p>
              <p>{t('Home.section1.div2.title2')}</p>
            </div>
            <div className='rounded-[50%] w-[100px] h-[100px] flex items-center justify-center  bg-orang'>
             {t('Home.section1.div2.title2')}  
            </div>
          </div>
          <div className='border border-dashed h-full border-green p-3 bg-home3 bg-cover bg-center bg-no-repeat'>
            <div className='w-1/2'>
              <h1 className='text-x py-5 leading-5'>{t('Home.section1.div3.title1')}</h1>
              <button className='btn  bg-green'>{t('Home.section1.div1.button')}</button>
            </div>
          </div>
          
        </div>
      </div>
  )
}

export default Section1Home