import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Workouts from './pages/Workouts';
import MealPlans from './pages/MealPlans';
import Contact from './pages/Contact';

const App = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/meal-plans" element={<MealPlans />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;