import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 13',
      price: 999,
      description: 'Latest iPhone with advanced camera system',
      image: 'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      price: 899,
      description: 'Powerful Android flagship phone',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Mobile Store</h1>
        <p className="text-xl text-gray-600">Discover the latest smartphones at great prices</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;