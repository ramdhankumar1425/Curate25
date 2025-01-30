import React from 'react';

const AlertButton = ({ message }) => {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button 
      onClick={handleClick}
      className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold shadow-lg transform transition-all hover:scale-105 hover:shadow-xl active:scale-95"
    >
      Click Me!
    </button>
  );
};

export default AlertButton;