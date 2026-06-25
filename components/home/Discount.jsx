
import React from "react";
import Container from "../layout/Container";
import Title from "../common/Title";
import DiscountProduct from "./DiscountProduct";

const Discount = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=10");
  const data = await response.json();

  const products = data.products;
  return (
    <section className=" mb-25">
      <Container>
        <Title name="discount" />
        <div className="mt-8.5 gap-8 flex">
          <div className="w-63.75 h-89 bg-primary flex flex-col justify-center rounded-sm text-center">
            <h2 className="text-[35px] font-bold text-white"> $20</h2>
            <h3 className="text-white text-[26px] font-normal">Under Products</h3>
            <h4 className="text-white text-sm font-normal">Limited Time Only</h4>
          </div>
          <DiscountProduct products={products}/>
        </div>
      </Container>
    </section>
  );
};

export default Discount;
