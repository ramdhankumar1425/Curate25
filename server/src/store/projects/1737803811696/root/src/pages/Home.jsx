import React from 'react'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Home