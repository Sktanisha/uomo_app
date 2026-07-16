import React from 'react';
import Container from '../layout/Container';
import ShopBreadcrumb from "@/components/shop/ShopBreadcrumb";
import SortAndView from '@/components/shop//SortAndView';
import AllProducts from '@/components/shop//AllProducts';
import ProductSidebar from './ProductSidebar ';
const ShopLayout = () => {
  return (
<Container className="flex gap-25 mt-16">
      <aside className="w-75 shrink-0">
        <ProductSidebar/>
      </aside>
      <div className='w-full mt-9.5'>
        <div className='flex items-center justify-between mb-5'>
        <ShopBreadcrumb/>
        <SortAndView/>
        </div>
        <AllProducts/>
        
      </div>
    </Container>
  )
    
  
}

export default ShopLayout;
