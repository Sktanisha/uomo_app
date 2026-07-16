"use client";

import FilterSection from "./FilterSection";

import {
  brands,
  categories,
  colors,
  sizes,
} from "./filterData";

import { Search } from "lucide-react";

const ProductSidebar = () => {
  return (
    <div>

      {/* Categories */}

      <FilterSection title="Product Categories">

        <ul className="space-y-3">

          {categories.map((item) => (
            <li
              key={item}
              className="text-sm text-gray-600 hover:text-black cursor-pointer"
            >
              {item}
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

                <span className="text-sm text-gray-600">
                  {brand.name}
                </span>

              </div>

              <span className="text-sm text-gray-400">
                {brand.count}
              </span>

            </label>

          ))}

        </div>

      </FilterSection>

      {/* Price */}

      <FilterSection title="Price">

        <input
          type="range"
          min={129}
          max={499}
          className="w-full"
        />

        <div className="flex justify-between mt-4 text-xs text-gray-500">

          <span>Min Price: $129</span>

          <span>Max Price: $499</span>

        </div>

      </FilterSection>

    </div>
  );
};

export default ProductSidebar;