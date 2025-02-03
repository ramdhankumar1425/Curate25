import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trade from './pages/Trade';
import Battle from './pages/Battle';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;