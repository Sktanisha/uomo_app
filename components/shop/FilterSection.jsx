"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 pb-8 mb-8">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center"
      >
        <h3 className="uppercase text-sm font-semibold tracking-wide">
          {title}
        </h3>

        <ChevronDown
          size={18}
          className={`transition ${
            open ? "" : "-rotate-90"
          }`}
        />
      </button>

      {open && (
        <div className="mt-6">
          {children}
        </div>
      )}

    </div>
  );
};

export default FilterSection;