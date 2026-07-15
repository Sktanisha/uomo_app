import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SortAndView = () => {
  const items = [
    { label: "T-shirt", value: "T-shirt" },
    { label: "Sharee", value: "Sharee" },
    { label: "Punjabi", value: "Punjabi" },
  ];
  return (
    
    <div className='flex items-center gap-10'>
      <div>
        <Select>
                  <SelectTrigger className="w-full border-none font-medium text-primary-black uppercase ">
                    <SelectValue placeholder="Default sorting" />
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
      </div>
      <div>
        <ul className='flex items-center gap-4 '>
          <li>
            <button>VIEW</button>
          </li>
          <li>
            <button>2</button>
          </li>
          <li>
            <button>3</button>
          </li>
          <li>
            <button>4</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SortAndView
