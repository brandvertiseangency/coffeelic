"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ShoppingBag, Eye, X, Star, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categories = ["All", "Light Roast", "Medium Roast", "Dark Roast", "Blends", "Single Origin"]

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    roastLevel: "Light Roast",
    flavor: "Citrus, Floral, Tea-like",
    origin: "Ethiopia",
    price: 479,
    weight: "250g",
    image: "/light-roast-coffee-beans-bag-premium-packaging-eth.jpg",
    category: "Light Roast",
    rating: 4.9,
    reviews: 127,
    bestseller: true,
  },
  {
    id: 2,
    name: "Colombian Supremo",
    roastLevel: "Medium Roast",
    flavor: "Chocolate, Nutty, Caramel",
    origin: "Colombia",
    price: 499,
    weight: "250g",
    image: "/medium-roast-coffee-beans-bag-premium-packaging-co.jpg",
    category: "Medium Roast",
    rating: 4.8,
    reviews: 98,
    bestseller: false,
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    roastLevel: "Dark Roast",
    flavor: "Smoky, Spicy, Dark Chocolate",
    origin: "Indonesia",
    price: 549,
    weight: "250g",
    image: "/dark-roast-coffee-beans-bag-premium-packaging-suma.jpg",
    category: "Dark Roast",
    rating: 4.7,
    reviews: 86,
    bestseller: false,
  },
  {
    id: 4,
    name: "House Espresso Blend",
    roastLevel: "Medium-Dark",
    flavor: "Bittersweet, Roasted, Full Body",
    origin: "Blend",
    price: 599,
    weight: "250g",
    image: "/espresso-blend-coffee-beans-bag-premium-packaging.jpg",
    category: "Blends",
    rating: 4.9,
    reviews: 234,
    bestseller: true,
  },
  {
    id: 5,
    name: "Coorg Single Origin",
    roastLevel: "Medium Roast",
    flavor: "Spicy, Earthy, Chocolate",
    origin: "India",
    price: 449,
    weight: "250g",
    image: "/indian-coorg-coffee-beans-bag-premium-packaging.jpg",
    category: "Single Origin",
    rating: 4.8,
    reviews: 156,
    bestseller: true,
  },
  {
    id: 6,
    name: "Chikmagalur Estate",
    roastLevel: "Medium Roast",
    flavor: "Fruity, Wine-like, Balanced",
    origin: "India",
    price: 469,
    weight: "250g",
    image: "/chikmagalur-coffee-beans-bag-premium-packaging.jpg",
    category: "Single Origin",
    rating: 4.7,
    reviews: 89,
    bestseller: false,
  },
  {
    id: 7,
    name: "Morning Blend",
    roastLevel: "Light-Medium",
    flavor: "Bright, Smooth, Citrus",
    origin: "Blend",
    price: 429,
    weight: "250g",
    image: "/morning-blend-coffee-beans-bag-premium-packaging-l.jpg",
    category: "Blends",
    rating: 4.6,
    reviews: 112,
    bestseller: false,
  },
  {
    id: 8,
    name: "French Roast",
    roastLevel: "Dark Roast",
    flavor: "Bold, Smoky, Intense",
    origin: "Blend",
    price: 529,
    weight: "250g",
    image: "/french-roast-dark-coffee-beans-bag-premium-packagi.jpg",
    category: "Dark Roast",
    rating: 4.5,
    reviews: 67,
    bestseller: false,
  },
]

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

