"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

const paragraphs = [
  {
    text: "Coffeelic was born from a simple belief: coffee should be fresh, honest, and full of character.",
    highlight: "fresh, honest, and full of character",
  },
  {
    text: "Every bean we roast is treated with respect — from sourcing to roasting to your cup.",
    highlight: "treated with respect",
  },
  {
    text: "We started with a mission: bring truly fresh, specialty-grade coffee to everyday coffee lovers across India.",
    highlight: "specialty-grade coffee",
  },
]

function RevealParagraph({
  text,
  highlight,
  index,
  isActive,
}: { text: string; highlight: string; index: number; isActive: boolean }) {
  const words = text.split(" ")

  return (
    <motion.p
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.8 }}
      className="text-coffee text-xl md:text-2xl lg:text-3xl leading-relaxed font-light"
    >
      {words.map((word, i) => {
        const isHighlighted = highlight.includes(word.replace(/[^a-zA-Z]/g, ""))
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.03,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`inline-block mr-2 ${isHighlighted ? "text-espresso font-medium" : ""}`}
          >
            {word}
          </motion.span>
        )
      })}
    </motion.p>
  )
}

export function OriginStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-3, 3])
  const smoothImageY = useSpring(imageY, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(Math.floor(latest * paragraphs.length * 1.5), paragraphs.length - 1)
      setActiveIndex(Math.max(0, index))
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section ref={sectionRef} id="story" className="py-32 md:py-48 bg-cream overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-caramel/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Sticky Image with parallax */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <motion.div style={{ y: smoothImageY, rotate: imageRotate }} className="relative z-10">
                <div className="rounded-3xl overflow-hidden depth-shadow-lg">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.8 }}
                    src="/coffee-farmer-holding-fresh-coffee-beans-in-hands-.jpg"
                    alt="Coffee farmer with fresh beans"
                    className="w-full h-[450px] md:h-[600px] object-cover"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 z-20"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="bg-caramel p-6 md:p-8 rounded-2xl depth-shadow-lg gradient-shadow"
                >
                  <p className="font-heading text-espresso font-bold text-xl md:text-2xl leading-tight">
                    Where passion
                  </p>
                  <p className="text-espresso/80 font-medium text-lg">meets precision</p>
                  <motion.div
                    className="w-12 h-[2px] bg-espresso/30 mt-3"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </motion.div>
              </motion.div>

              <div className="absolute -top-8 -right-8 w-full h-full rounded-3xl border-2 border-espresso/5 -z-10" />
            </motion.div>
          </div>

          {/* Right - Scroll-driven text reveal */}
          <div className="lg:py-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[2px] bg-caramel" />
              <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Our Origin</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso leading-[1.1] mb-12"
            >
              A story steeped in <span className="text-caramel">tradition</span>
            </motion.h2>

            <div className="space-y-12">
              {paragraphs.map((paragraph, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-espresso/10">
                  <motion.div
                    className={`absolute left-[-5px] top-0 w-2 h-2 rounded-full transition-colors duration-500 ${
                      activeIndex >= index ? "bg-caramel" : "bg-espresso/20"
                    }`}
                  />
                  <RevealParagraph
                    text={paragraph.text}
                    highlight={paragraph.highlight}
                    index={index}
                    isActive={activeIndex >= index}
                  />
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-caramel font-heading font-semibold text-lg group"
              >
                Read our full story
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </motion.a>
              <p className="text-coffee/50 text-sm mt-2">5 minute read</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
