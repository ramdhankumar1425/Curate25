import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Exercises from './pages/Exercises';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;