import React from 'react';

const KeyPad = ({ onNumber, onOperator, onDecimal, onClear, onCalculate }) => {
  const buttons = [
    { label: 'C', className: 'bg-red-500', onClick: onClear },
    { label: '/', className: 'bg-gray-600', onClick: () => onOperator('/') },
    { label: '*', className: 'bg-gray-600', onClick: () => onOperator('*') },
    { label: '7', onClick: () => onNumber('7') },
    { label: '8', onClick: () => onNumber('8') },
    { label: '9', onClick: () => onNumber('9') },
    { label: '-', className: 'bg-gray-600', onClick: () => onOperator('-') },
    { label: '4', onClick: () => onNumber('4') },
    { label: '5', onClick: () => onNumber('5') },
    { label: '6', onClick: () => onNumber('6') },
    { label: '+', className: 'bg-gray-600', onClick: () => onOperator('+') },
    { label: '1', onClick: () => onNumber('1') },
    { label: '2', onClick: () => onNumber('2') },
    { label: '3', onClick: () => onNumber('3') },
    { label: '=', className: 'bg-blue-500 row-span-2', onClick: onCalculate },
    { label: '0', className: 'col-span-2', onClick: () => onNumber('0') },
    { label: '.', onClick: onDecimal }
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={`p-4 text-white rounded-lg hover:opacity-80 transition-opacity ${
            button.className || 'bg-gray-700'
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default KeyPad;