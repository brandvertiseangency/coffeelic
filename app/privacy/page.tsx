"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number) when you create an account or place an order",
        "Shipping and billing addresses for order fulfillment",
        "Payment information (processed securely through our payment partners)",
        "Order history and preferences to improve your shopping experience",
        "Device and browser information for website optimization",
        "Communication preferences and newsletter subscriptions",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "Process and fulfill your orders, including shipping and delivery",
        "Send order confirmations, shipping updates, and delivery notifications",
        "Respond to your inquiries and provide customer support",
        "Send promotional communications (with your consent)",
        "Improve our website, products, and services",
        "Prevent fraud and maintain security",
        "Comply with legal obligations",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "We share information with shipping partners to deliver your orders",
        "Payment processors receive necessary data to process transactions securely",
        "We may share data with service providers who assist our operations",
        "We may disclose information when required by law or to protect our rights",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We use industry-standard SSL encryption for all data transmission",
        "Payment information is processed through PCI-compliant payment gateways",
        "We regularly review and update our security practices",
        "Access to personal data is restricted to authorized personnel only",
        "We maintain secure backups and disaster recovery procedures",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Access the personal information we hold about you",
        "Request correction of inaccurate information",
        "Request deletion of your data (subject to legal requirements)",
        "Opt-out of marketing communications at any time",
        "Export your data in a portable format",
        "Lodge a complaint with the relevant data protection authority",
      ],
    },
    {
      title: "Cookies & Tracking",
      content: [
        "We use essential cookies to enable core website functionality",
        "Analytics cookies help us understand how visitors use our site",
        "Marketing cookies enable personalized advertising (with consent)",
        "You can manage cookie preferences through your browser settings",
        "Disabling certain cookies may affect website functionality",
      ],
    },
    {
      title: "Contact Us",
      content: [
        "For privacy-related inquiries, email us at privacy@coffeelic.com",
        "You can also reach us at +91 98765 43210",
        "Write to us at: 123 Coffee Lane, Indiranagar, Bangalore 560038",
        "We aim to respond to all inquiries within 48 hours",
      ],
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
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso mb-4"
              >
                Privacy <span className="text-caramel">Policy</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-coffee text-lg"
              >
                Your privacy matters to us. Here's how we collect, use, and protect your information.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-coffee/60 text-sm mt-4"
              >
                Last updated: December 20, 2024
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <p className="text-coffee leading-relaxed">
                  At Coffeelic, we are committed to protecting your privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website, make a purchase, or interact with us in any way.
                </p>
              </motion.div>

              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="mb-10"
                >
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-espresso mb-4">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-coffee">
                        <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-2.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 p-6 bg-cream-light rounded-2xl"
              >
                <h3 className="font-heading font-bold text-espresso mb-3">Policy Updates</h3>
                <p className="text-coffee text-sm">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this
                  Privacy Policy periodically for any changes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
