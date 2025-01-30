import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Capture Moments</h1>
        <p className="text-xl">Your one-stop shop for professional cameras and accessories</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Latest Cameras</h2>
          <img src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg" alt="Camera" className="w-full h-48 object-cover rounded-lg mb-4" />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Accessories</h2>
          <img src="https://images.pexels.com/photos/226243/pexels-photo-226243.jpeg" alt="Accessories" className="w-full h-48 object-cover rounded-lg mb-4" />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
          <img src="https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg" alt="Offers" className="w-full h-48 object-cover rounded-lg mb-4" />
        </div>
      </section>
    </div>
  );
};

export default Home;