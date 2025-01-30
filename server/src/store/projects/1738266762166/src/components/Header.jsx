import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">CameraShop</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/products/dslr" className="hover:text-gray-300">DSLR</Link>
          <Link to="/products/mirrorless" className="hover:text-gray-300">Mirrorless</Link>
          <Link to="/products/accessories" className="hover:text-gray-300">Accessories</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <input type="search" placeholder="Search products..." className="px-4 py-1 rounded text-black" />
          <Link to="/cart" className="hover:text-gray-300">Cart (0)</Link>
        </div>
      </div>
    </header>
  )
}

export default Header