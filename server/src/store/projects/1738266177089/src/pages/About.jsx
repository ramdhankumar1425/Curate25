import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About CameraHub</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, CameraHub has been serving photography enthusiasts with the best camera equipment and accessories.
            Our passion for photography drives us to provide exceptional service and expert advice to our customers.
          </p>
          <p className="text-gray-600">
            We believe in making professional photography accessible to everyone, from beginners to seasoned professionals.
          </p>
        </div>
        
        <div>
          <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e" alt="Store" className="w-full h-72 object-cover rounded" />
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3].map(item => (
            <div key={item} className="text-center">
              <img src={`https://source.unsplash.com/300x300/?portrait&sig=${item}`} alt="Team member" className="w-48 h-48 object-cover rounded-full mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Team Member {item}</h3>
              <p className="text-gray-600">Position {item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;