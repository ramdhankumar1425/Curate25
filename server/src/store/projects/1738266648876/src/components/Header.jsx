import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Capture Moments</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
            <li><Link to="/checkout" className="hover:text-gray-300">Checkout</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;