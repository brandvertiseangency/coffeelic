"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Coffee, Clock, Droplets, Thermometer } from "lucide-react"

const brewMethods = [
  {
    id: "espresso",
    name: "Espresso",
    icon: "☕",
    grind: "Fine (like table salt)",
    ratio: "1:2 (18g : 36g)",
    time: "25-30 seconds",
    temp: "92-96°C",
    tip: "Aim for a rich, syrupy shot with golden crema. Pre-heat your portafilter.",
    image: "/barista-making-espresso-coffee-close-up-steam-prof.jpg",
  },
  {
    id: "french-press",
    name: "French Press",
    icon: "🫖",
    grind: "Coarse (like sea salt)",
    ratio: "1:15 (30g : 450ml)",
    time: "4 minutes",
    temp: "93-96°C",
    tip: "Don't press too hard to avoid bitter sediment. Let grounds bloom for 30s first.",
    image: "/coffee-grind-sizes-espresso-french-press.jpg",
  },
  {
    id: "pour-over",
    name: "Pour Over",
    icon: "💧",
    grind: "Medium-fine (like sand)",
    ratio: "1:16 (20g : 320ml)",
    time: "3-4 minutes",
    temp: "90-94°C",
    tip: "Pour in slow, concentric circles for even extraction. Wet the filter first.",
    image: "/coffee-being-poured-into-cup-latte-art-barista-clo.jpg",
  },
  {
    id: "south-indian",
    name: "South Indian Filter",
    icon: "🇮🇳",
    grind: "Fine-medium (80:20 coffee:chicory)",
    ratio: "1:10 (25g : 250ml)",
    time: "10-15 minutes (drip)",
    temp: "90-95°C",
    tip: "Serve with hot milk for authentic filter coffee. Use a traditional brass dabara.",
    image: "/coffee-being-poured-into-cup-latte-art-barista-clo.jpg",
  },
]

function BrewTab({
  method,
  isActive,
  onClick,
}: { method: (typeof brewMethods)[0]; isActive: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative px-6 py-4 rounded-2xl font-heading font-semibold text-sm transition-all ${
        isActive ? "bg-espresso text-cream" : "bg-cream text-coffee hover:bg-espresso/5"
      }`}
    >
      <span className="mr-2">{method.icon}</span>
      {method.name}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-espresso rounded-2xl -z-10"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  delay,
}: { icon: typeof Coffee; label: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay }}
      className="bg-cream-light rounded-2xl p-5 group hover:bg-caramel/10 transition-colors"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-4 h-4 text-caramel" />
        <p className="text-caramel font-semibold text-xs uppercase tracking-wider">{label}</p>
      </div>
      <p className="text-espresso font-medium text-lg">{value}</p>
    </motion.div>
  )
}

export function BrewGuide() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeMethod, setActiveMethod] = useState("espresso")

  const currentMethod = brewMethods.find((m) => m.id === activeMethod)!

  return (
    <section ref={sectionRef} id="brew-guide" className="py-32 md:py-48 bg-cream-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-caramel/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-caramel" />
            <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Brew Guide</span>
            <span className="w-8 h-[2px] bg-caramel" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso mb-4"
          >
            Master your brew
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-coffee text-lg max-w-xl mx-auto"
          >
            Perfect recipes for every brewing method. Follow these guides for café-quality coffee at home.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {brewMethods.map((method) => (
            <BrewTab
              key={method.id}
              method={method}
              isActive={activeMethod === method.id}
              onClick={() => setActiveMethod(method.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeMethod}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden depth-shadow-lg"
              >
                <img
                  src={currentMethod.image || "/placeholder.svg"}
                  alt={currentMethod.name}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </motion.div>

              {/* Content */}
              <div className="bg-cream rounded-3xl p-8 md:p-10 depth-shadow">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-espresso mb-6">
                  {currentMethod.name} Guide
                </h3>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <StatCard icon={Coffee} label="Grind Size" value={currentMethod.grind} delay={0} />
                  <StatCard icon={Droplets} label="Brew Ratio" value={currentMethod.ratio} delay={0.1} />
                  <StatCard icon={Clock} label="Brew Time" value={currentMethod.time} delay={0.2} />
                  <StatCard icon={Thermometer} label="Water Temp" value={currentMethod.temp} delay={0.3} />
                </div>

                {/* Pro tip */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-caramel/10 to-gold/10 rounded-2xl p-5 border-l-4 border-caramel"
                >
                  <p className="text-coffee">
                    <span className="font-semibold text-espresso">Pro tip:</span> {currentMethod.tip}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
