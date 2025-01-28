import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">About Rockinox</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">Founded in 2010, Rockinox has been serving musicians with premium quality instruments and exceptional service.</p>
        <p className="text-lg mb-6">Our mission is to inspire and enable musicians of all levels to achieve their musical dreams through access to the finest instruments and equipment.</p>
        <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae" alt="Store" className="w-full rounded-lg mb-6" />
      </div>
    </div>
  );
};

export default About;