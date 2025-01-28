import React from 'react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            CodeTech Institute is a leading coding education center dedicated to nurturing the next generation of software developers and technology leaders.
          </p>
          <p className="text-lg mb-6">
            Our mission is to provide high-quality, industry-relevant education that prepares students for successful careers in technology.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default About