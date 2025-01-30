import React, { useState } from 'react';
import Display from './Display';
import KeyPad from './KeyPad';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [lastPressed, setLastPressed] = useState('');

  const handleNumber = (number) => {
    if (display === '0' || lastPressed === '=') {
      setDisplay(number);
      setEquation(number);
    } else {
      setDisplay(display + number);
      setEquation(equation + number);
    }
    setLastPressed(number);
  };

  const handleOperator = (operator) => {
    if (lastPressed !== '' && !isNaN(lastPressed)) {
      setDisplay(operator);
      setEquation(equation + operator);
      setLastPressed(operator);
    }
  };

  const handleDecimal = () => {
    if (!display.includes('.') && lastPressed !== '=') {
      setDisplay(display + '.');
      setEquation(equation + '.');
      setLastPressed('.');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setLastPressed('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(equation);
      if (!isFinite(result)) {
        throw new Error('Division by zero');
      }
      setDisplay(result.toString());
      setEquation(result.toString());
      setLastPressed('=');
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setLastPressed('');
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs w-full">
      <Display value={display} equation={equation} />
      <KeyPad 
        onNumber={handleNumber}
        onOperator={handleOperator}
        onDecimal={handleDecimal}
        onClear={handleClear}
        onCalculate={handleCalculate}
      />
    </div>
  );
};

export default Calculator;