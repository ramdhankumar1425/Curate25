import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 md:mt-0">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 rounded-l text-black"
      />
      <button type="submit" className="bg-blue-500 px-4 py-2 rounded-r hover:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default SearchBar;