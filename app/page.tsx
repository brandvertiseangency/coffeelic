import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrandPillars } from "@/components/brand-pillars"
import { OriginStory } from "@/components/origin-story"
import { RoastPhilosophy } from "@/components/roast-philosophy"
import { FeaturedProducts } from "@/components/featured-products"
import { RoastingProcess } from "@/components/roasting-process"
import { BrewGuide } from "@/components/brew-guide"
import { NewsletterSection } from "@/components/newsletter-section"
import { BlogSection } from "@/components/blog-section"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { MarqueeBanner } from "@/components/marquee-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden grain-overlay">
      <Header />
      <HeroSection />
      <BrandPillars />
      <OriginStory />
      <RoastPhilosophy />
      <FeaturedProducts />
      <MarqueeBanner />
      <RoastingProcess />
      <BrewGuide />
      <NewsletterSection />
      <BlogSection />
      <TestimonialSlider />
      <Footer />
    </main>
  )
}
