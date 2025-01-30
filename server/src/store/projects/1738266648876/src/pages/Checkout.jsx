import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Address</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Place Order</button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$999.99</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$9.99</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$1009.98</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;