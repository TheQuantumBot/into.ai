import Image from "next/image";
import React from "react";

export default function MultiCampaignCardDesktop() {
  return (
    <div className="w-full bg-white rounded-3xl shadow-lg p-4 md:p-5 lg:p-[30PX] mx-auto relative overflow-hidden h-[360px] md:h-[500px] lg:h-[516px]">
      {/* Flow Section */}
      <div className="w-full relative h-40 mt-[10px]">
        <div className="absolute top-[20px] md:top-[35px] lg:top-[52px] left-[40px] md:left-[80px] w-[86%] md:w-[70%] lg:w-[80%] h-[2px] bg-gray-200"></div>

        {/* SVG Stroke Line */}
        <svg
          className="absolute top-[20px] md:top-[35px] lg:top-[52px] left-[72px] md:right-[-40px] lg:right-0 pointer-events-none [@media(min-width:2000px)]:w-[645px] "
          width="100%"
          height="100%"
          viewBox="0 0 500 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2 V200 Q2 272 50 272 H300"
            stroke="#d1d5db"
            strokeWidth="3"
            fill="transparent"
          />
        </svg>

        {/* Into.AI Logo - Left */}
        <div className="absolute top-0 left-[0px] w-[50px] md:w-[78px] lg:w-[100px] h-[50px] md:h-[78px] lg:h-[100px] rounded-2xl bg-gradient-to-b from-[rgba(194,197,255,0.77)] to-white flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Into.AI Logo"
            width={50}
            height={50}
            className="object-contain w-[25px] h-[25px] md:h-[50px] md:w-[50px]"
          />
        </div>

        {/* LinkedIn - Center */}
        <div className="absolute top-0 left-[135px] sm:left-[350px] md:left-[170px] lg:left-[240px] xl:left-[400px] w-[50px] md:w-[78px] lg:w-[100px] h-[50px] md:h-[78px] lg:h-[100px] rounded-2xl bg-[linear-gradient(180deg,#D5F1FF_0%,#FFFFFF_100%)] flex items-center justify-center ">
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={50}
            height={50}
            className="object-contain w-[25px] h-[25px] md:h-[50px] md:w-[50px]"
          />
        </div>

        {/* WhatsApp - Right */}
        <div className="absolute top-0 right-[0px] w-[50px] md:w-[78px] lg:w-[100px] h-[50px] md:h-[78px] lg:h-[100px] rounded-2xl bg-[linear-gradient(180deg,#CAF2D3_0%,#FFFFFF_100%)] flex items-center justify-center">
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={50}
            height={50}
            className="object-contain w-[25px] h-[25px] md:h-[50px] md:w-[50px]"
          />
        </div>

        {/* Meta - Bottom Center */}
        <div className="absolute top-[164px] md:top-[179px] lg:top-[196px] left-[265px] sm:left-[310px]  lg:left-[340px] w-[500px]  h-[2px] bg-gray-300  [@media(min-width:2000px)]:w-[645px] [@media(min-width:2390px)]:w-[742px] [@media(min-width:1700px)]:w-[400px] [@media(min-width:1430px)]:left-[400px]"></div>
        <div className="absolute top-[144px] left-[140px] sm:left-[360px] md:left-[180px] lg:left-[260px] xl:left-[430px] w-[50px] md:w-[78px] lg:w-[100px] h-[50px] md:h-[78px] lg:h-[100px] rounded-2xl bg-[linear-gradient(180deg,#E6F0FF_0%,#FFFFFF_100%)] flex items-center justify-center [@media(min-width:2100px)]:left-[560px]">
          <Image
            src="/meta.svg"
            alt="Meta"
            width={50}
            height={50}
            className="object-contain w-[25px] h-[25px] md:h-[50px] md:w-[50px]"
          />
        </div>

        {/* Conversion Rate Badge */}
        <div className="absolute w-[97px] md:w-[126px] lg:w-auto h-[40px] md:h-[60px] lg:h-auto top-[170px] md:top-[150px] lg:top-[160px] right-0 bg-gradient-to-r from-orange-600 to-red-600 text-white px-[5px] md:px-3 lg:px-6 py-[5px] md:py-2 lg:py-3 rounded-[12px] md:rounded-2xl shadow-lg">
          <div className="text-[12px] md:text-2xl lg:text-3xl font-medium leading-none">
            92%
          </div>
          <div className="text-[12px] md:text-sm opacity-90">
            Conversion Rate
          </div>
        </div>
        <div className="absolute  top-[140px] right-[-65px] w-[97px] md:w-[120px] lg:w-auto h-[40px] md:h-[60px] lg:h-auto bg-gradient-to-r from-orange-500 to-red-500 text-white  px-[5px] md:px-3 lg:px-6 py-[5px] md:py-2 lg:py-3 opacity-15 rounded-[12px] md:rounded-2xl ]">
          <div className="text-[12px] md:text-2xl lg:text-3xl font-medium leading-none opacity-40">
            92%
          </div>
          <div className="text-[12px] md:text-sm opacity-60">
            Conversion Rate
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <div className="mt-[60px] md:mt-[120px] z-10">
        <h2 className="text-[16px] leading-[20px] md:text-[20px] md:leading-[26px] lg:text-[32px] lg:leading-[40px] font-[600] text-[#1E1E1E] mb-3 sm:mb-4">
          Multi-Platform Campaign
        </h2>
        <p className="text-[#808080] font-[400] text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[24px] lg:leading-[34px]">
          Run targeted campaign across LinkedIn, Meta,<br></br> WhatsApp, and
          more from one unified dashboard.
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="absolute top-[240px] lg:top-[280px] right-[44px] md:right-[112px] w-[2px] h-[85px] md:h-[100px] bg-gray-200"></div>

      {/* Avatar Group */}
      <div className="absolute bottom-[38px] md:bottom-[130px] right-[10px] md:right-[45px] flex -space-x-2 md:-space-x-4">
        <div className="w-[28px] md:w-[60px] h-[28px] md:h-[60px] rounded-full border-2 md:border-4 border-white overflow-hidden">
          <Image src="/user1.svg" alt="User 1" width={60} height={60} />
        </div>
        <div className="w-[28px] md:w-[60px] h-[28px] md:h-[60px] rounded-full border-2 md:border-4 border-white overflow-hidden">
          <Image src="/user2.svg" alt="User 2" width={60} height={60} />
        </div>
        <div className="w-[28px] md:w-[60px] h-[28px] md:h-[60px] rounded-full border-2 md:border-4 border-white overflow-hidden">
          <Image src="/user3.svg" alt="User 3" width={60} height={60} />
        </div>
      </div>
    </div>
  );
}
