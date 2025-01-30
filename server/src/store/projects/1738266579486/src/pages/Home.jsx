import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="hero mb-12">
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Camera Commerce</h1>
          <p className="text-xl mb-6">Discover our wide range of professional cameras</p>
          <Link to="/products" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="featured-products mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured product cards would go here */}
          <div className="border rounded-lg p-4">
            <img src="https://source.unsplash.com/500x500/?camera" alt="Camera" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold">Professional DSLR</h3>
            <p className="text-gray-600">$999.99</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;