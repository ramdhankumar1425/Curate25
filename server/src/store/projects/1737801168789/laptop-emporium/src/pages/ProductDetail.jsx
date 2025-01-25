import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={`https://images.unsplash.com/photo-1588702547-${id}`} alt={`Laptop ${id}`} className="w-full rounded-lg" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Laptop Model {id}</h1>
          <p className="text-2xl text-gray-600 mb-4">$999</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail