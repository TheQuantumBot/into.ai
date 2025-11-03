import Footer from "@/components/Footer";
import Header from "@/components/header";
import BecameAPartnerFaq from "@/components/BecameAPartnerFaq";
import BecameAPartner_sales from "@/components/BecameAPartner_sales";
import AgenticAI from "@/components/AgenticAI";

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
        <BecameAPartnerFaq />
        <AgenticAI />
        <BecameAPartner_sales />
        <Footer />
      </div>
    </main>
  );
}
