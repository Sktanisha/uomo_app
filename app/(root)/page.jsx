import React from 'react'
import Content from '../../components/home/Content'
import Banner from '../../components/home/Banner'
import FeaturedProduct from '../../components/home/FeaturedProduct'
import Category from '../../components/home/Category'
import TopSellingProduct from '../../components/home/TopSellingProduct'
import Discount from '../../components/home/Discount'
import Blog from '../../components/home/Blog'

const page = () => {
  return (
    <main>
      <Banner/>
      <Content/>
      <FeaturedProduct/>
      <Category/>
      <TopSellingProduct/>
      <Discount/>
      <Blog/>
    </main>
  )
}

export default page
