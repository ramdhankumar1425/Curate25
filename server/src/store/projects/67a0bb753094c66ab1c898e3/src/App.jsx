import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import CalorieTracker from './pages/CalorieTracker';
import WorkoutTracker from './pages/WorkoutTracker';
import Goals from './pages/Goals';
import Reports from './pages/Reports';

const App = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/calories" element={<CalorieTracker />} />
                    <Route path="/workouts" element={<WorkoutTracker />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/reports" element={<Reports />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;