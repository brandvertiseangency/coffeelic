"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, CheckCircle, Sparkles } from "lucide-react"

export function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-cream relative overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-caramel/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-caramel/10 mb-6"
          >
            <Sparkles className="w-7 h-7 text-caramel" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-caramel" />
            <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Stay Connected</span>
            <span className="w-8 h-[2px] bg-caramel" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso leading-tight mb-6"
          >
            Subscribe for <span className="text-caramel">exclusive drops</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-coffee text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Be the first to know about new roasts, brewing tips, and limited edition releases. Join 10,000+ coffee
            lovers.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="relative"
          >
            <motion.div
              animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
              className={`flex flex-col sm:flex-row gap-3 p-2 rounded-full bg-cream-light border-2 transition-all duration-500 depth-shadow ${
                isFocused ? "border-caramel shadow-lg shadow-caramel/10" : "border-transparent"
              }`}
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 h-14 rounded-full px-6 border-0 bg-transparent text-espresso placeholder:text-coffee/40 focus-visible:ring-0 text-base"
                required
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-caramel hover:bg-caramel-dark text-espresso font-heading font-semibold rounded-full h-14 px-8 transition-all disabled:opacity-100"
                >
                  {isSubmitted ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      You're in!
                    </motion.div>
                  ) : (
                    <>
                      Subscribe
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-coffee/50 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              No spam, ever
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Unsubscribe anytime
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Weekly drops only
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
