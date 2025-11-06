"use client";
import Image from "next/image";
import React from "react";

export default function MultiCampaignCardMobile() {
  return (
    // <div className="w-full bg-white rounded-2xl shadow-md p-4 mx-auto text-center">
    //   <Image src="/logo.svg" alt="Into.AI Logo" width={40} height={40} className="mx-auto" />

    //   <h2 className="text-[16px] leading-[20px] font-[600] text-[#1E1E1E]">
    //     Multi-Platform Campaign
    //   </h2>
    //   <p className="text-[#808080] font-[400] text-[14px] leading-[20px] mt-2">
    //     Run campaigns across LinkedIn, Meta, and WhatsApp from one place.
    //   </p>

    //   <div className="flex justify-center gap-6 mt-6">
    //     <Image src="/linkedin.svg" alt="LinkedIn" width={35} height={35} />
    //     <Image src="/meta.svg" alt="Meta" width={35} height={35} />
    //     <Image src="/whatsapp.svg" alt="WhatsApp" width={35} height={35} />
    //   </div>

    //   <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl py-2 px-4 mt-6 inline-block">
    //     <div className="text-xl font-medium">92%</div>
    //     <div className="text-xs opacity-90">Conversion Rate</div>
    //   </div>

    //   <div className="flex justify-center mt-6 -space-x-3">
    //     <Image src="/user1.svg" alt="User 1" width={40} height={40} className="rounded-full border-2 border-white" />
    //     <Image src="/user2.svg" alt="User 2" width={40} height={40} className="rounded-full border-2 border-white" />
    //     <Image src="/user3.svg" alt="User 3" width={40} height={40} className="rounded-full border-2 border-white" />
    //   </div>
    // </div>
    <div className="relative w-full bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-end h-auto md:h-[590px] lg:h-[465px]">
          
          {/* Background Image */}
          <div className="relative w-full h-[255px] md:h-[380px] lg:h-[420px] xl:h-[500px] 2xl:h-[600px]">
            <Image
              src="/multiCampaing.svg"
              alt="Multi-Platform Campaign Graphic"
              fill
              className="object-contain object-right md:object-right"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
            />
          </div>
    
          {/* Text Content */}
          <div className="absolute bottom-4 left-5 sm:bottom-8 sm:left-8  ">
            <h2 className="text-[16px] leading-[20px] font-[600] text-[#1E1E1E] mt-1 mb-3 sm:mb-4 ">
              Multi-Platform Campaign
            </h2>
            <p className="text-[#808080] font-[400] text-[14px] leading-[20px] max-w-[79%] ">
              Run targeted campaigns across LinkedIn, Meta, WhatsApp, and more from one unified dashboard.
            </p>
          </div>
        </div>
  );
}
