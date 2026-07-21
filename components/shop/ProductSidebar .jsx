"use client";

import FilterSection from "./FilterSection";
import { brands, categories, colors, sizes } from "./filterData";
import { Search } from "lucide-react";
import { useProduct } from "../../store/useProduct";
const ProductSidebar = () => {
  const { product, selectedCategory, setSelectedCategory,maxPrice,
  setMaxPrice, } = useProduct();
  const categories = [...new Set(product.map((item) => item.category))];

  return (
    <div>
      {/* Categories */}
      <FilterSection title="Product Categories">
        {/* <ul className="space-y-3">

          {categories.map((category) => (
            <li
              key={category}
              className="text-sm text-gray-600 hover:text-black cursor-pointer">
              {category}
            </li>
          ))}
        </ul> */}

        <ul className="space-y-3">
          <li
            onClick={() => setSelectedCategory("all")}
            className={`cursor-pointer ${
              selectedCategory === "all"
                ? "font-semibold text-black"
                : "text-gray-600"
            }`}
          >
            All Products
          </li>

          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer capitalize ${
                selectedCategory === category
                  ? "font-semibold text-black"
                  : "text-gray-600"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </FilterSection>

      {/* Colors */}
      <FilterSection title="Color">
        <div className="flex flex-wrap gap-4">
          {colors.map((color) => (
            <button
              key={color}
              className="w-5 h-5 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </FilterSection>

      {/* Sizes */}
      <FilterSection title="Sizes">
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              className="w-12 h-10 border text-sm hover:bg-black hover:text-white transition"
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brands">
        <div className="relative mb-6">
          <input
            placeholder="Search"
            className="w-full border h-11 pl-4 pr-10 outline-none"
          />
          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
        <div className="space-y-4">
          {brands.map((brand) => (
            <label
              key={brand.name}
              className="flex justify-between items-center cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span className="text-sm text-gray-600">{brand.name}</span>
              </div>
              <span className="text-sm text-gray-400">{brand.count}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price */}
      <FilterSection title="Price">

  <input
    type="range"
    min="0"
    max="2000"
    step="10"
    value={maxPrice}
    onChange={(e) => setMaxPrice(e.target.value)}
    className="w-full"
  />

  <div className="flex justify-between mt-4 text-sm">
    <span>$0</span>
    <span className="font-medium">
      Up to ${maxPrice}
    </span>
  </div>

</FilterSection>
    </div>
  );
};

export default ProductSidebar;
