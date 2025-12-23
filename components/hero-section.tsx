"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { CoffeeParticles } from "@/components/coffee-particles"

const words = ["Mastering", "the", "craft", "of", "freshly", "roasted", "coffee"]

function AnimatedWord({ word, index, isHighlighted }: { word: string; index: number; isHighlighted: boolean }) {
  return (
    <span className="inline-block overflow-hidden mr-2 md:mr-4">
      <motion.span
        initial={{ y: "100%", rotateX: -90 }}
        animate={{ y: 0, rotateX: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5 + index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`inline-block ${isHighlighted ? "text-caramel" : ""}`}
      >
        {word}
      </motion.span>
    </span>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.15])
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"])
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(smoothProgress, [0, 0.4], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 150, damping: 20 }
  const parallaxX = useSpring(mouseX, springConfig)
  const parallaxY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) / 50)
      mouseY.set((clientY - innerHeight / 2) / 50)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section ref={sectionRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      <motion.div style={{ scale: backgroundScale, y: backgroundY }} className="absolute inset-0 z-0">
        {/* Background layer - furthest */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-cream" />

        {/* Image layer - mid */}
        <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute inset-0">
          <img
            src="/premium-coffee-beans-being-roasted-with-steam-risi.jpg"
            alt="Premium coffee beans"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient overlay - front */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/98 via-cream/85 to-cream/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/30" />
      </motion.div>

      {/* Coffee Dust Particles */}
      <CoffeeParticles />

      <motion.div style={{ opacity, y: contentY }} className="relative z-10 container mx-auto px-4 md:px-6 py-20 pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.span
              className="w-12 h-[2px] bg-caramel"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ originX: 0 }}
            />
            <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Premium Coffee Roasters</span>
          </motion.div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-espresso leading-[0.95] mb-8 tracking-tight">
            {words.map((word, index) => (
              <AnimatedWord
                key={index}
                word={word}
                index={index}
                isHighlighted={word === "freshly" || word === "roasted"}
              />
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="overflow-hidden mb-12"
          >
            <motion.p
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-coffee text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-light"
            >
              From ethically sourced beans to precision roasting, Coffeelic creates rich, aromatic coffee crafted for
              everyday rituals and unforgettable moments.
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="relative">
                <Button
                  size="lg"
                  className="bg-espresso hover:bg-espresso-light text-cream font-heading font-semibold rounded-full px-8 md:px-10 py-7 text-base group transition-all depth-shadow hover:depth-shadow-lg"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Coffeelic
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
              <p className="text-coffee/60 text-xs mt-2 ml-4">Discover our craft</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-espresso text-espresso hover:bg-espresso hover:text-cream rounded-full px-8 md:px-10 py-7 text-base font-heading font-semibold bg-transparent transition-all group"
                >
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Watch Story
                </Button>
              </motion.div>
              <p className="text-coffee/60 text-xs mt-2 ml-4">2 min journey</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-coffee/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-12 rounded-full border-2 border-espresso/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-caramel"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-24 right-8 md:right-16 z-10 hidden lg:block"
      >
        <div className="w-24 h-24 border border-espresso/10 rounded-full" />
        <div className="w-16 h-16 border border-caramel/20 rounded-full absolute top-4 left-4" />
      </motion.div>
    </section>
  )
}
