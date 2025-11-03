import Footer from "@/components/Footer";
import Header from "@/components/header";
import FeaturesFaq from "@/components/FeaturesFaq";
import Features_sales from "@/components/Features_sales";
import FeaturesPageHeroSection from "@/components/FeaturesPageHeroSection";
import LeadConversion from "@/components/LeadConversion";

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
        <FeaturesFaq />
        <Features_sales />
        <LeadConversion />
        <Footer />
      </div>
    </main>
  );
}
