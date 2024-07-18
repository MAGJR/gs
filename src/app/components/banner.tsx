import Image from 'next/image'
import { useState, useEffect } from 'react'

import Hero from '../../../public/assets/Hero.png'

const images = [Hero]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
