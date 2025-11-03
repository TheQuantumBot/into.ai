"use client";
import { ArrowRight } from "lucide-react";
import ButtonPrimary from "./Button-primary";
import FeatureCards from "@/components/FeatureCards";

export default function FeaturesPageHeroSection() {
  return (
    <section className="relative overflow-hidden pt-[100px] pb-[48px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Conversations Built to <br /> Convert -{" "}
                <span className="gradient-text bg-clip-text text-transparent">
                  Not Just Talk
                </span>{" "}
              </h1>


            </div>

            <p className="font-inter-tight font-semibold italic text-lg leading-[24px] text-gray-600 max-w-md">
              SalesBot isn’t here to “chat.”💬
            </p>

            <p className="text-lg	 text-gray-600 font-medium  leading-normal max-w-md">
              It’s designed to understand leads, qualify them, handle objections, and close sales - just like your sharpest sales rep would. Powered by Agentic AI, it thinks, responds, and acts with purpose : Faster replies, smarter follow-ups, higher conversions.
            </p>
            <div className="flex items-center gap-4">
              <ButtonPrimary>Watch Demo</ButtonPrimary>

              <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium flex items-center gap-2 group">
                Start Earning
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>

          {/* Right - Visual with Icons */}


          <div
            className="relative flex items-center justify-center h-[500px] w-full bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/Features/pattern.svg')",
            }}
          >
            <div
              className="absolute  h-[450px] w-[350px] bg-center bg-contain bg-no-repeat top-[-34px]"
              style={{
                backgroundImage: "url('/Features/girimg.png')",
              }}
            >
          <FeatureCards description='Respond instantly when buyers are most excited, before competitors even see the lead.' className="rotate-[-14.99deg] absolute bottom-[90px] left-[-123px]"/>
          <FeatureCards description='Reconnect naturally with perfect timing — no spam, just genuine conversations that convert.' className="rotate-[6deg] absolute bottom-[16px] right-[-190px]"/>
          <FeatureCards description='Turn every chat into action, more site visits, more bookings, more sales.' className="rotate-[-10deg] absolute bottom-[-65px] right-[0px]"/>


            </div>
          </div>



        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
