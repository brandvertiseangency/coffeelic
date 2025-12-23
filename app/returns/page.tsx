"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { RefreshCw, Shield, Clock, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const policies = [
  {
    icon: Shield,
    title: "Satisfaction Guarantee",
    description: "If you're not completely satisfied with your coffee, we'll make it right. No questions asked.",
  },
  {
    icon: Clock,
    title: "14-Day Window",
    description: "You have 14 days from the date of delivery to request a return or exchange.",
  },
  {
    icon: RefreshCw,
    title: "Easy Process",
    description: "Simply contact us, and we'll guide you through the return process step by step.",
  },
  {
    icon: MessageCircle,
    title: "Responsive Support",
    description: "Our team typically responds within 24 hours to resolve any issues you may have.",
  },
]

const steps = [
  {
    step: "01",
    title: "Contact Us",
    description: "Reach out via email or phone within 14 days of receiving your order.",
  },
  {
    step: "02",
    title: "Share Details",
    description: "Tell us about the issue and share photos if the product arrived damaged.",
  },
  {
    step: "03",
    title: "Choose Resolution",
    description: "We'll offer a replacement, exchange, or full refund—your choice.",
  },
  {
    step: "04",
    title: "Get Sorted",
    description: "Refunds are processed within 5-7 business days. Replacements ship immediately.",
  },
]

export default function ReturnsPage() {
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
                <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Our Promise</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso mb-4"
              >
                Returns & <span className="text-caramel">Refunds</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-coffee text-lg"
              >
                We want you to love every cup. If something's not right, we'll fix it.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {policies.map((policy, index) => (
                <motion.div
                  key={policy.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream-light rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-caramel/20 flex items-center justify-center mx-auto mb-4">
                    <policy.icon className="w-6 h-6 text-caramel" />
                  </div>
                  <h3 className="font-heading font-bold text-espresso mb-2">{policy.title}</h3>
                  <p className="text-coffee text-sm">{policy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 md:py-20 bg-cream-light">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">How It Works</h2>
              <p className="text-coffee max-w-xl mx-auto">
                Our simple 4-step process ensures quick resolution of any issues.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-cream rounded-2xl p-6 h-full">
                      <span className="font-heading text-4xl font-bold text-caramel/30">{step.step}</span>
                      <h3 className="font-heading font-bold text-espresso mt-2 mb-2">{step.title}</h3>
                      <p className="text-coffee text-sm">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-caramel/30" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Policy Details */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-cream-light rounded-2xl p-8 md:p-10"
              >
                <h2 className="font-heading text-2xl font-bold text-espresso mb-6">Policy Details</h2>
                <div className="space-y-6 text-coffee">
                  <div>
                    <h3 className="font-heading font-semibold text-espresso mb-2">Eligible for Return</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Unopened bags within 14 days of delivery
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Damaged or defective products (with photos)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Wrong product delivered
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Quality concerns (we'll investigate and make it right)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-espresso mb-2">Refund Timeline</h3>
                    <p className="text-sm">
                      Once approved, refunds are processed within 5-7 business days. The amount will be credited to your
                      original payment method. Bank processing times may add 2-3 additional days.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-espresso mb-2">Exchange Policy</h3>
                    <p className="text-sm">
                      Prefer a different roast or grind? We're happy to exchange your coffee for another product of
                      equal or lesser value. If you'd like something pricier, you can pay the difference.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-espresso mb-2">Subscription Orders</h3>
                    <p className="text-sm">
                      Subscription orders follow the same return policy. You can also pause, skip, or cancel your
                      subscription at any time through your account dashboard.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-cream-light">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-caramel to-caramel-dark rounded-3xl p-10 text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-espresso mb-4">
                Need help with a return?
              </h2>
              <p className="text-espresso/70 mb-6">Our support team is ready to assist you with any concerns.</p>
              <Link href="/contact">
                <Button className="bg-espresso hover:bg-espresso-light text-cream rounded-full px-8 py-6 font-heading font-semibold">
                  Contact Support
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
