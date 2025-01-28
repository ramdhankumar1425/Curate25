import React from 'react';

const Events = () => {
  const events = [
    {
      title: "Tech Talk: Future of Web Development",
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Main Auditorium",
      description: "Join us for an insightful discussion on emerging web technologies"
    },
    {
      title: "Code Workshop: DSA Mastery",
      date: "March 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Lab 101",
      description: "Hands-on workshop focusing on advanced DSA concepts"
    },
    {
      title: "Hackathon 2024",
      date: "April 5-6, 2024",
      time: "48 Hours",
      location: "Campus Center",
      description: "Annual coding competition with exciting prizes"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-12">Upcoming Events</h1>
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <p className="font-semibold">Date:</p>
                <p>{event.date}</p>
              </div>
              <div>
                <p className="font-semibold">Time:</p>
                <p>{event.time}</p>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p>{event.location}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{event.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;