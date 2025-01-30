import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea className="w-full p-2 border rounded h-32"></textarea>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Address:</strong><br />
              123 Camera Street<br />
              Photography City, PC 12345
            </p>
            <p>
              <strong>Phone:</strong><br />
              (123) 456-7890
            </p>
            <p>
              <strong>Email:</strong><br />
              info@camerahub.com
            </p>
            <p>
              <strong>Business Hours:</strong><br />
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;