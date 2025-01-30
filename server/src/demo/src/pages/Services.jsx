import React from 'react'

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Personal Training</h3>
          <p className="text-gray-600">One-on-one training sessions tailored to your specific goals and needs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Group Classes</h3>
          <p className="text-gray-600">High-energy group workouts for all fitness levels.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Nutrition Planning</h3>
          <p className="text-gray-600">Custom meal plans to support your fitness journey.</p>
        </div>
      </div>
    </div>
  )
}

export default Services