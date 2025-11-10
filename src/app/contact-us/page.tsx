import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/header";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#ECE9E6] relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        <div className="flex-1 flex flex-col items-center justify-center pt-[150px]">
          <ContactUs />
        </div>
      </div>

      <Footer />
    </main>
  );
}
