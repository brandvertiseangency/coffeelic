"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const faqCategories = [
  {
    name: "Orders & Shipping",
    faqs: [
      {
        question: "How long does shipping take?",
        answer:
          "We ship all orders within 24 hours of placement. Delivery typically takes 3-5 business days for metro cities and 5-7 business days for other locations across India.",
      },
      {
        question: "Do you offer free shipping?",
        answer:
          "Yes! We offer free shipping on all orders above ₹999. For orders below this amount, a flat shipping fee of ₹99 applies.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Once your order ships, you'll receive an email with tracking information. You can also track your order by logging into your account on our website.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Currently, we only ship within India. We're working on expanding to international shipping soon. Sign up for our newsletter to be notified when we do!",
      },
    ],
  },
  {
    name: "Products",
    faqs: [
      {
        question: "How fresh is your coffee?",
        answer:
          "All our coffee is roasted to order. This means your beans are roasted within 24-48 hours of your order being placed, ensuring maximum freshness and flavor.",
      },
      {
        question: "What grind options do you offer?",
        answer:
          "We offer whole beans (recommended for freshness), espresso fine, filter medium, French press coarse, and cold brew extra coarse. You can select your preference at checkout.",
      },
      {
        question: "How should I store my coffee?",
        answer:
          "Store your coffee in an airtight container at room temperature, away from direct sunlight, heat, and moisture. Avoid refrigerating as it can introduce moisture. Use within 4-6 weeks of roasting for optimal flavor.",
      },
      {
        question: "Are your coffees organic?",
        answer:
          "Many of our single-origin coffees are certified organic. Look for the organic badge on product pages. All our coffees are sustainably sourced regardless of certification.",
      },
    ],
  },
  {
    name: "Returns & Refunds",
    faqs: [
      {
        question: "What is your return policy?",
        answer:
          "We want you to love your coffee! If you're not satisfied, contact us within 14 days of receiving your order. We'll either replace your coffee or provide a full refund.",
      },
      {
        question: "What if my order arrives damaged?",
        answer:
          "Please contact us immediately with photos of the damage. We'll send a replacement at no extra cost or provide a full refund—your choice.",
      },
      {
        question: "How long do refunds take?",
        answer:
          "Refunds are processed within 5-7 business days of approval. The amount will be credited to your original payment method.",
      },
    ],
  },
  {
    name: "Subscriptions",
    faqs: [
      {
        question: "How does the subscription work?",
        answer:
          "Choose your coffee, frequency (weekly, bi-weekly, or monthly), and quantity. We'll automatically ship fresh coffee to your door. You can pause, skip, or cancel anytime.",
      },
      {
        question: "Can I change my subscription?",
        answer:
          "Yes! Log into your account to change your coffee selection, delivery frequency, or quantity at any time. Changes made before your next billing date will apply to your next shipment.",
      },
      {
        question: "Is there a discount for subscriptions?",
        answer:
          "Subscribers enjoy 15% off all orders plus free shipping, regardless of order size. It's our way of saying thanks for your loyalty!",
      },
    ],
  },
]

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: { faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-espresso/10 last:border-none">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="font-heading font-semibold text-espresso group-hover:text-caramel transition-colors pr-4">
          {faq.question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-caramel flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-coffee leading-relaxed pb-5">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const allFaqs = faqCategories.flatMap((cat) => cat.faqs.map((faq) => ({ ...faq, category: cat.name })))

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-cream-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso mb-4"
              >
                Frequently Asked <span className="text-caramel">Questions</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-coffee text-lg mb-8"
              >
                Find answers to common questions about our coffee, orders, and more.
              </motion.p>

              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative max-w-md mx-auto"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee/50" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-cream border border-espresso/10 focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeCategory === "All"
                    ? "bg-espresso text-cream"
                    : "bg-cream-light text-coffee hover:bg-espresso/10"
                }`}
              >
                All
              </button>
              {faqCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                    activeCategory === cat.name
                      ? "bg-espresso text-cream"
                      : "bg-cream-light text-coffee hover:bg-espresso/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </motion.div>

            {/* FAQs */}
            <div className="max-w-3xl mx-auto">
              {searchQuery || activeCategory !== "All" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-cream-light rounded-2xl p-6 md:p-8"
                >
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                      <FAQItem
                        key={`${faq.category}-${index}`}
                        faq={faq}
                        isOpen={openItems[`${faq.category}-${index}`] || false}
                        onToggle={() => toggleItem(`${faq.category}-${index}`)}
                      />
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-coffee mb-4">No questions found matching your search.</p>
                      <Button
                        onClick={() => {
                          setSearchQuery("")
                          setActiveCategory("All")
                        }}
                        className="bg-caramel hover:bg-caramel-dark text-espresso rounded-full"
                      >
                        Clear Search
                      </Button>
                    </div>
                  )}
                </motion.div>
              ) : (
                faqCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                    className="mb-8"
                  >
                    <h2 className="font-heading text-xl font-bold text-espresso mb-4">{category.name}</h2>
                    <div className="bg-cream-light rounded-2xl p-6 md:p-8">
                      {category.faqs.map((faq, faqIndex) => (
                        <FAQItem
                          key={`${category.name}-${faqIndex}`}
                          faq={faq}
                          isOpen={openItems[`${category.name}-${faqIndex}`] || false}
                          onToggle={() => toggleItem(`${category.name}-${faqIndex}`)}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Still Have Questions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-br from-caramel to-caramel-dark rounded-3xl p-10 max-w-2xl mx-auto">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-espresso mb-4">
                  Still have questions?
                </h2>
                <p className="text-espresso/70 mb-6">Can't find what you're looking for? Our team is here to help.</p>
                <Link href="/contact">
                  <Button className="bg-espresso hover:bg-espresso-light text-cream rounded-full px-8 py-6 font-heading font-semibold">
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
