import { HeroSection } from "@/components/sections/hero-section";
import { CollageGallery } from "@/components/sections/collage-gallery";
import { FeaturesSection } from "@/components/sections/features-section";
import { FacilitiesStackSection } from "@/components/sections/facilities-stack-section";
import { DeveloperSection } from "@/components/sections/developer-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollageGallery />
      <FeaturesSection />
      <FacilitiesStackSection />
      <DeveloperSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
