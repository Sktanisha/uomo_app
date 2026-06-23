import React from 'react'
import Content from '../../components/home/Content'
import Banner from '../../components/home/Banner'
import FeaturedProduct from '../../components/home/FeaturedProduct'

const page = () => {
  return (
    <main>
      <Banner/>
      <Content/>
      <FeaturedProduct/>
    </main>
  )
}

export default page
