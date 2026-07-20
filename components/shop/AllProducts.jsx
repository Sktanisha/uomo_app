"use client";
import React, { useEffect } from "react";
import Product from "../common/Product";
//import { useProductView } from "../../store/useProductView";
import Paginate from "./Paginate";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "../../store/useProduct";
const AllProducts = () => {
  const [products, setProducts] = React.useState([]);
  //const { view } = useProductView();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {

      }finally{
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {/* <div style={{
        display:"grid",
        gridTemplateColumns:`repeat(${view},1fr)`,
        gap:"20px",
      }}
      >
        {products?.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div> */}
      {loading ? (
        <div className="grid grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="w-full max-w-xs">
              <CardContent>
                <Skeleton className="aspect-video w-full" />
              </CardContent>

              <CardHeader>
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        <Paginate itemsPerPage={8} products={products} />
      )}
    </div>
  );
};

export default AllProducts;
