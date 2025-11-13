import { BolgsCard } from "@/components/BolgsCard";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Heros from "@/components/Heros";
import OurBlogs from "@/components/OurBlogs";

export default function blogsPage() {
  return (
    <main className="min-h-screen bg-[#ECE9E6] relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/Pricing-Bg.png"
        alt="Background"
        className="absolute inset-0 w-[-webkit-fill-available] h-[1024px] object-cover"
      />
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <OurBlogs />
        <BolgsCard />
      </div>
    </main>
  );
}
