import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Your App's Journey Starts Here</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Experience the future of mobile innovation with our revolutionary app.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
            Download for iOS
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Download for Android
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;