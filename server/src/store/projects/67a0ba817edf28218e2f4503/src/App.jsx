import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import CalorieCalculator from './pages/CalorieCalculator';
import Blog from './pages/Blog';
import Progress from './pages/Progress';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/calculator" element={<CalorieCalculator />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;