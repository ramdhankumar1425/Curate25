import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">CameraShop</h3>
          <p>Your trusted source for professional cameras and accessories.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/shipping" className="hover:text-gray-300">Shipping Info</Link></li>
            <li><Link to="/returns" className="hover:text-gray-300">Return Policy</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer