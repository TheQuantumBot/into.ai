import Image from "next/image";
import React from "react";

export default function LeadIntelligencecard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 h-auto md:h-[450px] lg:h-[490px] relative overflow-hidden">
      {/* WhatsApp Icon and Chat Elements */}

      {/* Text Content */}

      <div className="relative h-[200px] sm:h-[280px] md:h-[180px] lg:h-[255]px] -mt-6 sm:-mt-8">
        <Image
          src="/Lead-Intelligence.svg"
          alt="User 1"
          fill
          className="object-contain "
        />
      </div>
      <div className="mt-0 md:mt-24 lg:mt-32">
        <h2 className="text-[16px] leading-[20px] md:text-[20px] md:leading-[26px] lg:text-[32px] lg:leading-[40px] font-[600] text-[#1E1E1E] mb-3 sm:mb-4">
          Lead Intelligence
        </h2>
        <p className="text-[#808080] font-[400] text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[24px] lg:leading-[34px]">
          Advanced lead scoring and classification – know which leads are hot,
          cold, or neutral in real-time.
        </p>
      </div>
      {/* Additional User Avatars at Bottom */}
    </div>
  );
}
