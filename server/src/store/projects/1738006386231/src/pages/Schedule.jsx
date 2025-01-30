import React from 'react'

const Schedule = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Class Schedule</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="p-4 bg-gray-100 rounded">
            <h3 className="font-bold">Monday</h3>
            <p>6:00 AM - HIIT</p>
            <p>9:00 AM - Yoga</p>
            <p>5:00 PM - Strength</p>
          </div>
          {/* Similar blocks for other days */}
        </div>
      </div>
    </div>
  )
}

export default Schedule