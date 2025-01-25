import React from 'react'

const About = () => {
  return (
    <div className='max-w-3xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>About Us</h1>
      <img src='https://images.unsplash.com/photo-1499750310107-5fef28a66643' alt='About Us' className='w-full h-64 object-cover rounded-lg mb-6' />
      <p className='text-gray-700 leading-relaxed mb-4'>
        Welcome to our blog! We are passionate about sharing knowledge and insights about various topics.
      </p>
      <p className='text-gray-700 leading-relaxed'>
        Our mission is to provide valuable content that educates and inspires our readers.
      </p>
    </div>
  )
}

export default About