import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from 'lucide-react';
const Searchinput = () => {
  const items = [
    { label: "T-shirt", value: "T-shirt" },
    { label: "Sharee", value: "Sharee" },
    { label: "Punjabi", value: "Punjabi" },
  ];
  return (
    <div className="w-136 h-12.5 relative flex items-center">
      <input
        className="w-full h-full rounded-sm pl-5 bg-white"
        type="text"
        placeholder="Search products.."
      />
      <div className="absolute right-4 flex gap-4.25  items-center">
        <Select>
          <SelectTrigger className="w-25 border-none">
            <span className="text-sm font-normal leading-6  text-primary-black">
            <SelectValue  placeholder="All Category" />
            </span>
            
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
         <Search />
       </button>
      </div>
       
    </div>
  );
};

export default Searchinput;
