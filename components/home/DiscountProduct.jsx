"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Product from '../common/Product';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronRight,ChevronLeft  } from 'lucide-react';
const DiscountProduct = ({products}) => {
  return (
    <div className=' relative w-281.5 overflow-visible'>
      <Swiper modules={[Navigation]}    navigation={{
          nextEl:".custom-next",
          prevEl:".custom-prev",
        }}
        
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        {products?.map((item) => (
          <SwiperSlide key={item.id}>
            <Product item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="custom-prev rounded-full size-11.25 bg-[#EEEEEE] flex 
        justify-center items-center absolute top-2/4 translate-y-[-50%] -left-4.5"><ChevronLeft/> </button>
        <button  className="custom-next rounded-full size-11.25 bg-[#EEEEEE] flex 
        justify-center items-center absolute top-2/4 translate-y-[-50%] right-2"><ChevronRight/></button>
    </div>
  )
}

export default DiscountProduct
