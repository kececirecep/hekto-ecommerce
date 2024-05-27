import React from 'react'
import BlogCard from '../../../components/BlogCard/BlogCard'

const LeatestBlog = () => {
  return (
    <div className='py-2'>
      <div className='container mx-auto'>
        <h2 className='text-sectionTitle fnt text-4xl font-bold text-center py-12'>Leatest Blog</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          <BlogCard /> 
          <BlogCard /> 
          <BlogCard /> 
        </div>
      </div>
    </div>
  )
}

export default LeatestBlog