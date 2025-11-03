import BecameAPartner_sales from "@/components/BecameAPartner_sales";
import BecameAPartnerFaq from "@/components/BecameAPartnerFaq";
import WhoCanBecomePartner from "@/components/BecomePartner";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Rewarding from "@/components/Rewarding";
import PartnerNetwork from "@/components/partnerNetwork";
import HeroBox from "@/components/HeroBox";
import WhatYouGet from "@/components/WhatYouGet";

export default function BecameAPartnerPage() {
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
        <HeroBox />
        <Rewarding />
        <PartnerNetwork />
        <WhoCanBecomePartner />
        <WhatYouGet />
        <BecameAPartnerFaq />
        <BecameAPartner_sales />
        <Footer />
      </div>
    </main>
  );
}
