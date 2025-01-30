import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">CameraHub</h3>
          <p className="text-gray-400">Your one-stop shop for professional cameras and accessories.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <form className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded bg-gray-700 text-white" />
            <button className="bg-blue-600 px-4 py-2 rounded">Subscribe</button>
          </form>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">IG</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        © 2024 CameraHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;