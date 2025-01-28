import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn Coding from Industry Experts</h1>
            <p className="text-xl mb-8">Master Software Development, DSA, and Modern Technologies</p>
            <Link to="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-4">Learn full-stack web development with modern technologies.</p>
              <Link to="/courses" className="text-blue-600 hover:underline">Learn more →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Data Structures & Algorithms</h3>
              <p className="text-gray-600 mb-4">Master DSA concepts with practical problem-solving.</p>
              <Link to="/courses" className="text-blue-600 hover:underline">Learn more →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Mobile App Development</h3>
              <p className="text-gray-600 mb-4">Build iOS and Android apps with React Native.</p>
              <Link to="/courses" className="text-blue-600 hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;