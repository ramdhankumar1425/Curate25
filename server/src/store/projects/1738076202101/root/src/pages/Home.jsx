import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to CameraShop</h1>
        <p className="text-xl text-gray-600">Discover the perfect camera for your needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Latest Products</h2>
          <Link to="/products" className="text-blue-600 hover:underline">View all products</Link>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
          <p>Check out our latest deals and discounts</p>
        </div>
      </div>
    </div>
  );
};

export default Home;