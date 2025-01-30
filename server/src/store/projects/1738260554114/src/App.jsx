import React from 'react';
import AlertButton from './components/AlertButton';

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <AlertButton message="Hello! This is a custom alert message." />
    </div>
  );
};

export default App;