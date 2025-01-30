import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Mobile Store</h3>
          <p className="text-gray-300">Your one-stop shop for all mobile phones</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-gray-300 hover:text-white">Home</Link>
            <Link to="/products" className="block text-gray-300 hover:text-white">Products</Link>
            <Link to="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="text-gray-300 space-y-2">
            <p>Email: info@mobilestore.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Store Street, City, Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;