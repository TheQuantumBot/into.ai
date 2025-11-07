"use client";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <section className="relative overflow-hidden  min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background blur gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,183,197,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Privacy Policy
            </h1>
          </div>

          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 w-fit shadow-sm border border-gray-200">
            <Image src="/cal.svg" alt="Calendar" width={18} height={18} />
            <p className="text-sm text-gray-700 font-medium">
              Last updated:{" "}
              <span className="font-semibold">October 27, 2025</span>
            </p>
          </div>

          <p className="text-base text-gray-700 leading-relaxed max-w-lg">
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>

          <p className="text-base text-gray-700 leading-relaxed max-w-lg">
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="flex justify-center items-center">
          <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] flex justify-center items-center animate-float">
            {/* Gradient glow effect */}
            <div className="absolute inset-0  blur-3xl opacity-30 rounded-full"></div>

            {/* Shield SVG */}
            <div className="relative flex items-center justify-center">
              <Image
                src="/Privacy.svg"
                alt="Privacy Shield"
                width={400}
                height={400}
                className="drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
