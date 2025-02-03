import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import FoodTracker from './pages/FoodTracker';
import WorkoutLibrary from './pages/WorkoutLibrary';
import Progress from './pages/Progress';
import Goals from './pages/Goals';
import Community from './pages/Community';

const App = () => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/food-tracker" element={<FoodTracker />} />
                    <Route path="/workout-library" element={<WorkoutLibrary />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/community" element={<Community />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;