function ProductCard({
  product,
  index,
  isInView,
  onAddToCart,
}: {
  product: (typeof products)[0]
  index: number
  isInView: boolean
  onAddToCart: (product: (typeof products)[0]) => void
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.1 + index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4 }}
        className="relative bg-cream-light rounded-2xl overflow-hidden depth-shadow hover:depth-shadow-lg transition-all"
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <motion.div animate={isHovered ? { scale: 1.05 } : { scale: 1 }} transition={{ duration: 0.5 }}>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={400}
              className="w-full aspect-square object-cover"
            />
          </motion.div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-espresso/60 backdrop-blur-sm flex items-center justify-center gap-3"
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
                  onClick={() => onAddToCart(product)}
                  className="w-12 h-12 rounded-full bg-caramel flex items-center justify-center"
                >
                  <ShoppingBag className="w-5 h-5 text-espresso" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.bestseller && (
              <span className="bg-caramel text-espresso text-xs font-bold px-3 py-1 rounded-full">Bestseller</span>
            )}
            <span className="bg-cream/90 backdrop-blur-sm text-espresso text-xs font-medium px-3 py-1 rounded-full">
              {product.origin}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-caramel text-caramel" />
            <span className="text-sm font-medium text-espresso">{product.rating}</span>
            <span className="text-sm text-coffee/60">({product.reviews})</span>
          </div>
          <span className="text-caramel-dark text-xs font-bold uppercase tracking-wider">{product.roastLevel}</span>
          <h3 className="font-heading text-lg font-bold text-espresso mt-1 mb-1">{product.name}</h3>
          <p className="text-coffee text-sm mb-4">{product.flavor}</p>
          <div className="flex items-end justify-between">
            <div>
              <span className="font-heading text-2xl font-bold text-espresso">₹{product.price}</span>
              <span className="text-coffee/60 text-sm ml-1">/ {product.weight}</span>
            </div>
            <Button
              size="sm"
              onClick={() => onAddToCart(product)}
              className="bg-espresso hover:bg-espresso-light text-cream rounded-full px-4"
            >
              Add
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

  const addToCart = (product: (typeof products)[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-cream-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="w-12 h-[2px] bg-caramel" />
                <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Our Collection</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso mb-4"
              >
                Shop our finest <span className="text-caramel">roasts</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-coffee text-lg"
              >
                Hand-selected beans, expertly roasted, delivered fresh to your door.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section ref={sectionRef} className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                    activeCategory === category
                      ? "bg-espresso text-cream"
                      : "bg-cream-light text-coffee hover:bg-espresso/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  isInView={isInView}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Cart Sidebar */}
        <AnimatePresence>
          {isCartOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 bg-espresso/50 backdrop-blur-sm z-50"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream z-50 flex flex-col"
              >
                <div className="flex items-center justify-between p-6 border-b border-espresso/10">
                  <h2 className="font-heading text-xl font-bold text-espresso">Your Cart ({cartCount})</h2>
                  <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-cream-light rounded-full">
                    <X className="w-5 h-5 text-espresso" />
                  </button>
                </div>

                <div className="flex-1 overflow-auto p-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag className="w-12 h-12 text-coffee/30 mx-auto mb-4" />
                      <p className="text-coffee">Your cart is empty</p>
                      <Button
                        onClick={() => setIsCartOpen(false)}
                        className="mt-4 bg-caramel hover:bg-caramel-dark text-espresso rounded-full"
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 bg-cream-light rounded-xl p-4">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-heading font-bold text-espresso">{item.name}</h3>
                            <p className="text-coffee text-sm">₹{item.price}</p>
                            <div className="flex items-center gap-3 mt-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-full bg-cream flex items-center justify-center hover:bg-espresso/10"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-full bg-cream flex items-center justify-center hover:bg-espresso/10"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <p className="font-heading font-bold text-espresso">₹{item.price * item.quantity}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="p-6 border-t border-espresso/10">
                    <div className="flex justify-between mb-4">
                      <span className="text-coffee">Subtotal</span>
                      <span className="font-heading font-bold text-espresso">₹{cartTotal}</span>
                    </div>
                    <Button className="w-full bg-espresso hover:bg-espresso-light text-cream rounded-full py-6 font-heading font-semibold">
                      Checkout
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-center text-coffee/60 text-sm mt-3">Free shipping on orders over ₹999</p>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Floating Cart Button */}
        {cartCount > 0 && !isCartOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-espresso text-cream rounded-full flex items-center justify-center depth-shadow-lg z-40 hover:bg-espresso-light transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-caramel text-espresso text-xs font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </motion.button>
        )}
      </main>
      <Footer />
    </>
  )
}
