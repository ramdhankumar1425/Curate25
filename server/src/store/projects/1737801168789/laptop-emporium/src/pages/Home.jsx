import React from 'react'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Laptop Emporium</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Gaming Laptops</h2>
          <img src="https://images.unsplash.com/photo-1603481546238-487240415921" alt="Gaming Laptop" className="w-full h-48 object-cover rounded mb-4" />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Business Laptops</h2>
          <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853" alt="Business Laptop" className="w-full h-48 object-cover rounded mb-4" />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Ultrabooks</h2>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Ultrabook" className="w-full h-48 object-cover rounded mb-4" />
        </div>
      </div>
    </div>
  )
}

export default Home