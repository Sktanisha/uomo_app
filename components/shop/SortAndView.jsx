"use client";
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useProductView} from '../../store/useProductView';
const SortAndView = () => {
  const {setView}= useProductView();
  const handleView = (view)=>{
    setView(view);
  }
  const items = [
    { label: "T-shirt", value: "T-shirt" },
    { label: "Sharee", value: "Sharee" },
    { label: "Punjabi", value: "Punjabi" },
  ];
  const View =[2,3,4];
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
          
            {
              View.map((item)=>(
                <li key={item}>
                  <button className='cursor-pointer' onClick={()=>handleView(item)}>{item}</button>
                </li>
              ))
            }
            
          
          
        </ul>
      </div>
    </div>
  )
}

export default SortAndView
