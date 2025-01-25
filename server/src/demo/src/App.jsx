import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
// import About from './pages/About'
// import Testimonials from "./pages/Testimonials";
// import Register from "./pages/Register";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    {/* <Route path="/about" element={<About />} /> */}
                    {/* <Route path="/testimonials" element={<Testimonials />} /> */}
                    {/* <Route path="/register" element={<Register />} /> */}
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    {/* <Route path="/blog" element={
                    <Blog />} /> */}
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
