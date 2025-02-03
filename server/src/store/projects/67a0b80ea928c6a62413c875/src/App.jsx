import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Exercises from './pages/Exercises';
import Nutrition from './pages/Nutrition';
import Progress from './pages/Progress';
import Profile from './pages/Profile';

const App = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;