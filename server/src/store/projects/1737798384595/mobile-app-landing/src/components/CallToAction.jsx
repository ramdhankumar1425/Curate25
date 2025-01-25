import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100">Download for iOS</button>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100">Download for Android</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;