import Image from "next/image";
import React from "react";

export default function ROIOptimization() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 h-auto sm:h-[465px] relative overflow-hidden">
      {/* WhatsApp Icon and Chat Elements */}

      {/* Text Content */}
      <div className="">
        <div className="relative h-[240px] sm:h-[300px] md:h-[345px] -mt-6 sm:-mt-8">
          <Image
            src="/ROIOptimization.svg"
            alt="User 1"
            fill
            className="object-contain "
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          ROI Optimization
        </h2>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          Track performance metrics and optimize campaigns for maximum return on
          ad spend.
        </p>
      </div>

      {/* Additional User Avatars at Bottom */}
    </div>
  );
}
