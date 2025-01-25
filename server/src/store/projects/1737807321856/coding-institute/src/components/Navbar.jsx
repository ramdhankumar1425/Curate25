import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">CodeInstitute</Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/courses" className="hover:bg-blue-700 px-3 py-2 rounded-md">Courses</Link>
              <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">About</Link>
              <Link to="/testimonials" className="hover:bg-blue-700 px-3 py-2 rounded-md">Testimonials</Link>
              <Link to="/register" className="hover:bg-blue-700 px-3 py-2 rounded-md">Register</Link>
              <Link to="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md">Contact</Link>
              <Link to="/blog" className="hover:bg-blue-700 px-3 py-2 rounded-md">Blog</Link>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/courses" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Courses</Link>
            <Link to="/about" className="block hover:bg-blue-700 px-3 py-2 rounded-md">About</Link>
            <Link to="/testimonials" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Testimonials</Link>
            <Link to="/register" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Register</Link>
            <Link to="/contact" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Contact</Link>
            <Link to="/blog" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Blog</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar