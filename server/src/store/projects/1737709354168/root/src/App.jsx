import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Screenshots from './components/Screenshots';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Screenshots />
      <Testimonials />
      <Features />
      <BottomCTA />
      <Footer />
    </div>
  );
};

export default App;