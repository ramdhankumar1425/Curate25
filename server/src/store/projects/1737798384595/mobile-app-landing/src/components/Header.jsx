import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">AppName</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#faq" className="hover:text-blue-600">FAQ</a>
        </nav>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Download</button>
      </div>
    </header>
  );
};

export default Header;