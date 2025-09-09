"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    VANTA: any
    THREE: any
  }
}

export default function VantaEffect() {
  useEffect(() => {
    let vantaEffect: any = null

    const initVanta = () => {
      const element = document.getElementById("vanta-bg")

      if (element && window.THREE && window.VANTA && !vantaEffect) {
        vantaEffect = window.VANTA.NET({
          el: element,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff3f3f,
          backgroundColor: 0x0,
          points: 10.0,
          maxDistance: 25.0,
          spacing: 16.0,
        })
      }
    }

    // Wait for scripts to load
    const checkAndInit = () => {
      if (window.THREE && window.VANTA) {
        initVanta()
      } else {
        setTimeout(checkAndInit, 100)
      }
    }

    // Start checking after a short delay
    setTimeout(checkAndInit, 500)

    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function") {
        vantaEffect.destroy()
      }
    }
  }, [])

  return null
}
