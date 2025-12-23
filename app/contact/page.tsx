"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Coffee Lane, Indiranagar", "Bangalore, Karnataka 560038"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 80 4567 8901"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@coffeelic.com", "support@coffeelic.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 9:00 AM - 6:00 PM"],
    },
  ]

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
                <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Get in Touch</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso mb-4"
              >
                We'd love to <span className="text-caramel">hear from you</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-coffee text-lg"
              >
                Have questions about our coffee, wholesale inquiries, or just want to say hello? Reach out anytime.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={formRef} className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-espresso mb-8">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-cream-light rounded-2xl p-6"
                    >
                      <div className="w-12 h-12 rounded-full bg-caramel/20 flex items-center justify-center mb-4">
                        <item.icon className="w-5 h-5 text-caramel" />
                      </div>
                      <h3 className="font-heading font-bold text-espresso mb-2">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-coffee text-sm">
                          {detail}
                        </p>
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 rounded-2xl overflow-hidden h-[250px] bg-cream-light"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0088898282645!2d77.6345!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzgnMDQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Coffeelic Location"
                  />
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-cream-light rounded-3xl p-8 md:p-10">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-espresso mb-6">Send us a message</h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-espresso mb-2">Message Sent!</h3>
                      <p className="text-coffee mb-6">We'll get back to you within 24 hours.</p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-caramel hover:bg-caramel-dark text-espresso rounded-full"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-espresso mb-2">Name</label>
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-cream border border-espresso/10 focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-espresso mb-2">Email</label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-cream border border-espresso/10 focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-espresso mb-2">Subject</label>
                        <input
                          type="text"
                          required
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-cream border border-espresso/10 focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all"
                          placeholder="How can we help?"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-espresso mb-2">Message</label>
                        <textarea
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-cream border border-espresso/10 focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all resize-none"
                          placeholder="Your message..."
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-espresso hover:bg-espresso-light text-cream rounded-full py-6 font-heading font-semibold disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
