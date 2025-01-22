const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', text: 'Best app I've ever used!' },
    { name: 'Jane Smith', text: 'Completely changed how I work' }
  ]

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials