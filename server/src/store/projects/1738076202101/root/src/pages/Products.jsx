import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Digital SLR Camera",
      price: 899,
      description: "Professional DSLR with 24.2MP sensor",
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
    },
    {
      id: 2,
      name: "Mirrorless Camera",
      price: 699,
      description: "Compact mirrorless with 4K video",
      image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;