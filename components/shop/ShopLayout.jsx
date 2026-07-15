import React from 'react';
import Container from '../layout/Container';
import ShopBreadcrumb from "@/components/shop/ShopBreadcrumb";
import SortAndView from '@/components/shop//SortAndView';
import AllProducts from '@/components/shop//AllProducts';
const ShopLayout = () => {
  return (
<Container className="flex">
      <aside className='w-75 '>
        sidebar
      </aside>
      <div className='w-full'>
        <div className='flex items-center justify-between'>
        <ShopBreadcrumb/>
        <SortAndView/>
        </div>
        <AllProducts/>
        
      </div>
    </Container>
  )
    
  
}

export default ShopLayout;
