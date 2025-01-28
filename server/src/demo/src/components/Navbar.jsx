import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">RK</Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="px-3 py-2 text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/projects" className="px-3 py-2 text-gray-600 hover:text-gray-900">Projects</Link>
            <Link to="/contact" className="px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar