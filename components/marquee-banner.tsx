"use client"

import { motion, useReducedMotion } from "framer-motion"

const items = [
  "FRESHLY ROASTED",
  "✦",
  "ETHICALLY SOURCED",
  "✦",
  "SMALL BATCH",
  "✦",
  "SPECIALTY GRADE",
  "✦",
  "CRAFT COFFEE",
  "✦",
  "INDIAN HERITAGE",
  "✦",
]

export function MarqueeBanner() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="bg-espresso py-6 overflow-hidden relative">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-espresso to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-espresso to-transparent z-10" />

      <motion.div
        animate={prefersReducedMotion ? {} : { x: [0, "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="flex whitespace-nowrap"
      >
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className={`font-heading text-lg md:text-xl font-bold mx-6 ${
              item === "✦" ? "text-caramel" : "text-cream/80"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
