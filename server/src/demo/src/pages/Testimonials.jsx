import React from 'react'

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">"I've lost 30 pounds and gained confidence I never knew I had!"</p>
          <p className="font-bold">- Sarah Johnson</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">"Best decision I've ever made for my health and fitness."</p>
          <p className="font-bold">- Mike Thompson</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials