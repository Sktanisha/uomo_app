import React from "react";
import Container from "../layout/Container";
import Title from "../common/Title";
import CategoryItem from "./CategoryItem";
const Category = () => {
  return (
    <section className="bg-[#F7F5EE] pt-10 md:pt-25 md:pb-23.75 ">
      <Container>
        <div className="flex flex-wrap gap-y-3 md:gap-y-0 md:flex-nowrap items-center justify-between">
          <Title name="Shop By Category" />
          <div>
            <button
              className="font-medium text-sm text-primary-black leading-6 relative after:content-[''] 
                after:w-24  duration-500 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0"
            >
              SHOP ALL CATEGORIES
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-0 justify-between mt-10">
            {
            Array.from({length:5}).map((_,index)=>(
            <CategoryItem key={index}/> 
            ))
        }
        </div>
        
      </Container>
    </section>
  );
};

export default Category;
