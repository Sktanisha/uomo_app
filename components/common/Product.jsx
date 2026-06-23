"use client"; 
import Image from 'next/image'
import React from 'react'
import ProductImage from "@/assets/images/men-tshirt.jpg";
import {Rating} from '@smastrom/react-rating';
import "@smastrom/react-rating/style.css";
const Product = () => {
  return (
    <div className='border relative group border-[#E4E4E4] hover:shadow-lg duration-300 hover:shadow-primary-black/2.5 w-[255px] rounded-lg overflow-hidden'>
      <Image src={ProductImage} alt="product" width={255} height={200}/>
      <div className='hidden group-hover:block absolute left-2/4 translate-x-[-50%]'>
        <ul className='flex items-center gap-2.5 justify-center -mt-5'>
          <li className='group'>
            <button className='w-10 h-10 duration-500 hover:bg-primary bg-[#F3E8D6] rounded-full flex items-center justify-center'>

            </button>
          </li>
        </ul>
      </div>
      <div className='pt-8.5 pl-5 pr-8.25 pb-3.25'>
        <h4 className='font-normal text-sm text-primary-gray'>T-shirt</h4>
        <h2 className='font-normal text-[15px] text-primary-black mt-0.5' >Men stylist T-shirt</h2>
        <div className='flex gap-2 items-center'>
            <Rating  style={{maxWidth:180}} value={3} readOnly />
        <h6>35,780</h6>
        </div>
        <h3 className='text-primary text-lg font-normal mt-2.5'>$30.99</h3>
      </div>
    </div>
  )
}

export default Product
