"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Truck, Clock, MapPin, Package, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const shippingZones = [
  {
    zone: "Metro Cities",
    cities: "Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Kolkata, Pune",
    delivery: "2-3 business days",
    cost: "Free on orders above ₹999",
  },
  {
    zone: "Tier 1 Cities",
    cities: "Ahmedabad, Jaipur, Lucknow, Kochi, Chandigarh, and more",
    delivery: "3-5 business days",
    cost: "Free on orders above ₹999",
  },
  {
    zone: "Rest of India",
    cities: "All other serviceable pin codes",
    delivery: "5-7 business days",
    cost: "Free on orders above ₹999",
  },
]

const features = [
  {
    icon: Package,
    title: "Freshly Roasted",
    description: "All orders are roasted within 24-48 hours of placement for maximum freshness.",
  },
  {
    icon: Truck,
    title: "Careful Packaging",
    description: "Your coffee is packed in valve-sealed bags inside sturdy boxes to ensure it arrives perfectly.",
  },
  {
    icon: Clock,
    title: "Quick Dispatch",
    description: "Orders placed before 2 PM are shipped the same day (Mon-Sat).",
  },
  {
    icon: MapPin,
    title: "Pan-India Delivery",
    description: "We deliver to 25,000+ pin codes across India through trusted courier partners.",
  },
]

export default function ShippingPage() {
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
                <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Delivery</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso mb-4"
              >
                Shipping <span className="text-caramel">Information</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-coffee text-lg"
              >
                Fresh coffee delivered to your doorstep, anywhere in India.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream-light rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-caramel/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-caramel" />
                  </div>
                  <h3 className="font-heading font-bold text-espresso mb-2">{feature.title}</h3>
                  <p className="text-coffee text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Zones */}
        <section className="py-12 md:py-20 bg-cream-light">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">Delivery Times & Costs</h2>
              <p className="text-coffee max-w-xl mx-auto">
                We partner with leading courier services to ensure your coffee arrives fresh and on time.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {shippingZones.map((zone, index) => (
                  <motion.div
                    key={zone.zone}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-cream rounded-2xl p-6 md:p-8 depth-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-espresso mb-2">{zone.zone}</h3>
                        <p className="text-coffee text-sm">{zone.cities}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="bg-cream-light rounded-xl px-4 py-3 text-center">
                          <p className="text-xs text-coffee/60 uppercase tracking-wider mb-1">Delivery</p>
                          <p className="font-heading font-bold text-espresso">{zone.delivery}</p>
                        </div>
                        <div className="bg-caramel/20 rounded-xl px-4 py-3 text-center">
                          <p className="text-xs text-coffee/60 uppercase tracking-wider mb-1">Cost</p>
                          <p className="font-heading font-bold text-espresso">{zone.cost}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 p-6 bg-espresso/5 rounded-2xl"
              >
                <h4 className="font-heading font-bold text-espresso mb-3">Please Note:</h4>
                <ul className="space-y-2 text-coffee text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-caramel mt-0.5 flex-shrink-0" />
                    Orders below ₹999 incur a flat shipping fee of ₹99.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-caramel mt-0.5 flex-shrink-0" />
                    Delivery times are estimates and may vary during peak seasons or holidays.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-caramel mt-0.5 flex-shrink-0" />
                    You'll receive tracking information via email once your order ships.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-caramel mt-0.5 flex-shrink-0" />
                    For specific delivery queries, please contact our support team.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-caramel to-caramel-dark rounded-3xl p-10 text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-espresso mb-4">Ready to order?</h2>
              <p className="text-espresso/70 mb-6">
                Browse our collection and get fresh coffee delivered to your door.
              </p>
              <Link href="/shop">
                <Button className="bg-espresso hover:bg-espresso-light text-cream rounded-full px-8 py-6 font-heading font-semibold">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
