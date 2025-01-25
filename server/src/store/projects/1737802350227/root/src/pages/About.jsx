import React from 'react';

const About = () => {
  return (
    <div className='max-w-3xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>About Us</h1>
      <img src='https://images.unsplash.com/photo-1499750310107-5fef28a66643' alt='Author' className='w-full h-64 object-cover rounded-lg mb-6' />
      <p className='text-gray-700 leading-relaxed'>
        Welcome to our blog! We're passionate about sharing knowledge and insights about various topics.
        Our goal is to create engaging and informative content that helps our readers learn and grow.
      </p>
    </div>
  );
};

export default About;