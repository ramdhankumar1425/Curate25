import React from 'react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-lg text-gray-600 mb-4">
            I'm a passionate Full Stack Developer with expertise in MongoDB, Express.js, React, and Node.js.
          </p>
          <h3 className="text-xl font-semibold mb-2">Skills:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Frontend: React, HTML5, CSS3, JavaScript</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MongoDB</li>
            <li>Tools: Git, VS Code, Postman</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About