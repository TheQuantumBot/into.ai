import Footer from "@/components/Footer";
import Header from "@/components/header";
import PricingPlans from "@/components/PricingPlans";

export default function PricingPage() {
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

        <div className="flex-1 flex flex-col items-center justify-center pt-[150px]">
          <PricingPlans text={"Pricing Plan"} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
