import React from 'react';
import {IconInfo} from './iconInfo';
import './IconCard.css';

const IconCard = () => {
  return (
    <div>
      <div className='w-64 bg-transparent h-40 p-1.5 flex'>
         <div className='icon_image my-7 mx-3'>
            <img src={IconInfo.img} className='w-16  p-3 m-auto'/>
         </div>
         <div className=' text-xl my-7 mx-3'>
            <h3 className='font-semibold text-white'>{IconInfo.title}</h3>
            <h2 className='text-teal text-4xl font-bold my-2'>{IconInfo.body}</h2>
         </div>
      </div>
    </div>
  )
}

export default IconCard
