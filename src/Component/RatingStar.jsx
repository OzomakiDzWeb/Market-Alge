import React from 'react'
import {AiFillStar} from 'react-icons/ai'
const RatingStar = ({rate}) => {
     console.log(rate)
     const star=[]
     for (let i=0;i<rate;i++){
          star.push(<AiFillStar/>)
        }
  return (
    <div className='flex'>{star}</div>
  )
}

export default RatingStar