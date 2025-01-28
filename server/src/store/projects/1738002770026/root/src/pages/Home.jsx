import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn Coding with Excellence</h1>
            <p className="text-xl mb-8">Master software development, DSA, and more with industry experts</p>
            <Link to="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Software Development</h3>
              <p>Comprehensive courses in modern programming languages and frameworks.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Data Structures & Algorithms</h3>
              <p>Master problem-solving skills with our intensive DSA program.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Industry Projects</h3>
              <p>Work on real-world projects with experienced mentors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home