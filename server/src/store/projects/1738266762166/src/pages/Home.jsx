import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Professional Cameras for Every Photographer</h1>
            <p className="mb-6">Discover our wide range of cameras and accessories.</p>
            <Link to="/products/all" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Shop Now
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32" alt="Camera" className="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow">
              <img src={`https://source.unsplash.com/random/400x300?camera=${item}`} alt="Product" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-bold">Professional Camera</h3>
              <p className="text-gray-600">$999.99</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home