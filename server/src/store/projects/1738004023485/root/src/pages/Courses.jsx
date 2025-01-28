import React from 'react';

const Courses = () => {
  const courses = [
    {
      title: "Full Stack Web Development",
      duration: "24 weeks",
      level: "Beginner to Advanced",
      description: "Comprehensive course covering front-end and back-end development",
      topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      title: "Data Structures & Algorithms",
      duration: "16 weeks",
      level: "Intermediate",
      description: "Master fundamental DSA concepts and problem-solving techniques",
      topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"]
    },
    {
      title: "Mobile App Development",
      duration: "20 weeks",
      level: "Intermediate",
      description: "Learn to build cross-platform mobile applications",
      topics: ["React Native", "iOS Basics", "Android Basics", "API Integration"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-12">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
            <div className="mb-4">
              <p className="text-gray-600"><span className="font-semibold">Duration:</span> {course.duration}</p>
              <p className="text-gray-600"><span className="font-semibold">Level:</span> {course.level}</p>
            </div>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <h3 className="font-semibold mb-2">Key Topics:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {course.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;