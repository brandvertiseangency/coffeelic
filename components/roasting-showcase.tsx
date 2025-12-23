"use client"

import { useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RoastingShowcase() {
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
    <section ref={sectionRef} className="relative h-[500px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/barista-making-espresso-coffee-close-up-steam-prof.jpg" alt="Coffee roasting process" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="max-w-xl">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-700 text-caramel font-medium text-sm tracking-wider uppercase mb-4">
            What We Produce
          </p>
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
            Exquisite coffee beans
          </h2>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-200 text-cream/80 text-base md:text-lg leading-relaxed mb-8">
            Roasting is where coffee transforms. Our process balances time, temperature, and airflow to highlight the
            natural character of each bean — delivering depth, aroma, and smoothness.
          </p>

          {/* Navigation Arrows */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-300 flex gap-3">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full border-cream/30 text-cream hover:bg-cream hover:text-espresso w-12 h-12 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full border-cream/30 text-cream hover:bg-cream hover:text-espresso w-12 h-12 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
