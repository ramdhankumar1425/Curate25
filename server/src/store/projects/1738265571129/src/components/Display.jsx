import React from 'react';

const Display = ({ value, equation }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg mb-4">
      <div className="text-gray-400 text-sm h-6 overflow-hidden">
        {equation}
      </div>
      <div className="text-white text-2xl font-bold text-right overflow-hidden">
        {value}
      </div>
    </div>
  );
};

export default Display;