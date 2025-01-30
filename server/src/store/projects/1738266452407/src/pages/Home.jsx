import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Camera Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg" alt="Camera" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Discover Our Collection</h2>
          <p className="text-gray-600 mb-4">
            Explore our wide range of professional cameras and accessories.
            Find the perfect equipment for your photography needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;