import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="text-2xl font-bold mb-4 md:mb-0">Camera Store</Link>
        <nav className="flex flex-col md:flex-row items-center gap-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
          <div className="relative">
            <input type="text" placeholder="Search..." className="px-4 py-2 rounded-full text-black" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;