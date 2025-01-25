import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <div className='max-w-3xl mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-6'>{post.title}</h1>
      <img src={post.image} alt={post.title} className='w-full h-96 object-cover rounded-lg mb-6' />
      <div className='prose max-w-none'>
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;