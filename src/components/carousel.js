import React, { useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('flex-start')

  const prevSlide = () => {
    if (direction === 'flex-start') {
      let firstSlide = slides.shift()
      slides.push(firstSlide)
      setDirection('flex-end')

    }
    const oldSlide = setTimeout(() => {
      setCurrent(current => current + 100)
      let lastSlide = slides.pop()
      slides.unshift(lastSlide)
    }, 100)
    setCurrent(current => current = 0)
    return () => clearTimeout(oldSlide)
  }

  const nextSlide = () => {
    if (direction === 'flex-end') {
      let lastSlide = slides.pop()
      slides.unshift(lastSlide)
      setDirection('flex-start')
    }

    const newSlide = setTimeout(() => {
      setCurrent(current => current - 100)
      let firstSlide = slides.shift()
      slides.push(firstSlide)
    }, 100)
    setCurrent(current => current = 0)
    return () => clearTimeout(newSlide)
  }

  useEffect(() => {
    const id = setTimeout(() => nextSlide(), 4000)
    return () => clearTimeout(id)
  }, [current])

  return (
    <div className="carousel"
      style={{ justifyContent: direction }}
    >
      {slides.map(slide => (
        <img className="carousel__slide"
          key={slide.id}
          src={slide.img}
          alt={slide.alt}
          style={{
            width: 'auto',
            transform: `translateX(${current}%)`,
            transition: current === 0 ? 'none' : '.4s ease-in-out'
          }}
        />
      ))}

        <div className="carousel__arrow" onClick={prevSlide}>
          <IoIosArrowBack />
        </div>
        <div className="carousel__arrow" onClick={nextSlide}>
          <IoIosArrowForward />
        </div>
    </div>
  )
}