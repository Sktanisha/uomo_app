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

const Searchinput = () => {
  const items = [
    { label: "T-shirt", value: "T-shirt" },
    { label: "Sharee", value: "Sharee" },
    { label: "Punjabi", value: "Punjabi" },
  ];

  return (
    <div className="relative flex h-12 w-full items-center">
      <input
        type="text"
        placeholder="Search products..."
        className="h-full w-full rounded-sm bg-white pl-4 pr-36 text-sm outline-none"
      />

      <div className="absolute right-3 flex items-center gap-3">

        <Select>
          <SelectTrigger className="w-24 border-none shadow-none">
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
    </div>
  );
};

export default Searchinput;