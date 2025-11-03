import Image from "next/image";
import React from "react";

export default function MultiCampaignCard() {
  return (
    <div className="relative w-full bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-end min-h-[420px] sm:min-h-[480px] md:min-h-[550px] xl:min-h-[650px] 2xl:min-h-[750px]">
      
      {/* Background Image */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] xl:h-[500px] 2xl:h-[600px]">
        <Image
          src="/multiCampaing.svg"
          alt="Multi-Platform Campaign Graphic"
          fill
          className="object-contain object-center md:object-right"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
        />
      </div>

      {/* Text Content */}
      <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 xl:bottom-16 xl:left-20">
        <h2 className="font-bold text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
          Multi-Platform Campaign
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg">
          Run targeted campaigns across LinkedIn, Meta, WhatsApp, and more
          <span className="block">from one unified dashboard.</span>
        </p>
      </div>
    </div>
  );
}
