import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <img src={post.image} alt={post.title} className='w-full h-48 object-cover' />
      <div className='p-6'>
        <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
        <p className='text-gray-600 mb-4'>{post.excerpt}</p>
        <Link to={`/post/${post.id}`} className='text-blue-500 hover:text-blue-700'>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;