import BecameAPartner_sales from "@/components/BecameAPartner_sales";
import BecameAPartnerFaq from "@/components/BecameAPartnerFaq";
import WhoCanBecomePartner from "@/components/BecomePartner";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import PartnerNetwork from "@/components/partnerNetwork";

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
        <PartnerNetwork />

        <div className="flex-1 flex flex-col items-center justify-center pt-[150px]">
          <div className="w-full">
            <BecameAPartnerFaq />
          </div>
        </div>
      </div>
      <WhoCanBecomePartner />
      <BecameAPartner_sales />
      <Footer />
    </main>
  );
}
