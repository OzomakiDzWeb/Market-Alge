import { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
     const {i18n}=useTranslation()
      const [direction, setDirection] = useState('');
     useEffect(()=>{
      document.documentElement.dir = direction;
      for(let i=0;i<document.getElementsByClassName('lang').length;i++){
        const element=document.getElementsByClassName('lang')[i]
        console.log(element)
        if(element.value===i18n.language){
          element.setAttribute('selected','true')
         
        }
        if(i18n.language==='ar'){
          setDirection('rtl')
        }else{
          setDirection('ltr')
        }
      }},[direction,i18n.language])
   
  return (
    <div>
     <select className="text-nav-caps form-select appearance-none pl-4 border-none focus:outline-none cursor-pointer bg-no-repeat" 
     onChange={(e)=>i18n.changeLanguage(e.target.value)} >
              <option className="lang" value='en'>en</option>
              <option className="lang" value='fr'>fr</option>
              <option className="lang" value='ar'>ar</option>
              </select>

              <h1>{t('Header.home')}</h1>
    </div>
  )
}

export default Header