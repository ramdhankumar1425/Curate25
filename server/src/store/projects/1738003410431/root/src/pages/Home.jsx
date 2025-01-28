import React from 'react'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to CodeTech Institute</h1>
        <p className="text-xl text-gray-600">Empowering the next generation of tech innovators</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
          <p className="text-gray-600">Learn from industry professionals with years of experience</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Practical Learning</h3>
          <p className="text-gray-600">Hands-on projects and real-world applications</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Career Support</h3>
          <p className="text-gray-600">Job placement assistance and career guidance</p>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          To provide high-quality technical education that prepares students for successful careers in software development
          and technology, fostering innovation and excellence in the digital age.
        </p>
      </div>
    </div>
  )
}

export default Home