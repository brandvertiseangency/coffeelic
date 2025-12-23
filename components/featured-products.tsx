"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, Eye } from "lucide-react"

const products = [
  {
    name: "Light Roast",
    roastLevel: "Bright & Aromatic",
    flavor: "Citrus, Floral, Tea-like",
    origin: "Ethiopian Yirgacheffe",
    price: "₹479",
    weight: "250g",
    image: "/light-roast-coffee-beans-bag-premium-packaging.jpg",
    gradient: "from-amber-50 via-amber-100 to-orange-50",
  },
  {
    name: "Medium Roast",
    roastLevel: "Balanced & Smooth",
    flavor: "Chocolate, Nutty, Caramel",
    origin: "Colombian Supremo",
    price: "₹499",
    weight: "250g",
    image: "/medium-roast-coffee-beans-bag-premium-packaging.jpg",
    gradient: "from-orange-50 via-amber-100 to-yellow-50",
  },
  {
    name: "Dark Roast",
    roastLevel: "Bold & Intense",
    flavor: "Smoky, Spicy, Dark Chocolate",
    origin: "Sumatra Mandheling",
    price: "₹549",
    weight: "250g",
    image: "/dark-roast-coffee-beans-bag-premium-packaging-brow.jpg",
    gradient: "from-amber-100 via-orange-100 to-amber-50",
  },
  {
    name: "Espresso Blend",
    roastLevel: "Rich Crema Finish",
    flavor: "Bittersweet, Roasted, Full Body",
    origin: "House Blend",
    price: "₹599",
    weight: "250g",
    image: "/espresso-blend-coffee-beans-bag-premium-packaging-.jpg",
    gradient: "from-yellow-50 via-amber-50 to-orange-50",
  },
]

function ProductCard({
  product,
  index,
  isInView,
}: { product: (typeof products)[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`relative bg-gradient-to-br ${product.gradient} rounded-3xl p-6 md:p-8 depth-shadow hover:depth-shadow-lg transition-all duration-500 h-full flex flex-col overflow-hidden`}
      >
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <motion.div animate={isHovered ? { y: -5 } : { y: 0 }} transition={{ duration: 0.5 }}>
            <motion.img
              animate={isHovered ? { scale: 1.08, rotate: 2 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-[200px] md:h-[240px] object-cover rounded-2xl"
            />
          </motion.div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-espresso/60 backdrop-blur-sm flex items-center justify-center gap-3 rounded-2xl"
              >
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-cream flex items-center justify-center"
                >
                  <Eye className="w-5 h-5 text-espresso" />
                </motion.button>
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-caramel flex items-center justify-center"
                >
                  <ShoppingBag className="w-5 h-5 text-espresso" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Origin tag */}
          <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm text-espresso text-xs font-semibold px-3 py-1.5 rounded-full">
            {product.origin}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {/* Roast level */}
          <span className="text-caramel-dark text-xs font-bold uppercase tracking-wider mb-2">
            {product.roastLevel}
          </span>

          {/* Name */}
          <h3 className="font-heading text-xl md:text-2xl font-bold text-espresso mb-2">{product.name}</h3>

          {/* Flavor notes */}
          <p className="text-coffee text-sm mb-4 leading-relaxed">{product.flavor}</p>

          <div className="mt-auto pt-4 border-t border-espresso/10">
            <div className="flex items-end justify-between">
              <div>
                <span className="font-heading text-2xl md:text-3xl font-bold text-espresso">{product.price}</span>
                <span className="text-coffee/60 text-sm ml-2">/ {product.weight}</span>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-espresso hover:bg-espresso-light text-cream rounded-full px-5">
                  Add
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-caramel to-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ originX: 0 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="products" className="py-32 md:py-48 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[2px] bg-caramel" />
              <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Our Collection</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso leading-tight"
            >
              Discover your
              <br />
              <span className="text-caramel">perfect roast</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-espresso font-heading font-semibold text-lg group"
            >
              View all coffees
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <p className="text-coffee/50 text-sm mt-1">12 varieties available</p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-cream-light rounded-full px-6 py-4">
            <span className="text-coffee">Need help choosing?</span>
            <motion.a
              href="#brew-guide"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-caramel text-espresso font-heading font-semibold px-5 py-2 rounded-full"
            >
              Try our Brew Guide
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
