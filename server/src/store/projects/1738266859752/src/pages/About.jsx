import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="md:flex gap-8">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Profile" className="w-64 h-64 rounded-full object-cover mb-8 md:mb-0" />
          <div>
            <p className="text-gray-600 mb-4">
              I'm a passionate web developer with 5 years of experience in creating modern web applications. I specialize in React, Node.js, and modern web technologies.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical blog posts.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'Node.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'MongoDB'].map((skill, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded text-center">{skill}</div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" rows="4" className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default About;