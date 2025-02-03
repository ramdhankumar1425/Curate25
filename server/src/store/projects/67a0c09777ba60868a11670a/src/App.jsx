import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Equipment from './pages/Equipment';

const App = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/equipment" element={<Equipment />} />
            </Routes>
        </div>
    );
};

export default App;