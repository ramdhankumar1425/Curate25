import React from 'react';

const Display = ({ value, equation }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="text-gray-400 text-right text-sm h-6">{equation}</div>
      <div className="text-white text-right text-3xl font-bold break-all">{value}</div>
    </div>
  );
};

export default Display;