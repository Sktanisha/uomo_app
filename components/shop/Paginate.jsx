"use client";
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import Product from '../common/Product';
import { useProductView } from '../../store/useProductView';
const Paginate = ({ itemsPerPage,products }) => {
    const items = products;
    const {view} = useProductView();

function Items({ currentItems }) {
  return (
    <div style={{
        display:"grid",
        gridTemplateColumns:`repeat(${view},1fr)`,
        gap:"20px",
      }}>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <Product key={item.id} item={item}/>
          </div>
        ))}
    </div>  
  );
}
const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
     <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        className='flex items-center gap-4 justify-center mt-10'
        pageClassName='border border-primary-black px-4 py-2 rounded-md'
        activeClassName='bg-primary-black text-white'
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Paginate
