import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import IntegrationSection from "@/components/IntegrationSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <IntegrationSection />
      <ContactSection />
    </main>
  );
}
