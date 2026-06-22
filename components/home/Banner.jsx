import React from "react";
import Image from "next/image";
import Container from "../layout/Container";
import bgImage from "../../assets/images/bgImage.png";
import bannerItemImage from "../../assets/images/bgitemImage.png";
import Link from "next/link";
const Banner = () => {
  return (
    <section style={{ background: `url(${bgImage.src})` }} className="h-100 ">
      <Container>
        <div className="flex justify-between">
          <div>
            <h3 className="pl-13.25 relative text-primary text-sm font-medium leading-6
            after::content-[''] after:w-10 after:h-0.5 after:bg-primary after:absolute 
            after:top-2/4 after:translate-y-[-50%] after:left-0">Shop Our Cloths</h3>
            <h1 className="text-[50px] font-bold text-secondary leading-15 mt-2.75">Unlimited Discount {" "}
              <span className="text-primary">everyday</span></h1>
            <Link href="#" className=" text-sm font-medium text-black leading-6 
            after::content-[''] after:w-10 after:h-0.5 after:bg-black after:absolute 
            after:bottom-0  after:left-0">
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
      </Container>
    </section>
  );
};

export default Banner;
