import React from "react";
import Title from "../common/Title";
import Container from "../layout/Container";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import Product from "../common/Product";

const FeaturedProduct = () => {
  return (
    <section className="mt-24.25">
      <Container className="relative">
        <Title name="Featured Products" />

        <Tabs defaultValue="best-sellers">
          <div className="absolute top-2.75 right-0">
            <TabsList variant="line">
              <TabsTrigger
                className="after:w-[50%] after:left-0 px-0"
                value="best-sellers"
              >
                Best Sellers
              </TabsTrigger>

              <TabsTrigger
                className="after:w-[50%] after:left-0 px-0 ml-13.5"
                value="most-popular"
              >
                Most Popular
              </TabsTrigger>

              <TabsTrigger
                className="after:w-[50%] after:left-0 px-0 ml-13.5"
                value="top-20"
              >
                Top 20
              </TabsTrigger>

              <TabsTrigger
                className="after:w-[50%] after:left-0 px-0 ml-13.5"
                value="best-rated"
              >
                Best Rated
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="best-sellers">
            <Product />
          </TabsContent>

          <TabsContent value="most-popular">
            <p>some</p>
          </TabsContent>

          <TabsContent value="top-20">
            <p>something</p>
          </TabsContent>

          <TabsContent value="best-rated">
            <p>some impo</p>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};

export default FeaturedProduct;