import React from 'react';

const Features = () => {
  const features = [
    { title: 'Easy to Use', description: 'Intuitive interface that anyone can master' },
    { title: 'Fast & Reliable', description: 'Lightning-fast performance you can count on' },
    { title: 'Secure', description: 'Your data is protected with military-grade encryption' },
  ];

  return (
    <section id="features" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;