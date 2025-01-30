import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Schedule from './pages/Schedule'
import Pricing from './pages/Pricing'
import FreeTrial from './pages/FreeTrial'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/free-trial" element={<FreeTrial />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App