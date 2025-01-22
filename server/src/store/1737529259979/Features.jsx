const Features = () => {
  const features = [
    { title: 'Easy to Use', description: 'Intuitive interface designed for everyone' },
    { title: 'Fast Performance', description: 'Lightning-fast response times' },
    { title: 'Secure', description: 'Your data is protected with top-tier security' }
  ]

  return (
    <div className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">App Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features