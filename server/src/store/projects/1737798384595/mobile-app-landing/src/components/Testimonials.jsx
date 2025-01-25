import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', comment: 'Best app I\'ve ever used!', rating: 5 },
    { name: 'Jane Smith', comment: 'Completely changed how I work', rating: 5 },
    { name: 'Mike Johnson', comment: 'Highly recommended!', rating: 4 },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="text-yellow-400">{'★'.repeat(testimonial.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;