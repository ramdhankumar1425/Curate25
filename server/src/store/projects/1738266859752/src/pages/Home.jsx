import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website using React and Tailwind",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h1>
        <p className="text-xl text-gray-600 mb-8">Full Stack Web Developer</p>
        <a href="/about" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">Get in Touch</a>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;