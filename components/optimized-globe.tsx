"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "../lib/utils"

const GLOBE_CONFIG = {
  width: 600,
  height: 600,
  onRender: () => {},
  devicePixelRatio: 1,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 8000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [51.5074, -0.1278], size: 0.08 },
    { location: [35.6762, 139.6503], size: 0.08 },
    { location: [37.7749, -122.4194], size: 0.08 },
  ],
}

export default function OptimizedGlobe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: typeof GLOBE_CONFIG
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const r = useRef(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const updatePointerInteraction = useCallback((value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }, [])

  const updateMovement = useCallback((clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.current = delta / 200
    }
  }, [])

  const onRender = useCallback((state: Record<string, any>) => {
    if (!pointerInteracting.current) phi += 0.003
    state.phi = phi + r.current
    state.width = width * 2
    state.height = width * 2
  }, [])

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }, [])

  useEffect(() => {
    let globe: any = null

    const initGlobe = async () => {
      if (!canvasRef.current) return

      const createGlobe = (await import("cobe")).default

      onResize()
      window.addEventListener("resize", onResize)

      globe = createGlobe(canvasRef.current, {
        ...config,
        width: width * 2,
        height: width * 2,
        onRender,
      })

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1"
          setIsLoaded(true)
        }
      }, 100)
    }

    initGlobe()

    return () => {
      window.removeEventListener("resize", onResize)
      if (globe) {
        globe.destroy()
      }
    }
  }, [config, onRender, onResize])

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[500px]", className)}>
      <canvas
        className={cn(
          "w-full h-full opacity-0 transition-opacity duration-1000 gpu-accelerated",
          isLoaded && "opacity-100",
        )}
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  )
}
