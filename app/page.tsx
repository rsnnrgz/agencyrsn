import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ReviewSystemSection } from "@/components/landing/review-system-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { WhyUsSection } from "@/components/landing/why-us-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main id="home" className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ReviewSystemSection />
      <TestimonialsSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
