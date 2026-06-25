import React from 'react'
import Content from '../../components/home/Content'
import Banner from '../../components/home/Banner'
import FeaturedProduct from '../../components/home/FeaturedProduct'
import Category from '../../components/home/Category'
import TopSellingProduct from '../../components/home/TopSellingProduct'

const page = () => {
  return (
    <main>
      <Banner/>
      <Content/>
      <FeaturedProduct/>
      <Category/>
      <TopSellingProduct/>
    </main>
  )
}

export default page
