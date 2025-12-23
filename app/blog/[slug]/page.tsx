"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const posts: {
  [key: string]: {
    title: string
    excerpt: string
    date: string
    category: string
    readTime: string
    image: string
    content: string[]
  }
} = {
  "how-roast-profiles-affect-flavor": {
    title: "How roast profiles affect flavor",
    excerpt:
      "Understanding the science behind light, medium, and dark roasts and how each brings out different characteristics in your cup.",
    date: "Dec 20, 2024",
    category: "Education",
    readTime: "5 min",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      "Coffee roasting is both an art and a science. The roast profile—the time and temperature curve a bean follows during roasting—fundamentally transforms the flavor compounds within the coffee bean.",
      "Light roasts are stopped at the first crack, a point where the beans have expanded and released steam. At this stage, the original flavors of the coffee's origin are most prominent. You'll taste bright acidity, fruity notes, and floral aromatics. Light roasts from Ethiopian beans might remind you of blueberries or jasmine, while Central American light roasts often exhibit citrus and apple characteristics.",
      "Medium roasts reach slightly higher temperatures and develop more caramelization. This is where you start to taste the Maillard reaction products—those familiar 'roasty' flavors. The origin characteristics remain, but they're now balanced with notes of caramel, nuts, and chocolate. This is the most popular roast level for good reason: it offers complexity without extremes.",
      "Dark roasts push past the second crack, where oils begin to surface on the bean. At this point, the roast character dominates. You'll taste smoky, bittersweet, and bold flavors. The origin characteristics become less distinct, replaced by the signature taste of the roasting process itself.",
      "At Coffeelic, we carefully select roast profiles to highlight each coffee's unique potential. Our Ethiopian Yirgacheffe shines as a light roast, while our Sumatra Mandheling reveals its earthy complexity best as a dark roast. Understanding these relationships helps us—and you—appreciate each cup even more.",
    ],
  },
  "choosing-the-right-grind-size": {
    title: "Choosing the right grind size",
    excerpt:
      "A complete guide to grind sizes for every brewing method, from espresso to cold brew, and why it matters.",
    date: "Dec 15, 2024",
    category: "Brewing Tips",
    readTime: "4 min",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      "The grind size of your coffee is one of the most critical factors in brewing a great cup. Get it wrong, and even the finest beans will disappoint. Get it right, and you unlock the full potential of your coffee.",
      "Espresso requires a fine grind—almost like powdered sugar. The reason is extraction time. Water passes through an espresso puck in just 25-30 seconds under high pressure. Fine grounds provide enough resistance and surface area for proper extraction in this brief window.",
      "Pour-over and drip coffee use a medium grind, similar to table salt. Water contact time is 2-4 minutes, so you need grounds that allow water to flow through at a steady pace while still extracting the good stuff.",
      "French press needs a coarse grind, like sea salt. Because the grounds steep in water for 4 minutes and are filtered through a metal mesh, finer grounds would over-extract and slip through the filter, creating a muddy, bitter cup.",
      "Cold brew takes the coarsest grind of all. Since extraction happens over 12-24 hours, very coarse grounds prevent over-extraction and make filtering easier. The result is a smooth, sweet concentrate.",
      "Remember: grind fresh whenever possible. Coffee begins losing flavor within minutes of grinding. At Coffeelic, we offer five grind options, but we always recommend whole beans if you have a grinder at home.",
    ],
  },
  "coffee-storage-secrets": {
    title: "Coffee storage secrets",
    excerpt: "Keep your beans fresh longer with these essential storage practices and common mistakes to avoid.",
    date: "Dec 10, 2024",
    category: "Education",
    readTime: "3 min",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      "You've invested in great coffee—now protect that investment. Proper storage is the difference between vibrant, flavorful coffee and stale, flat disappointment.",
      "The four enemies of coffee freshness are air, moisture, heat, and light. Exposure to any of these accelerates the degradation of the delicate flavor compounds that make specialty coffee special.",
      "The ideal storage container is airtight, opaque, and stored at room temperature. Many people make the mistake of refrigerating coffee, but this introduces moisture through condensation and can cause the beans to absorb odors from other foods.",
      "Our coffee bags feature one-way degassing valves that let CO2 escape without letting air in. Once opened, transfer your beans to an airtight container or simply squeeze out excess air and reseal the bag tightly.",
      "For optimal freshness, buy only what you'll use within 4-6 weeks. Coffee is best 3-14 days after roasting, once it has degassed but before significant flavor loss occurs. At Coffeelic, we roast to order, so your beans arrive at peak freshness.",
    ],
  },
  "perfect-pour-over-technique": {
    title: "Perfect pour-over technique",
    excerpt: "Master the art of pour-over coffee with our step-by-step guide to achieving cafe-quality brews at home.",
    date: "Dec 5, 2024",
    category: "Brewing Tips",
    readTime: "6 min",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      "Pour-over brewing is a meditative ritual that produces exceptionally clean, nuanced coffee. With practice, you can achieve cafe-quality results at home.",
      "Start with freshly ground coffee—about 15-18 grams for a single cup. Your grind should be medium, like table salt. Heat your water to 195-205°F (90-96°C). If you don't have a thermometer, let boiling water rest for 30 seconds.",
      "Place your filter in the dripper and rinse it with hot water. This removes papery taste and preheats your equipment. Discard the rinse water, add your grounds, and create a small well in the center.",
      "The bloom is crucial. Pour just enough water (about 2x the coffee weight) to saturate all the grounds. Wait 30-45 seconds while CO2 escapes—you'll see the coffee bed bubble and rise. This releases gases that would otherwise interfere with extraction.",
      "Now pour in slow, steady circles, starting from the center and moving outward, then back. Keep the water level consistent, never letting the bed dry out. The total brew time should be 2.5-3.5 minutes.",
      "With practice, you'll learn to adjust variables. Brew too fast and sour? Grind finer. Too slow and bitter? Grind coarser. This control is what makes pour-over so rewarding.",
    ],
  },
  "south-indian-filter-coffee-recipe": {
    title: "Traditional South Indian filter coffee",
    excerpt: "Learn how to make authentic South Indian filter coffee with the perfect ratio and technique.",
    date: "Nov 28, 2024",
    category: "Recipes",
    readTime: "4 min",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      "South Indian filter coffee, or kaapi, is more than a beverage—it's a cultural institution. This unique preparation produces a strong, aromatic brew that's traditionally served with frothy milk.",
      "You'll need a South Indian coffee filter (a two-chamber metal device), dark roasted coffee with chicory (80:20 ratio is traditional), boiling water, and full-fat milk.",
      "Add 3 tablespoons of coffee powder to the upper chamber. Don't pack it—just level it gently. Place the pressing disc on top. Pour boiling water to fill the chamber, then cover and wait 10-15 minutes for the decoction to drip into the lower chamber.",
      "Meanwhile, heat milk until it just begins to boil. The ratio of decoction to milk is personal, but start with 1:3 and adjust to taste. Add sugar to the davara (the cup), pour in decoction, then add hot milk.",
      "The signature froth comes from 'meter coffee'—pouring the coffee back and forth between the davara and tumbler from increasing heights. This aerates the coffee and creates a beautiful foam. It also cools it to drinking temperature.",
      "At Coffeelic, our Coorg blend with chicory is perfect for this preparation. The dark roast stands up to milk while the chicory adds that authentic South Indian character.",
    ],
  },
  "visit-to-coorg-coffee-estates": {
    title: "A visit to Coorg coffee estates",
    excerpt: "Join us on a journey to the misty hills of Coorg, where we source some of our finest beans.",
    date: "Nov 20, 2024",
    category: "Behind the Scenes",
    readTime: "7 min",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      "Last month, our sourcing team traveled to Coorg, Karnataka—one of India's premier coffee-growing regions. The journey from Bangalore takes about five hours, winding through increasingly lush landscapes until you're enveloped by coffee-covered hills.",
      "Coorg (officially Kodagu) sits at elevations of 900-1,200 meters, with just the right combination of rainfall, temperature, and shade for arabica cultivation. The region has been growing coffee since the 1850s, when the British introduced the crop.",
      "We visited three estates that supply our beans. What struck us first was the biodiversity. These aren't monoculture farms—coffee grows under a canopy of silver oak, jackfruit, and pepper vines. Cardamom thrives in the understory. This shade-grown approach produces slower-maturing cherries with more complex flavors.",
      "Harvest was in full swing. Workers carefully hand-pick only ripe red cherries—a labor-intensive process that ensures quality but requires skill and patience. A good picker harvests about 50-70 kg of cherries per day, which yields only 10-12 kg of processed coffee.",
      "The processing methods vary by estate. We saw both washed and natural processes. In washed processing, the fruit is removed quickly, producing clean, bright flavors. Natural processing lets cherries dry intact, creating fruity, wine-like characteristics.",
      "Meeting the farmers reinforced why direct relationships matter. By paying premium prices and committing to long-term partnerships, we can support sustainable practices while securing exceptional coffee. The pride these families take in their craft is evident in every cup.",
    ],
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = posts[slug]

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-cream pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-3xl font-bold text-espresso mb-4">Post not found</h1>
            <p className="text-coffee mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="bg-caramel hover:bg-caramel-dark text-espresso rounded-full">Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        {/* Hero Image */}
        <section className="pt-20 md:pt-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-coffee hover:text-espresso transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[500px] overflow-hidden"
          >
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
          </motion.div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              {/* Meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap items-center gap-4 mb-6 text-coffee/60 text-sm"
              >
                <span className="bg-caramel text-espresso px-3 py-1 rounded-full font-medium">{post.category}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} read
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-espresso mb-8 leading-tight"
              >
                {post.title}
              </motion.h1>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-coffee leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Share */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 pt-8 border-t border-espresso/10"
              >
                <div className="flex items-center gap-4">
                  <span className="text-coffee font-medium flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share this article:
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-cream-light flex items-center justify-center hover:bg-caramel transition-colors group"
                    >
                      <Facebook className="w-4 h-4 text-coffee group-hover:text-espresso" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-cream-light flex items-center justify-center hover:bg-caramel transition-colors group"
                    >
                      <Twitter className="w-4 h-4 text-coffee group-hover:text-espresso" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-cream-light flex items-center justify-center hover:bg-caramel transition-colors group"
                    >
                      <Linkedin className="w-4 h-4 text-coffee group-hover:text-espresso" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related CTA */}
        <section className="py-12 md:py-20 bg-cream-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-espresso mb-4">
                Ready to try our coffee?
              </h2>
              <p className="text-coffee mb-8">
                Experience the flavors we write about. Shop our collection of specialty roasts.
              </p>
              <Link href="/shop">
                <Button className="bg-espresso hover:bg-espresso-light text-cream rounded-full px-8 py-6 font-heading font-semibold">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
