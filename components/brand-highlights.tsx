"use client"

import { useEffect, useRef } from "react"
import { Leaf, Globe, Coffee } from "lucide-react"

const highlights = [
  {
    icon: Coffee,
    title: "Freshly Roasted Beans",
    description: "Small-batch roasting ensures maximum freshness and flavor in every single cup you brew.",
  },
  {
    icon: Globe,
    title: "Ethically Sourced",
    description: "Handpicked beans from trusted coffee-growing regions around the world.",
  },
  {
    icon: Leaf,
    title: "Crafted for Indian Taste",
    description: "Balanced profiles made for espresso, filter & modern brews.",
  },
]

export function BrandHighlights() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-cream-light border-y border-coffee-light/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`fade-up opacity-0 translate-y-4 transition-all duration-700 text-center`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream border border-coffee-light/20 mb-6 group-hover:bg-caramel/10 transition-colors">
                <item.icon className="w-7 h-7 text-caramel" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">{item.title}</h3>
              <p className="text-coffee leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
