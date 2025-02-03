import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Workout from './pages/Workout';
import Nutrition from './pages/Nutrition';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import Login from './pages/Login';

const App = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/workout" element={<Workout />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;