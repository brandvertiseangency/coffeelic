"use client"

import { Coffee } from "lucide-react"

const items = ["ESPRESSO", "ARABICA", "ROBUSTA", "LATTE", "CAPPUCCINO", "MOCHA"]

export function Marquee() {
  return (
    <section className="py-8 md:py-12 bg-espresso overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-6 md:mx-10">
            <span className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-cream/90 tracking-wider">
              {item}
            </span>
            <Coffee className="w-6 h-6 md:w-8 md:h-8 text-caramel ml-6 md:ml-10" />
          </div>
        ))}
      </div>
    </section>
  )
}
