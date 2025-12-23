"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Coffeelic completely changed how I experience coffee at home. The freshness and depth of flavor is unlike anything from supermarket brands. It's become my morning ritual.",
    author: "Priya Sharma",
    role: "Home Barista, Mumbai",
    avatar: "/indian-woman-portrait-professional.jpg",
    rating: 5,
  },
  {
    quote:
      "As a café owner, I've tried many suppliers. Coffeelic's consistency and quality keep my customers coming back for more. Their support team is exceptional too.",
    author: "Rahul Menon",
    role: "Café Owner, Bangalore",
    avatar: "/happy-woman-drinking-coffee-caf--smile-warm-lighti.jpg",
    rating: 5,
  },
  {
    quote:
      "The South Indian filter blend takes me back to my grandmother's kitchen. Authentic, rich, and perfectly balanced. This is what coffee should taste like.",
    author: "Deepa Krishnan",
    role: "Coffee Enthusiast, Chennai",
    avatar: "/indian-woman-portrait-professional.jpg",
    rating: 5,
  },
]

export function TestimonialSlider() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance slider with easing
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goPrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-caramel/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-caramel" />
            <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Testimonials</span>
            <span className="w-8 h-[2px] bg-caramel" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso"
          >
            Loved by coffee lovers
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-cream-light rounded-[2rem] p-8 md:p-16 depth-shadow-lg overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-caramel/10 flex items-center justify-center">
              <Quote className="w-7 h-7 text-caramel" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center pt-8"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-caramel text-caramel" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-espresso text-xl md:text-2xl lg:text-3xl leading-relaxed mb-10 font-light">
                  "{testimonials[current].quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src={testimonials[current].avatar || "/placeholder.svg"}
                    alt={testimonials[current].author}
                    className="w-16 h-16 rounded-full object-cover border-3 border-caramel"
                  />
                  <div className="text-left">
                    <p className="font-heading font-bold text-espresso text-lg">{testimonials[current].author}</p>
                    <p className="text-coffee">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 md:left-0 md:right-0 md:-mx-8 flex justify-between pointer-events-none">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={goPrev}
                  className="pointer-events-auto rounded-full border-espresso/10 text-espresso hover:bg-espresso hover:text-cream w-12 h-12 md:w-14 md:h-14 bg-cream depth-shadow"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={goNext}
                  className="pointer-events-auto rounded-full border-espresso/10 text-espresso hover:bg-espresso hover:text-cream w-12 h-12 md:w-14 md:h-14 bg-cream depth-shadow"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all duration-500 ${
                  current === index ? "bg-caramel w-10" : "bg-espresso/15 w-3 hover:bg-espresso/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
