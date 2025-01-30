import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Your cart is empty</p>
        <Link to="/products" className="text-blue-600 hover:underline mt-4 inline-block">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;