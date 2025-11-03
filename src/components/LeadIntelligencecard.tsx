import Image from "next/image";
import React from "react";

export default function LeadIntelligencecard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 h-auto sm:h-[465px] relative overflow-hidden">
      {/* WhatsApp Icon and Chat Elements */}

      {/* Text Content */}
      <div className="">
        <div className="relative h-[220px] sm:h-[280px] md:h-[323px] -mt-6 sm:-mt-8">
          <Image
            src="/Lead-Intelligence.svg"
            alt="User 1"
            fill
            className="object-contain "
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          Lead Intelligence
        </h2>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          Advanced lead scoring and classification – know which leads are hot,
          cold, or neutral in real-time.
        </p>
      </div>

      {/* Additional User Avatars at Bottom */}
    </div>
  );
}
