import Image from "next/image";
import React from "react";

export default function ROIOptimization() {
  return (
    <div className="bg-white rounded-3xl shadow-lg h-auto md:h-[450px] lg:h-[490px] relative overflow-hidden">
      {/* WhatsApp Icon and Chat Elements */}
    <div className="relative h-[240px] sm:h-[300px] md:h-[345px] -mt-6 sm:-mt-8">
          <Image
            src="/ROIOptimization.svg"
            alt="User 1"
            fill
            className="object-contain "
          />
        </div>
      {/* Text Content */}
      <div className="p-4 md:p-5 lg:p-[30PX]">
        
        <h2 className="text-[16px] leading-[20px] md:text-[20px] md:leading-[26px] lg:text-[32px] lg:leading-[40px] font-[600] text-[#1E1E1E] mb-3 sm:mb-4">
          ROI Optimization
        </h2>
        <p className="text-[#808080] font-[400] text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[24px] lg:leading-[34px]">
          Track performance metrics and optimize campaigns for maximum return on
          ad spend.
        </p>
      </div>

      {/* Additional User Avatars at Bottom */}
    </div>
  );
}
