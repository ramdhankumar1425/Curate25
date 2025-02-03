import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Exercises from './pages/Exercises';
import Blog from './pages/Blog';
import ProductCategory from './pages/ProductCategory';
import ExerciseDetails from './pages/ExerciseDetails';
import BlogPost from './pages/BlogPost';

const App = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:category" element={<ProductCategory />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/exercises/:id" element={<ExerciseDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;