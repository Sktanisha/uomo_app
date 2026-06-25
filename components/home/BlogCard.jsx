import React from 'react'
import BlogImage from "@/assets/images/blogImage.png"
import Image from 'next/image'
const BlogCard = () => {
  return (
    <div >
      <Image src={BlogImage} alt='blog' className='w-full' />
      <div className='bg-white pl-7.5 pb-5'>
        <h3 className='text-sm text-primary-gray font-normal pt-6 leading-6'>
          BY ADMIN <span className='ml-6.5'> APRIL 05,2020</span></h3>
          <h2 className='text-lg font-normal text-primary-black max-w-53 mt-1'>
            Women with good shoes is never be ugly place</h2>
      </div>
    </div>
  )
}

export default BlogCard
