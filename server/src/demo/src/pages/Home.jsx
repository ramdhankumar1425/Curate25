import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="relative h-[500px]">
        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d" alt="Music Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">Welcome to Rockinox</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Ultimate Music Destination</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">Discover the finest collection of musical instruments and equipment at Rockinox.</p>
      </div>
    </div>
  );
};

export default Home;