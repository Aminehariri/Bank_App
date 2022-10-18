import React from 'react'
import { quotes } from '../assets'






export default function FeedBackCard({content ,name ,title,img}) {
  return (
    <div className='flex justify-between flex-col px-10 py-12  rounder-[20px] max-w-[370px] md:mr-10 sm:mr-5 feedback-card'>
      <img src={quotes} alt="quote" className='w-[42px] h-[27px] object-contain my-4'/>
      <p className='font-poppins leading-[32px] text-white'>{content}</p>

      <div className='flex flex-row my-4'>
      <img src={img} alt={name} className="w-[49px] h-[49px] rounded-full " />

      <div className='flex flex-col ml-4 '>
        <h4 className='font-poppins font-normal leading-[32px] text-[20px] text-white '> {name}</h4>
        <p className='text-white'>{title}</p>
      </div>
      </div>
    </div>
  )
}
