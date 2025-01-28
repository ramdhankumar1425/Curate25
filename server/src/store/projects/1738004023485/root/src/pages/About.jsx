import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-700 mb-6">
            CodeTech Institute is a premier coding education center dedicated to transforming aspiring developers into industry-ready professionals.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to provide high-quality, practical coding education that prepares students for real-world challenges in software development.
          </p>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Industry-experienced instructors</li>
            <li>Practical, hands-on learning</li>
            <li>Modern curriculum aligned with industry needs</li>
            <li>Small batch sizes for personalized attention</li>
            <li>Career guidance and placement support</li>
          </ul>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
            alt="Team collaboration" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;