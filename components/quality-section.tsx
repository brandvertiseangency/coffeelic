"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const qualityItems = [
  { title: "Blend of the day", subtitle: "Coffee blend", price: "₹450" },
  { title: "Best coffee business", subtitle: "Daily subscription", price: "₹999/mo" },
  { title: "Premium roaster", subtitle: "Coffee equipment", price: "₹4,500" },
  { title: "Café & coffee shop", subtitle: "Partnership", price: "Custom" },
]

export function QualitySection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Content */}
          <div>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-700 text-caramel font-medium text-sm tracking-wider uppercase mb-4">
              Our Offerings
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-espresso leading-tight mb-6">
              Our commitment to quality
            </h2>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-200 text-coffee text-base md:text-lg leading-relaxed mb-8">
              Every Coffeelic roast goes through strict quality checks — from bean grading to roast profiling — ensuring
              consistency, freshness, and superior taste.
            </p>
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-300">
              <Button
                variant="outline"
                className="border-espresso text-espresso hover:bg-espresso hover:text-cream rounded-full px-8 py-6 text-base group bg-transparent"
              >
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right - Quality Items */}
          <div className="space-y-4">
            {qualityItems.map((item, index) => (
              <div
                key={item.title}
                className={`fade-up opacity-0 translate-y-4 transition-all duration-700 flex items-center justify-between py-4 border-b border-coffee-light/20 hover:border-caramel transition-colors group cursor-pointer`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div>
                  <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-caramel transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-coffee text-sm">{item.subtitle}</p>
                </div>
                <span className="font-serif font-bold text-espresso">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
