import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Learn Coding with Industry Experts</h1>
        <p className="text-xl text-gray-600 mb-8">Start your journey to becoming a professional developer today</p>
        <Link to="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Explore Courses</Link>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Expert Instructors</h3>
          <p className="text-gray-600">Learn from industry professionals with years of experience</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Practical Projects</h3>
          <p className="text-gray-600">Build real-world applications as you learn</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Job Ready Skills</h3>
          <p className="text-gray-600">Get the skills employers are looking for</p>
        </div>
      </div>
    </div>
  )
}

export default Home