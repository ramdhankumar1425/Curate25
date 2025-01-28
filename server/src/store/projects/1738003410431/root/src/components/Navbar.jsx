import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">CodeTech Institute</Link>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
              <Link to="/courses" className="hover:bg-blue-700 px-3 py-2 rounded">Courses</Link>
              <Link to="/faculty" className="hover:bg-blue-700 px-3 py-2 rounded">Faculty</Link>
              <Link to="/resources" className="hover:bg-blue-700 px-3 py-2 rounded">Resources</Link>
              <Link to="/testimonials" className="hover:bg-blue-700 px-3 py-2 rounded">Testimonials</Link>
              <Link to="/contact" className="hover:bg-blue-700 px-3 py-2 rounded">Contact</Link>
            </div>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
            <Link to="/courses" className="block hover:bg-blue-700 px-3 py-2 rounded">Courses</Link>
            <Link to="/faculty" className="block hover:bg-blue-700 px-3 py-2 rounded">Faculty</Link>
            <Link to="/resources" className="block hover:bg-blue-700 px-3 py-2 rounded">Resources</Link>
            <Link to="/testimonials" className="block hover:bg-blue-700 px-3 py-2 rounded">Testimonials</Link>
            <Link to="/contact" className="block hover:bg-blue-700 px-3 py-2 rounded">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar