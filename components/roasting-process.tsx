"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Bean Selection",
    subtitle: "Sourcing Excellence",
    description:
      "Hand-picked specialty-grade beans from trusted farms across Brazil, Ethiopia, Colombia, and India. Every bean is cupped and graded.",
    image: "/coffee-farmer-holding-fresh-coffee-beans-in-hands-.jpg",
    stat: "Top 3%",
    statLabel: "of global beans",
  },
  {
    number: "02",
    title: "Precision Roasting",
    subtitle: "The Art & Science",
    description:
      "Temperature-controlled drum roasting with real-time monitoring. We track 47 data points per batch for consistent perfection.",
    image: "/coffee-roasting-process-beans-drum-roaster.jpg",
    stat: "47",
    statLabel: "data points tracked",
  },
  {
    number: "03",
    title: "Fresh Grinding",
    subtitle: "To Order Only",
    description:
      "Ground to order for your preferred brew method — espresso, filter, or French press. Never pre-ground, always fresh.",
    image: "/coffee-grind-sizes-espresso-french-press.jpg",
    stat: "24hrs",
    statLabel: "max grind-to-ship",
  },
  {
    number: "04",
    title: "Perfect Brewing",
    subtitle: "The Final Ritual",
    description:
      "The culmination of our craft — from perfectly roasted beans to an exceptional cup. Your daily ritual, elevated.",
    image: "/barista-making-espresso-coffee-close-up-steam-prof.jpg",
    stat: "∞",
    statLabel: "perfect cups",
  },
]

export function RoastingProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.min(Math.floor(latest * steps.length), steps.length - 1)
      setActiveStep(Math.max(0, stepIndex))
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={sectionRef} id="process" className="py-32 md:py-48 bg-espresso overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-caramel" />
            <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Our Process</span>
            <span className="w-8 h-[2px] bg-caramel" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream"
          >
            From bean to cup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/60 text-lg mt-4 max-w-xl mx-auto"
          >
            A journey of precision, passion, and unwavering quality standards
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Steps with scroll progress */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-cream/10">
              <motion.div style={{ height: progressHeight }} className="w-full bg-gradient-to-b from-caramel to-gold" />
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  className={`relative pl-14 py-6 cursor-pointer transition-all duration-500 ${
                    activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {/* Step indicator */}
                  <div
                    className={`absolute left-0 top-6 w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all duration-500 ${
                      activeStep >= index ? "bg-caramel text-espresso" : "bg-cream/10 text-cream/40"
                    }`}
                  >
                    {step.number}
                  </div>

                  <div>
                    <span className="text-caramel text-xs font-semibold uppercase tracking-wider">{step.subtitle}</span>
                    <h3
                      className={`font-heading text-2xl md:text-3xl font-bold mb-3 transition-colors duration-500 ${
                        activeStep === index ? "text-cream" : "text-cream/60"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <AnimatePresence mode="wait">
                      {activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <p className="text-cream/60 leading-relaxed mb-4">{step.description}</p>
                          <div className="flex items-end gap-2">
                            <span className="font-heading text-3xl font-bold text-caramel">{step.stat}</span>
                            <span className="text-cream/40 text-sm mb-1">{step.statLabel}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Image with transitions */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="rounded-3xl overflow-hidden"
                >
                  <img
                    src={steps[activeStep].image || "/placeholder.svg"}
                    alt={steps[activeStep].title}
                    className="w-full h-[400px] md:h-[550px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-caramel font-heading font-semibold">{steps[activeStep].title}</p>
                        <p className="text-cream/60 text-sm">{steps[activeStep].subtitle}</p>
                      </div>
                      <div className="bg-caramel px-4 py-2 rounded-full">
                        <span className="font-heading font-bold text-espresso">
                          {activeStep + 1} / {steps.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute -inset-4 border border-cream/5 rounded-[2rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
