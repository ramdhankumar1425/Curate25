import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/StudentList';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

const App = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/students" element={<StudentList />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;