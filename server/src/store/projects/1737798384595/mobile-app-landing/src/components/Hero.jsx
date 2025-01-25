import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Mobile Experience</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Experience the future of mobile apps with our innovative solution</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100">iOS Download</button>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100">Android Download</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;