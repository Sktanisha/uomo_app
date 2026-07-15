import React from 'react';
import Container from '../layout/Container';
import ShopBreadcrumb from "@/components/shop/ShopBreadcrumb";
const ShopLayout = () => {
  return (
<Container className="flex">
      <aside className='w-75 '>
        sidebar
      </aside>
      <div className='w-full'>
        <ShopBreadcrumb/>
      </div>
    </Container>
  )
    
  
}

export default ShopLayout;
