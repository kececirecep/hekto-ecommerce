import React from 'react'
import BlogCard from '../../../components/BlogCard/BlogCard'

const LeatestBlog = () => {
  return (
    <div className='py-12'>
      <div className='container mx-auto'>
        <h2 className='text-sectionTitle fnt text-4xl font-bold text-center py-12'>Leatest Blog</h2>
        <BlogCard />
      </div>
    </div>
  )
}

export default LeatestBlog