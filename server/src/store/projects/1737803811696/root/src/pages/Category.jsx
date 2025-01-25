import React from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'

const Category = () => {
  const { category } = useParams()
  const filteredPosts = blogPosts.filter(post => post.category === category)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Category