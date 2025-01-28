import React from 'react';

const Faculty = () => {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      role: "Head of Computer Science",
      expertise: "Data Structures & Algorithms",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Prof. Michael Chen",
      role: "Senior Web Development Instructor",
      expertise: "Full Stack Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Dr. Emily Williams",
      role: "Mobile Development Lead",
      expertise: "iOS & Android Development",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-12">Our Faculty</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculty.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-700">Expertise: {member.expertise}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;