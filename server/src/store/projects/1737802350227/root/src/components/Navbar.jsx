import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <Link to='/' className='font-bold text-xl'>Blog</Link>
          <div className='flex items-center space-x-4'>
            <input
              type='text'
              placeholder='Search...'
              className='px-4 py-2 border rounded-lg'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link to='/' className='hover:text-gray-700'>Home</Link>
            <Link to='/about' className='hover:text-gray-700'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;