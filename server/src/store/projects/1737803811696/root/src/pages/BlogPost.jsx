import React from 'react'
import { useParams } from 'react-router-dom'
import CommentSection from '../components/CommentSection'
import { blogPosts } from '../data/blogPosts'

const BlogPost = () => {
  const { id } = useParams()
  const post = blogPosts.find(post => post.id === parseInt(id))

  if (!post) return <div>Post not found</div>

  return (
    <article className="max-w-3xl mx-auto">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-6 mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-4">
        <span>{post.author}</span> • <span>{post.date}</span>
      </div>
      <div className="prose max-w-none mb-8">{post.content}</div>
      <CommentSection />
    </article>
  )
}

export default BlogPost