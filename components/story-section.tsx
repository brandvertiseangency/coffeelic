"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const bulletPoints = ["Carefully selected coffee origins", "Precision roasting techniques", "Zero artificial flavors"]

export function StorySection() {
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
    <section ref={sectionRef} id="story" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-700 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/coffee-farmer-holding-fresh-coffee-beans-in-hands-.jpg"
                  alt="Coffee farmer with fresh beans"
                  className="w-full h-[400px] md:h-[550px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto bg-caramel p-4 md:p-6 rounded-2xl shadow-lg">
                <p className="font-serif text-espresso font-bold text-lg md:text-xl mb-1">We only use</p>
                <p className="text-espresso/80 font-medium">fresh beans</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-700 text-caramel font-medium text-sm tracking-wider uppercase mb-4">
              Our Promise
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-espresso leading-tight mb-6">
              Exquisite coffee beans, perfected by craft
            </h2>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-200 text-coffee text-base md:text-lg leading-relaxed mb-8">
              Coffeelic was born from a passion for real coffee — coffee that's fresh, honest, and full of character.
              From sourcing premium beans to roasting them with precision, we focus on one thing: delivering exceptional
              flavor without shortcuts.
            </p>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-300 space-y-4 mb-8">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-caramel/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-caramel" />
                  </div>
                  <span className="text-coffee font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-400">
              <Button className="bg-caramel hover:bg-caramel/90 text-espresso font-medium rounded-full px-8 py-6 text-base group">
                Explore Our Story
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
