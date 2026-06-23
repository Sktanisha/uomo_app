"use client"; 
import Image from "next/image";
import Container from "../layout/Container";
import bgImage from "../../assets/images/bgImage.png";
import bannerItemImage from "../../assets/images/bgitemImage.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Pagination } from 'swiper/modules';
import { ChevronRight,ChevronLeft  } from 'lucide-react';
import 'swiper/css/pagination';
const Banner = () => {
  return (
    <section className="pt-31 pb-26.75 relative" style={{ background: `url(${bgImage.src})` }} >
      <Container>
        <Swiper modules={[Navigation,Pagination]}    navigation={{
          nextEl:".custom-next",
          prevEl:".custom-prev",
        }} loop={true} 
        pagination={{clickable:true,}} >
          <SwiperSlide>
            <div className="flex justify-between">
          <div>
            <h3 className="pl-13.25 relative text-primary text-sm font-medium leading-6
            after:content-[''] after:w-10 after:h-0.5 after:bg-primary after:absolute 
            after:top-2/4 after:translate-y-[-50%] after:left-0">Shop Our Cloths</h3>
            <h1 className="text-[50px] font-bold text-secondary leading-15 mt-2.75">Unlimited Discount {" "}
              <span className="text-primary">everyday</span></h1>
            <Link href="#" className=" text-sm font-medium mt-4.75 inline-block text-black leading-6 relative
            after:content-[''] after:w-24 after:h-0.5 after:bg-black after:absolute 
            after:bottom-0.5  after:left-0">
              DISCOVER MORE
            </Link>
          </div>
          <Image
            src={bannerItemImage}
            alt="banneritem"
            width={518}
            height={329}
          />
        </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between">
          <div>
            <h3 className="pl-13.25 relative text-primary text-sm font-medium leading-6
            after:content-[''] after:w-10 after:h-0.5 after:bg-primary after:absolute 
            after:top-2/4 after:translate-y-[-50%] after:left-0">Shop Our Cloths</h3>
            <h1 className="text-[50px] font-bold text-secondary leading-15 mt-2.75">Unlimited Discount {" "}
              <span className="text-primary">everyday</span></h1>
            <Link href="#" className=" text-sm font-medium mt-4.75 inline-block text-black leading-6 relative
            after:content-[''] after:w-24 after:h-0.5 after:bg-black after:absolute 
            after:bottom-0.5  after:left-0">
              DISCOVER MORE
            </Link>
          </div>
          <Image
            src={bannerItemImage}
            alt="banneritem"
            width={518}
            height={329}
          />
        </div>
          </SwiperSlide>
        </Swiper>
        <button className="custom-prev rounded-full size-11.25 bg-white flex 
        justify-center items-center absolute top-2/4 translate-y-[-50%] left-15.25"><ChevronLeft/> </button>
        <button  className="custom-next rounded-full size-11.25 bg-white flex 
        justify-center items-center absolute top-2/4 translate-y-[-50%] right-15.25"><ChevronRight/></button>
      </Container>
    </section>
  );
};

export default Banner;
