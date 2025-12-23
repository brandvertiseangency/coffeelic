"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion"

export function RoastPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1])
  const image1Y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const image2Y = useTransform(scrollYProgress, [0, 1], [100, -40])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0.5, 1])

  const smoothImage1Y = useSpring(image1Y, { stiffness: 100, damping: 30 })
  const smoothImage2Y = useSpring(image2Y, { stiffness: 100, damping: 30 })

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-cream-light overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-16 h-[2px] bg-caramel" />
            <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Our Philosophy</span>
          </motion.div>

          <motion.h2
            style={{ opacity: textOpacity }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-espresso leading-[0.95] mb-8 tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block"
            >
              Roasting is where
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              coffee{" "}
              <span className="text-caramel relative inline-block">
                transforms
                <motion.span
                  className="absolute bottom-2 left-0 right-0 h-3 bg-caramel/20 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ originX: 0 }}
                />
              </span>
            </motion.span>
          </motion.h2>

          <motion.div
            style={{ width: lineWidth }}
            className="h-1 bg-gradient-to-r from-caramel via-gold to-caramel-dark rounded-full mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-coffee text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl font-light"
          >
            We roast in small batches to bring out the true personality of each bean — balancing sweetness, acidity, and
            body with scientific precision and artisan intuition.
          </motion.p>
        </div>

        <div className="relative h-[500px] md:h-[650px]">
          {/* Primary image - foreground */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ y: smoothImage1Y }}
            className="absolute left-0 top-0 w-[65%] md:w-[50%] z-20"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-3xl depth-shadow-lg">
              <motion.div style={{ scale: imageScale }} className="overflow-hidden">
                <img
                  src="/coffee-roasting-process-beans-drum-roaster.jpg"
                  alt="Coffee roasting machine"
                  className="w-full h-[320px] md:h-[450px] object-cover"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-espresso/80 to-transparent">
                <p className="text-cream font-heading font-semibold">Precision Drum Roasting</p>
                <p className="text-cream/70 text-sm">Temperature controlled to ±0.5°C</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Secondary image - background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ y: smoothImage2Y }}
            className="absolute right-0 top-24 md:top-32 w-[55%] md:w-[55%] z-10"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-3xl depth-shadow">
              <img
                src="/premium-coffee-beans-being-roasted-with-steam-risi.jpg"
                alt="Roasted coffee beans closeup"
                className="w-full h-[280px] md:h-[400px] object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-0 right-[35%] z-30 hidden md:block"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="bg-espresso text-cream p-6 rounded-2xl depth-shadow-lg"
            >
              <p className="font-heading text-4xl font-bold text-caramel">200°C</p>
              <p className="text-cream/70 text-sm">Peak roast temperature</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
