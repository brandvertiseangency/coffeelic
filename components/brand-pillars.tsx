"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Leaf, Globe, Coffee } from "lucide-react"

const pillars = [
  {
    icon: Coffee,
    title: "Freshly Roasted",
    subtitle: "In Small Batches",
    description:
      "Every batch is carefully roasted to order, ensuring peak freshness and flavor in every cup you brew at home.",
    stat: "48hrs",
    statLabel: "From roast to door",
  },
  {
    icon: Globe,
    title: "Ethically Sourced",
    subtitle: "Coffee Beans",
    description:
      "We partner with farmers who share our values — fair wages, sustainable practices, exceptional quality beans.",
    stat: "12+",
    statLabel: "Partner farms",
  },
  {
    icon: Leaf,
    title: "Crafted for",
    subtitle: "Indian Coffee Lovers",
    description: "Profiles designed for espresso, filter, and modern brews — celebrating India's rich coffee heritage.",
    stat: "100%",
    statLabel: "Specialty grade",
  },
]

function PillarCard({ pillar, index, isInView }: { pillar: (typeof pillars)[0]; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="relative bg-cream rounded-3xl p-8 md:p-10 depth-shadow hover:depth-shadow-lg transition-all duration-500 overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-caramel/10 to-transparent rounded-bl-full" />

        {/* Icon with animated container */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cream-light to-cream border border-espresso/5 mb-6 group-hover:border-caramel/20 transition-colors"
        >
          <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
            <pillar.icon className="w-7 h-7 text-caramel" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Title with line */}
        <div className="mb-4">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-espresso leading-tight">{pillar.title}</h3>
          <span className="font-heading text-lg md:text-xl font-semibold text-caramel">{pillar.subtitle}</span>
        </div>

        {/* Description */}
        <p className="text-coffee leading-relaxed mb-6">{pillar.description}</p>

        {/* Stat highlight */}
        <div className="flex items-end gap-2 pt-4 border-t border-espresso/5">
          <span className="font-heading text-3xl md:text-4xl font-bold text-espresso">{pillar.stat}</span>
          <span className="text-coffee/60 text-sm mb-1">{pillar.statLabel}</span>
        </div>

        {/* Hover indicator line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-caramel to-gold"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          style={{ originX: 0 }}
        />
      </div>
    </motion.div>
  )
}

export function BrandPillars() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <section ref={sectionRef} className="py-28 md:py-40 bg-cream-light relative overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-caramel/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <motion.span
              className="w-8 h-[2px] bg-caramel"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Why Coffeelic</span>
            <motion.span
              className="w-8 h-[2px] bg-caramel"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-espresso"
          >
            The Coffeelic Difference
          </motion.h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
