import React from 'react';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>123 Camera Street</p>
          <p>Photo City, PC 12345</p>
          <p>Email: info@camerashop.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="/shipping" className="hover:text-gray-300">Shipping Info</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;