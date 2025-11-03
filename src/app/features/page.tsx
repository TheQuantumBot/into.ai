import Footer from "@/components/Footer";
import Header from "@/components/header";
import FeaturesSection from "@/components/FeaturesSection";
import BecameAPartnerFaq from "@/components/BecameAPartnerFaq";
import FeaturesPageHeroSection from "@/components/FeaturesPageHeroSection";
import LeadConversion from "@/components/LeadConversion";
import AgenticAIHero from "@/components/AgenticAI";
import Features_sales from "@/components/Features_sales";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#ECE9E6] relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/Pricing-Bg.png"
        alt="Background"
        className="absolute inset-0 h-[1024px] object-cover"
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <FeaturesPageHeroSection />
        <AgenticAIHero />
        <LeadConversion />
        <FeaturesSection />
        <BecameAPartnerFaq />
        <Features_sales />
        <Footer />
      </div>
    </main>
  );
}
