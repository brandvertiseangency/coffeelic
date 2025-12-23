"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

const testimonial = {
  quote:
    "Coffeelic has completely changed my morning routine. The aroma, freshness, and taste are unmatched. It feels like having a premium café experience at home every single day.",
  author: "Priya Sharma",
  role: "Coffee Enthusiast",
  avatar: "/indian-woman-portrait-professional.jpg",
}

const stats = [
  { value: "11+", label: "Years of Experience" },
  { value: "1M+", label: "Cups Served" },
]

const partners = [
  { name: "Coffee House", logo: "/coffee-brand-logo-minimal.jpg" },
  { name: "Bean Masters", logo: "/coffee-roaster-logo-minimal.jpg" },
  { name: "Brew Co", logo: "/coffee-shop-logo-minimal.jpg" },
  { name: "Café Elite", logo: "/cafe-logo-minimal-elegant.jpg" },
]

export function TestimonialSection() {
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-700 text-caramel font-medium text-sm tracking-wider uppercase mb-4">
              Testimonials
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-espresso leading-tight mb-8">
              What our clients say about us
            </h2>

            {/* Testimonial Card */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-200 bg-cream-light rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-caramel text-caramel" />
                ))}
              </div>
              <p className="text-coffee text-base md:text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-serif font-bold text-espresso">{testimonial.author}</p>
                  <p className="text-coffee text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-300 bg-caramel rounded-2xl p-6 md:p-8">
              <p className="font-serif text-lg font-bold text-espresso mb-4">Excellent coffee and better service</p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl md:text-4xl font-bold text-espresso">{stat.value}</p>
                    <p className="text-espresso/70 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-200">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/happy-woman-drinking-coffee-caf--smile-warm-lighti.jpg"
                alt="Happy customer enjoying coffee"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="fade-up opacity-0 translate-y-4 transition-all duration-700 delay-400 mt-16 md:mt-24 pt-12 border-t border-coffee-light/20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
