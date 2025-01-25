import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Carousel from './components/Carousel';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Carousel />
      <Features />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  );
};

export default App;