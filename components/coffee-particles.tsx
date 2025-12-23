"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface Particle {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  opacity: number
  blur: number
}

export function CoffeeParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const prefersReducedMotion = useReducedMotion()

  const particleConfig = useMemo(() => {
    if (prefersReducedMotion) return []

    const newParticles: Particle[] = []
    for (let i = 0; i < 30; i++) {
      const layer = i < 10 ? "back" : i < 20 ? "mid" : "front"
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        size:
          layer === "back" ? Math.random() * 2 + 1 : layer === "mid" ? Math.random() * 3 + 2 : Math.random() * 4 + 3,
        duration:
          layer === "back"
            ? Math.random() * 15 + 25
            : layer === "mid"
              ? Math.random() * 12 + 18
              : Math.random() * 8 + 12,
        delay: Math.random() * 15,
        opacity: layer === "back" ? 0.15 : layer === "mid" ? 0.3 : 0.5,
        blur: layer === "back" ? 2 : layer === "mid" ? 1 : 0,
      })
    }
    return newParticles
  }, [prefersReducedMotion])

  useEffect(() => {
    setParticles(particleConfig)
  }, [particleConfig])

  if (prefersReducedMotion) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            y: "110vh",
            x: `${particle.x}vw`,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, particle.opacity, particle.opacity, 0],
            rotate: 360,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            filter: `blur(${particle.blur}px)`,
          }}
          className="absolute rounded-full bg-gradient-to-br from-caramel to-caramel-dark"
        />
      ))}
    </div>
  )
}
