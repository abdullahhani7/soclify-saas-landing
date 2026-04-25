import FAQSection from "@/components/FAQSection";

import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <SecuritySection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
    </div>
  );
}
