import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SecuritySection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection/>
      <FooterSection/>
    </div>
  );
}
