"use client";
import React, { useEffect } from "react";
import Product from "../common/Product";
import { useProductView } from "../../store/useProductView";
import Paginate from "./Paginate";

const AllProducts = () => {
  const [products, setProducts] = React.useState([]);
  const { view } = useProductView();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const products = data.products;
        setProducts(products);
      } catch (error) {}
    };
    fetchProducts();
  },[]);

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
      <Paginate itemsPerPage={4} products={products}/>
    </div>
  );
};

export default AllProducts;
