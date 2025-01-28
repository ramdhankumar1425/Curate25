import React from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProductList />
            </div>
            <div>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  )
}

export default App