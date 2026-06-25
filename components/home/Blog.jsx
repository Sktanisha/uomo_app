import React from 'react'
import Container from '../layout/Container'
import Title from '../common/Title'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <section className='bg-[#F7F5EE] pt-22.75 pb-25.5 mt-25'  >
      <Container>
        <div className="flex items-center justify-between mb-8.75">
          <Title name="latest in blog" />
          <div>
            <button
              className="font-medium text-sm text-primary-black leading-6 relative after:content-[''] 
                after:w-24  duration-500 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0"
            >
              See ALL Blog
            </button>
          </div>
        </div>
        {
            <div className='grid grid-cols-4 gap-7.5 '>
                {Array.from({length:4}).map((_,index)=>(
                    <BlogCard key={index}/>
                ))

                }
            </div>
        }
      </Container>
    </section>
  )
}

export default Blog
