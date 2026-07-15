import React from "react";
import Product from "../common/Product";

const AllProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  return (
    <div>
      <div className="grid grid-cols-3">
        {products?.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
