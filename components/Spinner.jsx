import Image from 'next/legacy/image'
import React from 'react'
import spinner from '@public/assets/images/loader.svg'
const Spinner = () => {
  return (
    <>
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]'/>

    <Image src={spinner} alt='loading' className='w-200px m-auto '/>
    </>
  )
}

export default Spinner