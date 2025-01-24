import React, { useState } from 'react';

const Screenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenshots = [
    'Screen 1', 'Screen 2', 'Screen 3', 'Screen 4'
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">App Screenshots</h2>
        <div className="relative">
          <div className="flex justify-center items-center">
            <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))} className="p-2">
              ←
            </button>
            <div className="mx-4 text-center">{screenshots[currentSlide]}</div>
            <button onClick={() => setCurrentSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))} className="p-2">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screenshots;