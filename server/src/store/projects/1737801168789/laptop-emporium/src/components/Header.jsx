import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="text-2xl font-bold mb-4 md:mb-0">Laptop Emporium</Link>
        <nav className="flex flex-wrap gap-4">
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          <Link to="/account" className="hover:text-gray-300">Account</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header