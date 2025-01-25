import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['Screenshot 1', 'Screenshot 2', 'Screenshot 3'];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto relative">
        <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-lg">
          <div className="relative h-64 bg-gray-200 rounded">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl">{slides[currentSlide]}</p>
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r">
              ←
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;