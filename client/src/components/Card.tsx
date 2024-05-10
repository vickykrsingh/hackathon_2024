import Image from 'next/image'
import React from 'react'
import FImage from '@/../public/tim-toomey-STqHLqMne3k-unsplash.jpg'

function Card() {
  return (
    <div className='h-22 w-56 bg-gray-300 p-1 rounded-sm shadow-md'>
      <Image src={FImage} alt='food-image' />
      <section className='flex flex-col text-sm'>
        <span className='font-semibold'>Chicken</span>
        <span>Greater Noida sector 18</span>
      </section>
    </div>
  )
}

export default Card