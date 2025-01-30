import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website using React and Tailwind CSS",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
      link: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h1>
        <p className="text-xl text-gray-600">Full Stack Web Developer specializing in React and Node.js</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow text-center">React</div>
          <div className="bg-white p-4 rounded-lg shadow text-center">Node.js</div>
          <div className="bg-white p-4 rounded-lg shadow text-center">JavaScript</div>
          <div className="bg-white p-4 rounded-lg shadow text-center">Tailwind CSS</div>
        </div>
      </section>
    </div>
  );
};

export default Home;