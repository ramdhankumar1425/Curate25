import React from 'react'

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Shipping Address</label>
          <textarea className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Place Order</button>
      </form>
    </div>
  )
}

export default Checkout