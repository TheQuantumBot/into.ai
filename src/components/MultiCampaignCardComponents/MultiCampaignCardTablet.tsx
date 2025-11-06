import Image from "next/image";
import React from "react";

export default function MultiCampaignCard() {
  return (
    <div className="relative w-full bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-end h-auto md:h-[350px] lg:h-[465px]">
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
      <div className="absolute bottom-6 left-5 sm:bottom-8  md:bottom-12 md:left-6 xl:bottom-16 xl:left-20">
        <h2 className="md:text-[20px] md:leading-[26px] font-[600] text-[#1E1E1E] mb-3 sm:mb-4 ">
          Multi-Platform Campaign
        </h2>
        <p className="text-[#808080] font-[400] text-[16px] leading-[22px] max-w-[80%]  ">
          Run targeted campaigns across LinkedIn, Meta, WhatsApp, and more from
          one unified dashboard.
        </p>
      </div>
    </div>
  );
}
