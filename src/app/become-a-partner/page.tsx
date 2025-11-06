import BecameAPartner_sales from "@/components/BecameAPartner_sales";
import BecameAPartnerFaq from "@/components/BecameAPartnerFaq";
import WhoCanBecomePartner from "@/components/BecomePartner";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Rewarding from "@/components/Rewarding";
import PartnerNetwork from "@/components/partnerNetwork";
import HeroBox from "@/components/HeroBox";
import WhatYouGet from "@/components/WhatYouGet";

const faqData = [
  {
    id: 1,
    question: "Do I need tech knowledge?",
    answer1: "No. We handle all demos and setup.",
    defaultOpen: true,
  },
  {
    id: 2,
    question: "Can I still run my business?",
    answer1:
      "Yes - this program is designed to run alongside your existing work.",
    defaultOpen: true,
  },
  {
    id: 3,
    question: "Can I promote future Into AI products?",
    answer1:
      "Yes -  partners automatically get access to our full AI suite as we launch new tools.",
    defaultOpen: true,
  },
  {
    id: 4,
    question: "How do I get paid?",
    answer1: "Monthly payouts via bank transfer/UPI.",
    defaultOpen: true,
  },
  {
    id: 5,
    question: "Is there a joining fee?",
    answer1: "No. It’s 100% free.",
    defaultOpen: true,
  },
];

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
        <BecameAPartnerFaq faqs={faqData as any} />
        <BecameAPartner_sales />
        <Footer />
      </div>
    </main>
  );
}
