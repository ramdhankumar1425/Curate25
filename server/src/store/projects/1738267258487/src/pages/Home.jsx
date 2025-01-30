import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website using React and Tailwind",
      image: "https://images.unsplash.com/photo-1697653489655-70fc03f0c6f7"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h1>
        <p className="text-xl text-gray-600">Full Stack Web Developer passionate about creating beautiful web experiences</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;