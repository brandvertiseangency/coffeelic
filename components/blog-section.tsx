"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"

const posts = [
  {
    title: "How roast profiles affect flavor",
    excerpt:
      "Understanding the science behind light, medium, and dark roasts and how each brings out different characteristics in your cup.",
    date: "Dec 20, 2024",
    category: "Education",
    readTime: "5 min",
    image: "/coffee-roasting-process-beans-drum-roaster.jpg",
  },
  {
    title: "Choosing the right grind size",
    excerpt:
      "A complete guide to grind sizes for every brewing method, from espresso to cold brew, and why it matters.",
    date: "Dec 15, 2024",
    category: "Brewing Tips",
    readTime: "4 min",
    image: "/coffee-grind-sizes-espresso-french-press.jpg",
  },
  {
    title: "Coffee storage secrets",
    excerpt: "Keep your beans fresh longer with these essential storage practices and common mistakes to avoid.",
    date: "Dec 10, 2024",
    category: "Guide",
    readTime: "3 min",
    image: "/dark-roast-coffee-beans-bag-premium-packaging-brow.jpg",
  },
]

function BlogCard({ post, index, isInView }: { post: (typeof posts)[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4 }}
        className="bg-cream rounded-3xl overflow-hidden depth-shadow hover:depth-shadow-lg transition-all duration-500"
      >
        {/* Image with overlay */}
        <div className="relative overflow-hidden">
          <motion.div animate={isHovered ? { scale: 1.08 } : { scale: 1 }} transition={{ duration: 0.6 }}>
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-[220px] object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-espresso/50 flex items-center justify-center"
          >
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              className="text-cream font-heading font-bold text-lg"
            >
              Read Article
            </motion.span>
          </motion.div>

          {/* Category tag */}
          <div className="absolute top-4 left-4 bg-caramel text-espresso text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {post.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-4 text-coffee/60 text-sm">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl md:text-2xl font-bold text-espresso mb-3 group-hover:text-caramel transition-colors leading-tight">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-coffee leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>

          {/* Read more link */}
          <motion.span className="inline-flex items-center text-caramel font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.span>
        </div>
      </motion.div>
    </motion.article>
  )
}

export function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="blog" className="py-32 md:py-48 bg-cream-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-caramel/5 to-transparent rounded-full blur-3xl" />

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
              <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">The Journal</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-espresso leading-tight"
            >
              Stories & tips
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-coffee text-lg mt-4 max-w-md"
            >
              Brewing knowledge, roasting insights, and coffee culture
            </motion.p>
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
              View all posts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <p className="text-coffee/50 text-sm mt-1">24 articles</p>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
