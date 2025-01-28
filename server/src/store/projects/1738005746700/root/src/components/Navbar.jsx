import React from 'react'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cart } = useCart()

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Fresh Market</h1>
          <div className="flex items-center">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar