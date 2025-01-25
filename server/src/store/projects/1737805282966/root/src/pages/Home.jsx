import React from 'react'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Latest Posts</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Home