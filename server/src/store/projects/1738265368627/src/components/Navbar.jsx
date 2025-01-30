import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Mobile Store</Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/faq" className="hover:text-gray-300">FAQ</Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 hover:bg-gray-700 rounded">Home</Link>
            <Link to="/products" className="block px-3 py-2 hover:bg-gray-700 rounded">Products</Link>
            <Link to="/cart" className="block px-3 py-2 hover:bg-gray-700 rounded">Cart</Link>
            <Link to="/contact" className="block px-3 py-2 hover:bg-gray-700 rounded">Contact</Link>
            <Link to="/faq" className="block px-3 py-2 hover:bg-gray-700 rounded">FAQ</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;