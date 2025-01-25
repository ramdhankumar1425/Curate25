import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <p className="text-gray-600">Your cart is empty</p>
      </div>
      <Link to="/checkout" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Proceed to Checkout</Link>
    </div>
  )
}

export default Cart