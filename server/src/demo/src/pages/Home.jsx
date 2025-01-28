import React from 'react'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm Ramdhan Kumar
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Full Stack Developer specializing in MERN Stack
        </p>
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
          alt="Developer"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Home