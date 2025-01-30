import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 rounded text-black"
      />
      <button type="submit" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 w-full">
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;