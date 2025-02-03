import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import WorkoutPlans from './pages/WorkoutPlans';
import Nutrition from './pages/Nutrition';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-base-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workout-plans" element={<WorkoutPlans />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;