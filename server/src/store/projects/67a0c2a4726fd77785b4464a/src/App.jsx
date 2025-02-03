import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Equipment from './pages/Equipment';
import BeginnersGuide from './pages/BeginnersGuide';
import Blog from './pages/Blog';

const App = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/guide" element={<BeginnersGuide />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;