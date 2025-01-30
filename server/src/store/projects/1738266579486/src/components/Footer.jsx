import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold mb-4">Camera Commerce</h3>
          <p>Your trusted source for quality cameras and photography equipment.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
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