"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Coffee, Leaf, Heart, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Coffee,
    title: "Quality First",
    description: "Every bean is hand-selected and roasted to perfection, ensuring exceptional flavor in every cup.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We partner with farms that practice regenerative agriculture and fair trade principles.",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Our love for coffee drives us to constantly innovate and deliver the best experience.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Multiple award-winning roasts recognized for their distinctive flavor profiles.",
  },
]

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & Head Roaster",
    image: "/indian-man-coffee-roaster-portrait-professional.jpg",
    bio: "15 years of roasting experience, trained in Italy and Ethiopia.",
  },
  {
    name: "Priya Sharma",
    role: "Quality Director",
    image: "/indian-woman-professional-coffee-taster-portrait.jpg",
    bio: "Q-grader certified, ensuring every batch meets our standards.",
  },
  {
    name: "Rahul Kumar",
    role: "Sourcing Manager",
    image: "/indian-man-coffee-sourcing-professional-portrait.jpg",
    bio: "Travels to origin countries to build direct farmer relationships.",
  },
]

const milestones = [
  { year: "2018", event: "Founded in Bangalore with a single roaster" },
  { year: "2019", event: "Opened first retail location in Indiranagar" },
  { year: "2020", event: "Launched online store, reached 10,000 customers" },
  { year: "2021", event: "Won Best Specialty Roaster at India Coffee Awards" },
  { year: "2022", event: "Expanded to 5 cafe locations across Karnataka" },
  { year: "2023", event: "Achieved carbon-neutral operations" },
  { year: "2024", event: "Serving 50,000+ customers nationwide" },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" })
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cream-light to-cream" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <span className="w-12 h-[2px] bg-caramel" />
                <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase">Our Story</span>
                <span className="w-12 h-[2px] bg-caramel" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-espresso mb-6 leading-tight"
              >
                Crafting coffee with
                <span className="text-caramel"> heart & soul</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-coffee text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              >
                From a small roastery in Bangalore to serving coffee lovers across India, our journey has been fueled by
                passion, quality, and community.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section ref={storyRef} className="py-20 md:py-32 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src="/coffee-roasting-workshop-bangalore-artisan.jpg"
                    alt="Coffeelic roastery"
                    width={500}
                    height={600}
                    className="w-full h-[400px] md:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-caramel rounded-2xl p-6 depth-shadow-lg"
                >
                  <p className="font-heading text-4xl font-bold text-espresso">7+</p>
                  <p className="text-espresso/70 text-sm">Years of Excellence</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-espresso mb-6">
                  It started with a dream
                </h2>
                <div className="space-y-4 text-coffee leading-relaxed">
                  <p>
                    In 2018, our founder Arjun returned from training in Ethiopia with a vision: to bring world-class
                    specialty coffee to India while honoring our rich coffee heritage.
                  </p>
                  <p>
                    What began as a small operation with a single 5kg roaster has grown into a beloved brand serving
                    thousands of coffee enthusiasts. But our core philosophy remains unchanged—quality over quantity,
                    always.
                  </p>
                  <p>
                    We source directly from farmers in Coorg, Chikmagalur, and Nilgiris, paying premium prices for
                    exceptional beans. Every batch is roasted in small quantities to ensure peak freshness and flavor.
                  </p>
                </div>
                <Link href="/shop">
                  <Button className="mt-8 bg-espresso hover:bg-espresso-light text-cream rounded-full px-8 py-6 font-heading font-semibold">
                    Explore Our Coffee
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="py-20 md:py-32 bg-cream-light">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                What We Stand For
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-espresso">
                Our values guide everything
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-8 depth-shadow hover:depth-shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-caramel/20 flex items-center justify-center mb-6 group-hover:bg-caramel transition-colors">
                    <value.icon className="w-6 h-6 text-caramel group-hover:text-espresso transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-espresso mb-3">{value.title}</h3>
                  <p className="text-coffee leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section ref={teamRef} className="py-20 md:py-32 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase mb-4 block">The People</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-espresso">Meet our team</h2>
              <p className="text-coffee mt-4">Passionate experts dedicated to your perfect cup</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="text-center group"
                >
                  <div className="relative rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-espresso mb-1">{member.name}</h3>
                  <p className="text-caramel font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-coffee text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section ref={timelineRef} className="py-20 md:py-32 bg-espresso">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-caramel font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream">
                Milestones along the way
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-caramel" />
                    {index < milestones.length - 1 && <div className="w-0.5 h-full bg-cream/20 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-caramel font-heading font-bold text-lg">{milestone.year}</span>
                    <p className="text-cream/70 mt-1">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-br from-caramel to-caramel-dark rounded-3xl p-10 md:p-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
                Ready to taste the difference?
              </h2>
              <p className="text-espresso/70 mb-8 max-w-lg mx-auto">
                Join thousands of coffee lovers who have made Coffeelic their daily ritual.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop">
                  <Button className="bg-espresso hover:bg-espresso-light text-cream rounded-full px-8 py-6 font-heading font-semibold">
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-espresso text-espresso hover:bg-espresso hover:text-cream rounded-full px-8 py-6 font-heading font-semibold bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
