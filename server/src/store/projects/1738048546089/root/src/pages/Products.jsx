import React from 'react';

const products = [
  { id: 1, name: 'Electric Guitar', image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02', price: '$799' },
  { id: 2, name: 'Acoustic Drums', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7', price: '$1299' },
  { id: 3, name: 'Digital Piano', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0', price: '$999' },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;