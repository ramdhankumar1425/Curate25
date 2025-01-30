import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Professional DSLR',
      price: 999.99,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg'
    },
    {
      id: 2,
      name: 'Mirrorless Camera',
      price: 799.99,
      image: 'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;