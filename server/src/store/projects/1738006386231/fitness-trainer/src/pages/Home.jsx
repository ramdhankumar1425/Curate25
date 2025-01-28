import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="hero-section h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Transform Your Body, Transform Your Life</h1>
          <p className="text-xl mb-8">Professional personal training tailored to your goals</p>
          <Link to="/free-trial" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md text-lg font-bold">
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home