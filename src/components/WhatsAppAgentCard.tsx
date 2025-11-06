import Image from "next/image";
import React from "react";

export default function WhatsAppAgentCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8  h-auto md:h-[350px] lg:h-[555px] relative overflow-hidden">
      {/* WhatsApp Icon and Chat Elements */}

      {/* Text Content */}
      <div className="">
        <div className="relative h-[200px] sm:h-[250px] md:h-[144px] lg:h-[290px]">
          <Image
            src="/agent.svg"
            alt="User 1"
            fill
            className="object-contain "
          />
        </div>
        <div className="">
          <h2 className="text-[16px] leading-[20px] md:text-[20px] md:leading-[26px] lg:text-[32px] lg:leading-[40px] font-[600] text-[#1E1E1E] mb-3 sm:mb-4">
            AI-Powered WhatsApp Agent
          </h2>
          <p className="text-[#808080] font-[400] text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[24px] lg:leading-[34px]">
            Smart conversational AI that engages leads 24/7, qualifying and
            nurturing them towards conversion.
          </p>
        </div>
      </div>
      {/* Additional User Avatars at Bottom */}
    </div>
  );
}
