import BlogData from "@/components/BlogData";
import Footer from "@/components/Footer";
import Header from "@/components/header";

export default function BlogCardDetails() {
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
        <BlogData />
        <Footer />
      </div>
    </main>
  );
}
