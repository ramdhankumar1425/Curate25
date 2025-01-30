import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} className="text-blue-600 hover:underline">View Project →</a>
      </div>
    </div>
  );
};

export default ProjectCard;