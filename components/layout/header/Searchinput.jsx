import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";
import { useProduct } from "../../../store/useProduct";
import { useRouter } from "next/navigation";
const Searchinput = ({ className }) => {
  const router = useRouter();
  const [searchProducts, setSearchProducts] = useState([]);
  const { product } = useProduct();
  const items = [
    { label: "T-shirt", value: "T-shirt" },
    { label: "Sharee", value: "Sharee" },
    { label: "Punjabi", value: "Punjabi" },
  ];
  const handleSearch = (e) => {
    const value = e.target.value;
    /* let searchProduct = products.filter((product)=> 
      product.title.toLowerCase().includes(e.target.value.toLowerCase()),
  ); */
    const searchProduct = product.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    if (!value.trim()) {
      setSearchProducts([]);
      return;
    }

    const filtered = product.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchProducts(filtered);
  };
  return (
    <div className={`relative flex h-12 w-full items-center ${className}`}>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search products..."
        className="h-full w-full rounded-sm bg-white pl-4 pr-36 text-sm outline-none"
      />

      <div className="absolute right-3 flex items-center gap-3">
        <Select>
          <SelectTrigger className="w-full border-none shadow-none">
            <SelectValue placeholder="All Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <button>
          <Search size={20} />
        </button>
      </div>

      {searchProducts.length > 0 && (
  <div className="absolute top-13left-0 z-50 max-h-80 w-full overflow-y-auto rounded-md border bg-white shadow-lg">

    {searchProducts.map((item) => (
      <div
        key={item.id}
        onClick={() => {
          router.push(`/shop/${item.id}`);
          setSearchProducts([]);
        }}
        className="cursor-pointer border-b px-4 py-3 transition hover:bg-gray-100"
      >
        <p className="font-medium">{item.title}</p>

        <p className="text-sm text-gray-500">
          ${item.price}
        </p>
      </div>
    ))}

  </div>
)}
    </div>
  );
};

export default Searchinput;
