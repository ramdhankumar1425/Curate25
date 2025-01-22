import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const screenshots = [
  '/screenshot1.png',
  '/screenshot2.png',
  '/screenshot3.png'
]

const AppCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((currentIndex + 1) % screenshots.length)
  }

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <div className="relative max-w-md mx-auto my-20">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <img 
          src={screenshots[currentIndex]} 
          alt={`Screenshot ${currentIndex + 1}`}
          className="w-full h-auto"
        />
      </div>
      
      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
        <ChevronLeft />
      </button>
      
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
        <ChevronRight />
      </button>
    </div>
  )
}

export default AppCarousel