import React from "react";
import Container from "../layout/Container";
import Title from "../common/Title";
import Product from "../common/Product";
import TopSellingCard from "./TopSellingCard";

const TopSellingProduct = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=10");
  const data = await response.json();

  const products = data.products;
  return (
    <section className="mt-22.75 ">
      <Container>
        <div className="flex items-center justify-between mb-8.75">
          <Title name="Top Selling Product" />
          <div>
            <button
              className="font-medium text-sm text-primary-black leading-6 relative after:content-[''] 
                after:w-24  duration-500 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0"
            >
              See ALL Product
            </button>
          </div>
        </div>
        <TopSellingCard products={products}/>
      </Container>
    </section>
  );
};

export default TopSellingProduct;
