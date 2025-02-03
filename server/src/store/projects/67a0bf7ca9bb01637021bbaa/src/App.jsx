import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Nutrition from './pages/Nutrition';
import BlogPage from './pages/BlogPage';
import Progress from './pages/Progress';
import WorkoutPlanner from './pages/WorkoutPlanner';

const App = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/planner" element={<WorkoutPlanner />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;