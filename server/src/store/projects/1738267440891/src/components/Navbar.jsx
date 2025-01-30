import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">John Doe</Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-gray-900">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;