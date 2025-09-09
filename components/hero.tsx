"use client"

import { memo } from "react"
// import OptimizedGlobe from "./optimized-globe"

const Hero = memo(function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center relative z-20">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          {/* <div className="w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
            <OptimizedGlobe />
          </div> */}
        </div>

        <div className="pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white drop-shadow-2xl gpu-accelerated">
            Krishna Pramod Palekar
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl text-white mb-6 font-light drop-shadow-xl">
            Python Developer | Full Stack Developer | Data Analyst 
          </p>
          <p className="text-lg md:text-xl text-white mb-8 font-light drop-shadow-xl">AI-ML ENGINEER</p>
          <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Passionate about creating beautiful, functional, and user-centered digital experiences. I bring ideas to
            life through code and design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-200 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Hero
