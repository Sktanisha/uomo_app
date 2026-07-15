import React from "react";
import ShopBannerBgImage from "@/assets/images/shopBannerbgImage.png";
const ShopBanner = () => {
  return (
    <div
      className=" pt-37.5 pb-50.75 mx-15 text-center bg-no-repeat! bg-cover! bg-center!"
      style={{ background: `url(${ShopBannerBgImage.src})` }}
    >
      <h2 className="text-[60px] font-bold text-primary-black uppercase">
        SHOES
      </h2>
    </div>
  );
};

export default ShopBanner;
