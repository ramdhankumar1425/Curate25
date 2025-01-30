import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">FitLife Pro</Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-gray-300 px-3 py-2">Home</Link>
              <Link to="/services" className="hover:text-gray-300 px-3 py-2">Services</Link>
              <Link to="/testimonials" className="hover:text-gray-300 px-3 py-2">Testimonials</Link>
              <Link to="/schedule" className="hover:text-gray-300 px-3 py-2">Schedule</Link>
              <Link to="/pricing" className="hover:text-gray-300 px-3 py-2">Pricing</Link>
              <Link to="/free-trial" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">Free Trial</Link>
            </div>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block hover:text-gray-300 px-3 py-2">Home</Link>
            <Link to="/services" className="block hover:text-gray-300 px-3 py-2">Services</Link>
            <Link to="/testimonials" className="block hover:text-gray-300 px-3 py-2">Testimonials</Link>
            <Link to="/schedule" className="block hover:text-gray-300 px-3 py-2">Schedule</Link>
            <Link to="/pricing" className="block hover:text-gray-300 px-3 py-2">Pricing</Link>
            <Link to="/free-trial" className="block bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">Free Trial</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar