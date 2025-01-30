import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
            alt="John Doe"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600 mb-6">
            I'm a passionate web developer with 5 years of experience in creating modern web applications.
            I specialize in React, Node.js, and full-stack development.
          </p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-600">Email: john.doe@example.com</p>
            <p className="text-gray-600">Location: New York, NY</p>
          </div>

          <a 
            href="#" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;