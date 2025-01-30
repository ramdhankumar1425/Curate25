import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to CameraHub</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover our extensive collection of professional cameras and photography equipment.</p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32" alt="Camera" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">DSLR Cameras</h3>
          <p className="text-gray-600">Professional grade cameras for stunning photography</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <img src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c" alt="Camera" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mirrorless Cameras</h3>
          <p className="text-gray-600">Compact and powerful cameras for versatile shooting</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <img src="https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6" alt="Camera" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">Action Cameras</h3>
          <p className="text-gray-600">Rugged cameras for adventure photography</p>
        </div>
      </section>
    </div>
  );
};

export default Home;