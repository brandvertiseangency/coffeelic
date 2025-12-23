"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categories = ["All", "Brewing Tips", "Education", "Recipes", "Behind the Scenes"]

const posts = [
  {
    slug: "how-roast-profiles-affect-flavor",
    title: "How roast profiles affect flavor",
    excerpt:
      "Understanding the science behind light, medium, and dark roasts and how each brings out different characteristics in your cup.",
    date: "Dec 20, 2024",
    category: "Education",
    readTime: "5 min",
    image: "/coffee-roasting-process-beans-drum-roaster.jpg",
    featured: true,
  },
  {
    slug: "choosing-the-right-grind-size",
    title: "Choosing the right grind size",
    excerpt:
      "A complete guide to grind sizes for every brewing method, from espresso to cold brew, and why it matters.",
    date: "Dec 15, 2024",
    category: "Brewing Tips",
    readTime: "4 min",
    image: "/coffee-grind-sizes-espresso-french-press-compariso.jpg",
    featured: false,
  },
  {
    slug: "coffee-storage-secrets",
    title: "Coffee storage secrets",
    excerpt: "Keep your beans fresh longer with these essential storage practices and common mistakes to avoid.",
    date: "Dec 10, 2024",
    category: "Education",
    readTime: "3 min",
    image: "/coffee-beans-storage-container-airtight-premium.jpg",
    featured: false,
  },
  {
    slug: "perfect-pour-over-technique",
    title: "Perfect pour-over technique",
    excerpt: "Master the art of pour-over coffee with our step-by-step guide to achieving cafe-quality brews at home.",
    date: "Dec 5, 2024",
    category: "Brewing Tips",
    readTime: "6 min",
    image: "/pour-over-coffee-brewing-technique-kettle.jpg",
    featured: false,
  },
  {
    slug: "south-indian-filter-coffee-recipe",
    title: "Traditional South Indian filter coffee",
    excerpt: "Learn how to make authentic South Indian filter coffee with the perfect ratio and technique.",
    date: "Nov 28, 2024",
    category: "Recipes",
    readTime: "4 min",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    slug: "visit-to-coorg-coffee-estates",
    title: "A visit to Coorg coffee estates",
    excerpt: "Join us on a journey to the misty hills of Coorg, where we source some of our finest beans.",
    date: "Nov 20, 2024",
    category: "Behind the Scenes",
    readTime: "7 min",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = posts.find((p) => p.featured)
  const regularPosts = filteredPosts.filter((p) => !p.featured || activeCategory !== "All")

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
                <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">The Journal</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso mb-4"
              >
                Stories & <span className="text-caramel">brewing tips</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-coffee text-lg"
              >
                Discover the art and science of great coffee through our articles.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section ref={sectionRef} className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            {/* Search & Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-4 justify-between mb-12"
            >
              <div className="flex flex-wrap gap-3">
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
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-coffee/50" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 pr-4 py-2.5 rounded-full bg-cream-light border-none focus:ring-2 focus:ring-caramel text-sm w-full md:w-64"
                />
              </div>
            </motion.div>

            {/* Featured Post */}
            {activeCategory === "All" && featuredPost && (
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <Link href={`/blog/${featuredPost.slug}`} className="group">
                  <div className="grid lg:grid-cols-2 gap-8 bg-cream-light rounded-3xl overflow-hidden depth-shadow hover:depth-shadow-lg transition-all">
                    <div className="relative overflow-hidden">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        width={800}
                        height={600}
                        className="w-full h-[300px] lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-caramel text-espresso text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                        Featured
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4 text-coffee/60 text-sm">
                        <span className="bg-espresso/10 px-3 py-1 rounded-full">{featuredPost.category}</span>
                        <span>{featuredPost.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-espresso mb-4 group-hover:text-caramel transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-coffee leading-relaxed mb-6">{featuredPost.excerpt}</p>
                      <span className="inline-flex items-center text-caramel font-semibold group-hover:gap-3 gap-2 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group">
                    <div className="bg-cream-light rounded-2xl overflow-hidden depth-shadow hover:depth-shadow-lg transition-all h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-caramel text-espresso text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-3 text-coffee/60 text-sm">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-espresso mb-2 group-hover:text-caramel transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-coffee text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                        <span className="inline-flex items-center text-caramel font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-coffee text-lg">No articles found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setActiveCategory("All")
                    setSearchQuery("")
                  }}
                  className="mt-4 bg-caramel hover:bg-caramel-dark text-espresso rounded-full"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
