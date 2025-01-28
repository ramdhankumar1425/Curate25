import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Digital Circuit Simulator",
      description: "A web-based digital circuit simulation tool built with React and Node.js",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution using MERN stack",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects