import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <Link to='/' className='text-2xl font-bold text-gray-800'>Blog</Link>
          <div className='flex space-x-4'>
            <Link to='/' className='text-gray-600 hover:text-gray-800'>Home</Link>
            <Link to='/about' className='text-gray-600 hover:text-gray-800'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar