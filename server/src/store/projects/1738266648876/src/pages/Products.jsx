import React from 'react';

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6).fill().map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`https://source.unsplash.com/random/400x300?camera&${index}`} alt="Product" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Camera Model {index + 1}</h2>
              <p className="text-gray-600 mb-4">High-quality camera with advanced features</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">$999.99</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;