import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/products" className="hover:text-gray-300">Products</Link>
            <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>123 Camera Street</p>
          <p>Photo City, PC 12345</p>
          <p>Email: info@camerastore.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;