import React from 'react';

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-4">Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Brand</label>
              <select className="w-full p-2 rounded">
                <option>All Brands</option>
                <option>Canon</option>
                <option>Nikon</option>
                <option>Sony</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Price Range</label>
              <select className="w-full p-2 rounded">
                <option>All Prices</option>
                <option>$0 - $500</option>
                <option>$501 - $1000</option>
                <option>$1001+</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sample Product Cards */}
          {[1,2,3,4,5,6].map(item => (
            <div key={item} className="bg-white p-4 rounded shadow">
              <img src={`https://source.unsplash.com/400x300/?camera&sig=${item}`} alt="Camera" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-semibold mb-2">Camera Model {item}</h3>
              <p className="text-gray-600 mb-4">Professional DSLR Camera</p>
              <p className="text-blue-600 font-bold">$999</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;