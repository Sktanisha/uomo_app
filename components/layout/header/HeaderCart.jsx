"use client";
import { useState } from "react";
import Image from "next/image";
import { Handbag, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

//44:33
const HeaderCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Zara Orsams",
      color: "Yellow",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/images/product1.png",
    },
    {
      id: 2,
      name: "Kiity T-Shirt",
      color: "Yellow",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/images/product2.png",
    },
    {
      id: 3,
      name: "Calabash Short",
      color: "Yellow",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/images/product3.png",
    },
  ]);
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <Sheet>
      <SheetTrigger
        render={
          <button className="relative">
          <Handbag size={20} color="white" />
          <span className="absolute -right-2.5 -bottom-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white">
            {cartItems.length}
          </span>
        </button>
        }
        />
      

      <SheetContent side="right" className="w-95 p-0">
        <div className="border-b px-6 py-5">
          <h2 className="text-base font-medium">
            SHOPPING BAG ({cartItems.length})
          </h2>
        </div>

        <div className="h-[70vh] overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 px-6 py-5 border-b">
              <Image
                src={item.image}
                alt={item.name}
                width={90}
                height={90}
                className="border"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-base font-normal  text-primary-black text-[15px]">
                    {item.name}
                  </h3>

                  <button onClick={() => removeItem(item.id)}>
                    <X size={18} />
                  </button>
                </div>

                <p className="text-sm text-primary-gray mt-2">
                  Color : {item.color}
                </p>

                <p className="text-sm text-primary-gray">Size : {item.size}</p>

                <div className="flex justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <button>-</button>

                    <span>{item.quantity}</span>

                    <button>+</button>
                  </div>

                  <span className="font-medium">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-6">
          <div className="flex justify-between mb-6">
            <span className="font-medium">SUBTOTAL:</span>

            <span className="font-semibold">
              $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0,
              )}
            </span>
          </div>

          <button className="w-full h-12 bg-gray-100 mb-3 font-medium">
            VIEW CART
          </button>

          <button className="w-full h-12 bg-black text-white font-medium">
            CHECKOUT
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderCart;
