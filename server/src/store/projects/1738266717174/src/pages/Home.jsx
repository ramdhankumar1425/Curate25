import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to CameraShop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32" alt="Camera" className="w-full h-48 object-cover rounded mb-4" />
          <h2 className="text-xl font-bold mb-2">Featured Products</h2>
          <p>Discover our latest collection of premium cameras.</p>
        </div>
        {/* Add more featured sections */}
      </div>
    </div>
  );
};

export default Home;