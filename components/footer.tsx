"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowUp } from "lucide-react"

const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Shop", href: "/shop" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer ref={footerRef} className="bg-espresso pt-24 md:pt-32 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />
      </div>

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-caramel text-espresso flex items-center justify-center depth-shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-cream rounded-lg p-2 inline-block"
              >
                <Image
                  src="/images/coffeelic-logo.png"
                  alt="Coffeelic"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                />
              </motion.div>
            </Link>
            <p className="text-cream/50 leading-relaxed mb-6 text-lg">Crafted Roasts. Honest Coffee.</p>
            <p className="text-cream/30 text-sm mb-6">Delivering exceptional flavor from bean to cup since 2018.</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-11 h-11 rounded-full bg-cream/5 flex items-center justify-center hover:bg-caramel transition-colors group border border-cream/10"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-cream/60 group-hover:text-espresso transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-bold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-caramel transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-caramel mr-0 group-hover:mr-2 transition-all" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-bold text-cream mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-caramel transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-caramel mr-0 group-hover:mr-2 transition-all" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg font-bold text-cream mb-6">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-caramel" />
                </div>
                <span className="text-cream/50">
                  123 Coffee Lane, Indiranagar
                  <br />
                  Bangalore 560038
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-caramel" />
                </div>
                <a href="tel:+919876543210" className="text-cream/50 hover:text-caramel transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-caramel" />
                </div>
                <a href="mailto:hello@coffeelic.com" className="text-cream/50 hover:text-caramel transition-colors">
                  hello@coffeelic.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-cream/30 text-sm">© 2025 Coffeelic. All rights reserved.</p>
          <p className="text-cream/30 text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Crafted with care in India
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
