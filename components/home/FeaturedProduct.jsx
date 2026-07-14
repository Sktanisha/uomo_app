import React from "react";
import Title from "../common/Title";
import Container from "../layout/Container";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Product from "../common/Product";

const FeaturedProduct = async() => {
const response = await fetch("https://dummyjson.com/products");
const data = await response.json();

const products = data.products;
  
  /* let data = await fetch("https://dummyjson.com/products");

console.log("status:", data.status);
console.log("content-type:", data.headers.get("content-type"));

let text = await data.text();
console.log(text); */
  return (
    <section className="mt-10 md:mt-24.25 mb-10 md:mb-24.25">
      <Container className="relative">
        <Title name="Featured Products" />
        <div className=" md:mt-8.75">
          <Tabs defaultValue="best-sellers">
            <div className="static md:absolute top-2.75 right-0 ">
              <TabsList className="flex-wrap" variant="line">
                <TabsTrigger
                  className="after:w-[50%] after:left-0 px-0 ml-1 md:ml-13.5 text-primary-gray"
                  value="best-sellers">
                  Best Sellers
                </TabsTrigger>
                <TabsTrigger
                  className="after:w-[50%] after:left-0 px-0 ml-1 md:ml-13.5 text-primary-gray"
                  value="most-popular">
                  Most Popular
                </TabsTrigger>
                <TabsTrigger
                  className="after:w-[50%] after:left-0 px-0 ml-1 md:ml-13.5 text-primary-gray"
                  value="top-20">
                  Top 20
                </TabsTrigger>
                <TabsTrigger
                  className="after:w-[50%] after:left-0 px-0 ml-1 md:ml-13.5 text-primary-gray"
                  value="best-rated"
                >
                  Best Rated
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="best-sellers">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-y-7.5">
                {Array.from({ length: 10 }).map((_, index) => (
                  <Product />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="most-popular">
             <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-y-7.5">
                {products?.map((item) => (
                  <Product  key={item.id} item={item}/>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="top-20">
              <div className=" grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-y-7.5">something</div>
            </TabsContent>
            <TabsContent value="best-rated">
              <div className=" grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-y-7.5">some impo</div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProduct;
