import React from 'react';

const BottomCTA = () => {
  return (
    <div className="bg-blue-600 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Download now and join millions of satisfied users!</p>
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

export default BottomCTA;