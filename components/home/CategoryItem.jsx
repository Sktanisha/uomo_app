import Image from 'next/image'
import React from 'react'
import categoryImage from "../../assets/images/jersey_category.jpg";
const CategoryItem = () => {
  return (
    <div className='  w-65 text-center'>
      <Image src={categoryImage} alt="category_product" width={260} height={220} className='rounded-lg border'/>
      <h3 className='font-medium text-base text-primary-black  mt-5.25 '>Jersey</h3>
      <h5 className='text-primary-gray text-sm font-normal'>20 Products</h5>
    </div>
  )
}

export default CategoryItem
