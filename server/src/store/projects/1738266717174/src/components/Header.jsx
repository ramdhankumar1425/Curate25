import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="text-2xl font-bold">CameraShop</Link>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
            <li><Link to="/cart" className="hover:text-gray-300">Cart</Link></li>
          </ul>
        </nav>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;