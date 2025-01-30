import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 text-xl font-bold rounded-lg text-white bg-gray-200 hover:bg-gray-300 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;