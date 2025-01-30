import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (number) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    setEquation(display + operator);
    setDisplay('0');
  };

  const handleEqual = () => {
    const result = eval(equation + display);
    setDisplay(result.toString());
    setEquation('');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
      <Display value={display} equation={equation} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        <Button onClick={() => handleClear()} className="col-span-2 bg-red-500 hover:bg-red-600">C</Button>
        <Button onClick={() => handleOperator('/')} className="bg-gray-300 hover:bg-gray-400">÷</Button>
        <Button onClick={() => handleOperator('*')} className="bg-gray-300 hover:bg-gray-400">×</Button>
        
        <Button onClick={() => handleNumber('7')}>7</Button>
        <Button onClick={() => handleNumber('8')}>8</Button>
        <Button onClick={() => handleNumber('9')}>9</Button>
        <Button onClick={() => handleOperator('-')} className="bg-gray-300 hover:bg-gray-400">-</Button>
        
        <Button onClick={() => handleNumber('4')}>4</Button>
        <Button onClick={() => handleNumber('5')}>5</Button>
        <Button onClick={() => handleNumber('6')}>6</Button>
        <Button onClick={() => handleOperator('+')} className="bg-gray-300 hover:bg-gray-400">+</Button>
        
        <Button onClick={() => handleNumber('1')}>1</Button>
        <Button onClick={() => handleNumber('2')}>2</Button>
        <Button onClick={() => handleNumber('3')}>3</Button>
        <Button onClick={() => handleEqual()} className="bg-blue-500 hover:bg-blue-600 row-span-2">=</Button>
        
        <Button onClick={() => handleNumber('0')} className="col-span-2">0</Button>
        <Button onClick={() => handleNumber('.')}>.</Button>
      </div>
    </div>
  );
};

export default Calculator;