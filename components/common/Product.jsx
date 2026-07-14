"use client";
import Image from "next/image";
import React from "react";
import ProductImage from "@/assets/images/men-tshirt.jpg";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Product = ({item}) => {
  return (
    <div className="border relative group border-[#E4E4E4] hover:shadow-lg duration-300 hover:shadow-primary-black/2.5 md:w-63.75 rounded-lg overflow-hidden mb-4.5">
      {item?.thumbnail ? <Image className="md:w-63.75 h-50 object-contain" src={item?.thumbnail} alt="product" width={255} height={200} />
      :
      <Image className="w-full h-auto" src={ProductImage} alt="product" width={255} height={200} />
      }
      <div className="hidden group-hover:block absolute left-2/4 translate-x-[-50%]">
        <ul className="flex items-center gap-2.5 justify-center -mt-5">
          <li className="group">
            <button className="w-10 h-10 duration-500 hover:bg-primary bg-[#F3E8D6] rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3594 3.28125H10.6929C10.4756 1.43615 8.9025 0 7 0C5.0975 0 3.52436 1.43615 3.30712 3.28125H1.64062C1.33859 3.28125 1.09375 3.52609 1.09375 3.82812V13.4531C1.09375 13.7552 1.33859 14 1.64062 14H12.3594C12.6614 14 12.9062 13.7552 12.9062 13.4531V3.82812C12.9062 3.52609 12.6614 3.28125 12.3594 3.28125ZM7 1.09375C8.29839 1.09375 9.37943 2.04135 9.58833 3.28125H4.41167C4.62057 2.04135 5.70161 1.09375 7 1.09375ZM11.8125 12.9062H2.1875V4.375H3.28125V6.01562C3.28125 6.31766 3.52609 6.5625 3.82812 6.5625C4.13016 6.5625 4.375 6.31766 4.375 6.01562V4.375H9.625V6.01562C9.625 6.31766 9.86984 6.5625 10.1719 6.5625C10.4739 6.5625 10.7188 6.31766 10.7188 6.01562V4.375H11.8125V12.9062Z"
                  fill="#074E37"
                />
              </svg>
            </button>
          </li>
          <li className="group">
            <button className="w-10 h-10 duration-500 hover:bg-primary bg-[#F3E8D6] rounded-full flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6785 8.58827C17.5212 8.38709 13.7733 3.6604 9.00022 3.6604C4.22675 3.6604 0.478773 8.38709 0.321484 8.58827L0 8.99976L0.321484 9.41125C0.478773 9.61243 4.22675 14.3393 9.00022 14.3393C13.7733 14.3393 17.5212 9.61243 17.6785 9.41125L18 8.99976L17.6785 8.58827ZM9.00022 13.0028C5.64324 13.0028 2.71312 10.0963 1.72773 8.99998C2.71357 7.90341 5.64346 4.99736 9.00022 4.99736C12.3568 4.99736 15.2869 7.90364 16.2725 8.99998C15.2864 10.0965 12.3565 13.0028 9.00022 13.0028Z"
                  fill="#074E37"
                />
                <path
                  d="M8.9991 5.34314C6.98241 5.34314 5.3418 6.98353 5.3418 8.99999C5.3418 11.0169 6.98241 12.6575 8.9991 12.6575C11.0158 12.6575 12.6564 11.0169 12.6564 8.99999C12.6564 6.98353 11.0158 5.34314 8.9991 5.34314ZM8.9991 11.3206C7.7194 11.3206 6.67853 10.2795 6.67853 8.99977C6.67853 7.72052 7.7194 6.67965 8.9991 6.67965C10.2786 6.67965 11.3197 7.72052 11.3197 8.99977C11.3197 10.2795 10.2786 11.3206 8.9991 11.3206Z"
                  fill="#074E37"
                />
              </svg>
            </button>
          </li>
          <li className="group">
            <button className="w-10 h-10 duration-500 hover:bg-primary bg-[#F3E8D6] rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_115_500)">
                  <path
                    d="M12.8752 2.31563C11.3526 0.793433 8.87564 0.793433 7.35344 2.31563L6.99988 2.66899L6.64652 2.31563C5.12432 0.793227 2.64714 0.793227 1.12494 2.31563C-0.366352 3.80693 -0.376036 6.17079 1.10248 7.81434C2.451 9.31285 6.42813 12.5503 6.59687 12.6873C6.71143 12.7805 6.84927 12.8258 6.98628 12.8258C6.99081 12.8258 6.99535 12.8258 6.99967 12.8256C7.14143 12.8322 7.28421 12.7835 7.40247 12.6873C7.57122 12.5503 11.5488 9.31285 12.8977 7.81414C14.376 6.17079 14.3663 3.80693 12.8752 2.31563ZM11.9788 6.98731C10.9274 8.15533 8.03727 10.5643 6.99967 11.4192C5.96207 10.5645 3.07261 8.15575 2.02141 6.98752C0.989988 5.84113 0.980305 4.20849 1.99895 3.18985C2.51919 2.66981 3.20241 2.40959 3.88563 2.40959C4.56885 2.40959 5.25207 2.6696 5.77231 3.18985L6.54948 3.96702C6.64199 4.05953 6.75861 4.11475 6.881 4.13411C7.07961 4.17676 7.29513 4.12134 7.44966 3.96722L8.22724 3.18985C9.26793 2.14957 10.9607 2.14977 12.0008 3.18985C13.0195 4.20849 13.0098 5.84113 11.9788 6.98731Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_115_500">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div className="pt-8.5 pl-3 md:pl-5 pr-3 md:pr-8.25 pb-3.25">
        <h4 className="font-normal text-sm text-primary-gray">T-shirt</h4>
        <h2 className="truncate font-normal text-[15px] text-primary-black mt-0.5">
          {item?.title ||  "Men stylist T-shirt"}
        </h2>
        <div className="flex gap-2 items-center">
          <Rating style={{ maxWidth: 180 }} value={3} readOnly />
          <h6>35,780</h6>
        </div>
        <h3 className="text-primary text-lg font-normal mt-2.5">$30.99</h3>
      </div>
    </div>
  );
};

export default Product;
