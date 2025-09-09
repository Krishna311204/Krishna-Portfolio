"use client"

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { useEffect, useState, useCallback } from "react"

type Testimonial = {
  quote: string
  name: string
  designation: string
  src: string
}

export const OptimizedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000) // Increased interval
      return () => clearInterval(interval)
    }
  }, [autoplay, handleNext])

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.src}
                className={`absolute inset-0 transition-all duration-500 ease-in-out gpu-accelerated ${
                  index === active ? "opacity-100 scale-100 z-10" : "opacity-70 scale-95 z-0"
                }`}
                style={{
                  transform: `translateY(${index === active ? 0 : index * 10}px) rotateY(${index === active ? 0 : (Math.random() - 0.5) * 20}deg)`,
                }}
              >
                <img
                  src={testimonial.src || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between py-4">
          <div key={active} className="transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-white">{testimonials[active].name}</h3>
            <p className="text-sm text-gray-400">{testimonials[active].designation}</p>
            <p className="mt-8 text-lg text-gray-300">{testimonials[active].quote}</p>
          </div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-200 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <IconArrowRight className="h-5 w-5 text-white transition-transform duration-200 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
