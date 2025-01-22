import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import AppCarousel from './components/AppCarousel'
import DownloadCTA from './components/DownloadCTA'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AppCarousel />
      <Features />
      <Testimonials />
      <DownloadCTA />
    </div>
  )
}

export default App