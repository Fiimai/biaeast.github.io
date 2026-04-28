import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FacilitiesStackSection } from "@/components/sections/facilities-stack-section";
import { DeveloperSection } from "@/components/sections/developer-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FacilitiesStackSection />
      <DeveloperSection />
      <PartnersSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
