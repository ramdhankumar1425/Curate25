import React from 'react'

const courses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    description: 'Learn HTML, CSS, and JavaScript basics',
    duration: '8 weeks',
    price: '$499',
    level: 'Beginner'
  },
  {
    id: 2,
    title: 'Advanced React Development',
    description: 'Master React and modern frontend development',
    duration: '10 weeks',
    price: '$699',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis',
    duration: '12 weeks',
    price: '$799',
    level: 'Intermediate'
  }
]

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="text-sm text-gray-500">
              <p>Duration: {course.duration}</p>
              <p>Price: {course.price}</p>
              <p>Level: {course.level}</p>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses