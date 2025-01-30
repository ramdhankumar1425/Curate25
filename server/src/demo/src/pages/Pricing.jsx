import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Training Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Basic</h3>
          <p className="text-3xl font-bold mb-4">$99/month</p>
          <ul className="mb-6">
            <li>2 sessions per week</li>
            <li>Basic meal planning</li>
            <li>Email support</li>
          </ul>
          <Link to="/free-trial" className="block text-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
            Start Free Trial
          </Link>
        </div>
        {/* Similar blocks for other packages */}
      </div>
    </div>
  )
}

export default Pricing