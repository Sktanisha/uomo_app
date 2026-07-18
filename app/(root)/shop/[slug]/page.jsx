"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Share2,
  Minus,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ShopBreadcrumb from "@/components/shop/ShopBreadcrumb";
import {useParams} from "next/navigation";
export default function Page() {
  const images = [
    "/images/products/productImg1.jpg",
    "/images/products/productImg2.jpg",
    "/images/products/productImg3.jpg",
    "/images/products/productImg4.jpg",
  ];



  const colors = ["#111111", "#7E2D2D", "#D9D9D9"];

  const sizes = ["XS", "S", "M", "L", "XL"];

  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeSize, setActiveSize] = useState("L");
  const [activeColor, setActiveColor] = useState(colors[1]);
  const [quantity, setQuantity] = useState(1);

  const {slug} = useParams();
  const [product, setProduct] = useState(null);


  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${slug}`)
    .then((res)=>res.json())
    .then((data)=>setProduct(data))
    .catch((error)=>console.error(error));
  },[slug]);

  return (
    <main className="max-w-350 mx-auto px-5 lg:px-10 py-12">
      {/* Breadcrumb */}

      <div className="flex items-center justify-between text-sm mb-10">
        <div className="flex items-center gap-2">

        <ShopBreadcrumb/>
          {/* <Link href="/">HOME</Link>

          <span>/</span>

          <span>THE SHOP</span> */}
          
        </div>

        <div className="flex gap-6 uppercase text-xs">
          <button className="flex items-center gap-1">
            <ChevronLeft size={14} />
            Prev
          </button>

          <button className="flex items-center gap-1">
            Next
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* LEFT */}

        {/* LEFT */}

        <div className="flex gap-6 w-full">
          {/* Thumbnails */}

          <div className="flex flex-col gap-4 shrink-0">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setActiveImage(img)}
                className={`w-24 h-24 overflow-hidden rounded border transition
        ${activeImage === img ? "border-black" : "border-gray-200"}`}
              >
                <Image
                  src={img}
                  alt=""
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}

          <div className="relative flex-1 h-175 bg-[#F8F8F8] rounded">
            <Image
              src={activeImage}
              alt="product"
              fill
              className="object-contain p-12"
              priority
            />
          </div>
        </div>
        {/* RIGHT */}

        <div>
          <h1 className="text-4xl font-bold text-primary-black">
            Lightweight Puffer Jacket With a Hood
          </h1>

          <p className="text-3xl font-semibold mt-4">$249</p>

          <p className="mt-6 text-primary-gray leading-8">
            Cut from a quilted, water-resistant shell and filled with a
            lightweight synthetic insulation, this jacket layers easily without
            adding bulk. An attached hood, ribbed cuffs and a two-way front zip
            keep it practical from commute to weekend.
          </p>

          {/* Sizes */}

          <div className="mt-10 flex items-center justify-between">
            <h4 className="uppercase text-sm font-semibold">Sizes</h4>

            <button className="text-xs underline uppercase">Size Guide</button>
          </div>

          <div className="flex gap-3 mt-5">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`w-12 h-12 border transition
                  ${
                    activeSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-black"
                  }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Colors */}

          <div className="mt-10">
            <h4 className="uppercase text-sm font-semibold mb-5">Color</h4>

            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setActiveColor(color)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                    ${
                      activeColor === color
                        ? "border-black"
                        : "border-transparent"
                    }`}
                >
                  <span
                    className="w-5 h-5 rounded-full"
                    style={{
                      background: color,
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add To Cart */}

          <div className="flex gap-4 mt-10">
            <div className="border flex items-center">
              <button
                className="w-12 h-12 flex items-center justify-center"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                <Minus size={18} />
              </button>

              <span className="w-12 text-center">{quantity}</span>

              <button
                className="w-12 h-12 flex items-center justify-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={18} />
              </button>
            </div>

            <button className="flex-1 bg-black text-white uppercase font-medium hover:bg-primary transition">
              Add To Cart
            </button>
          </div>

          {/* Wishlist & Share */}

          <div className="flex gap-8 mt-8">
            <button className="flex items-center gap-2 hover:text-primary transition">
              <Heart size={18} />
              ADD TO WISHLIST
            </button>

            <button className="flex items-center gap-2 hover:text-primary transition">
              <Share2 size={18} />
              SHARE
            </button>
          </div>

          {/* Divider */}

          <div className="border-t my-10"></div>

          {/* Product Meta */}

          <div className="space-y-3 text-sm leading-7">
            <p>
              <span className="font-semibold uppercase">SKU:</span> N/A
            </p>

            <p>
              <span className="font-semibold uppercase">Categories:</span>{" "}
              Casual & Urban Wear, Jackets, Men
            </p>

            <p>
              <span className="font-semibold uppercase">Tags:</span> biker,
              black, bomber, leather
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
