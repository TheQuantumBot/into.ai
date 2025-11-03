import Image from "next/image";
import React from "react";
import CountUp from "./CountUp";

export default function MultiCampaignCard() {
  return (
    <div className="w-full bg-white rounded-3xl shadow-lg p-8 mx-auto relative overflow-hidden min-h-[465px]">
      {/* Flow Section */}
      <div className="w-full relative h-40 mt-[10px]">
        <div className="absolute top-[52px] left-[80px] w-[75%] h-[2px] bg-gray-200"></div>

        {/* SVG Stroke Line */}
        <svg
          className="absolute top-[52px] right-5 pointer-events-none"
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
        <div className="absolute top-0 left-[45px] w-[100px] h-[100px] rounded-2xl bg-gradient-to-b from-[rgba(194,197,255,0.77)] to-white flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Into.AI Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* LinkedIn - Center */}
        <div className="absolute top-0 left-[400px] w-[100px] h-[100px] rounded-2xl bg-[linear-gradient(180deg,#D5F1FF_0%,#FFFFFF_100%)] flex items-center justify-center">
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* WhatsApp - Right */}
        <div className="absolute top-0 right-[100px] w-[100px] h-[100px] rounded-2xl bg-[linear-gradient(180deg,#CAF2D3_0%,#FFFFFF_100%)] flex items-center justify-center">
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Meta - Bottom Center */}
        <div className="absolute top-[196px] left-[340px] w-[500px] h-[2px] bg-gray-300"></div>
        <div className="absolute top-[144px] left-[430px] w-[100px] h-[100px] rounded-2xl bg-[linear-gradient(180deg,#E6F0FF_0%,#FFFFFF_100%)] flex items-center justify-center">
          <Image src="/meta.svg" alt="Meta" width={50} height={50} />
        </div>

        {/* Conversion Rate Badge */}
        <div className="absolute top-[160px] right-0 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-2xl shadow-lg">
          <div className="text-3xl font-medium leading-none">
            <CountUp
              from={0}
              to={92}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            %
          </div>
          <div className="text-sm opacity-90">Conversion Rate</div>
        </div>
        <div className="absolute top-[140px] right-[-65px] bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 opacity-15 rounded-2xl ]">
          <div className="text-3xl font-medium leading-none opacity-40">
            92%
          </div>
          <div className="text-sm opacity-60">Conversion Rate</div>
        </div>
      </div>

      {/* Title & Description */}
      <div className="mt-[120px]">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Multi-Platform Campaign
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          Run targeted campaign across LinkedIn, Meta, WhatsApp, and more
          <span className="block">from one unified dashboard</span>{" "}
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="absolute top-[276px] right-[112px] w-[2px] h-[100px] bg-gray-200"></div>

      {/* Avatar Group */}
      <div className="absolute bottom-[45px] right-[45px] flex -space-x-4">
        <div className="w-[60px] h-[60px] rounded-full border-4 border-white overflow-hidden">
          <Image src="/user1.svg" alt="User 1" width={60} height={60} />
        </div>
        <div className="w-[60px] h-[60px] rounded-full border-4 border-white overflow-hidden">
          <Image src="/user2.svg" alt="User 2" width={60} height={60} />
        </div>
        <div className="w-[60px] h-[60px] rounded-full border-4 border-white overflow-hidden">
          <Image src="/user3.svg" alt="User 3" width={60} height={60} />
        </div>
      </div>
    </div>
  );
}
