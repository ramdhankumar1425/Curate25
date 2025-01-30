import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg text-gray-600 mb-6">
          I'm a passionate web developer with 5 years of experience in creating modern web applications.
          I specialize in React, Node.js, and modern web technologies.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">React</div>
          <div className="bg-white p-4 rounded-lg shadow">Node.js</div>
          <div className="bg-white p-4 rounded-lg shadow">JavaScript</div>
          <div className="bg-white p-4 rounded-lg shadow">TypeScript</div>
          <div className="bg-white p-4 rounded-lg shadow">HTML/CSS</div>
          <div className="bg-white p-4 rounded-lg shadow">Git</div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Senior Web Developer</h3>
            <p className="text-gray-600">Tech Corp • 2020 - Present</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Web Developer</h3>
            <p className="text-gray-600">Digital Solutions Inc • 2018 - 2020</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;