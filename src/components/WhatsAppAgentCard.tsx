import Image from "next/image";
import React from "react";


export default function WhatsAppAgentCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 h-auto sm:h-[465px] relative overflow-hidden">
      {/* WhatsApp Icon and Chat Elements */}


      {/* Text Content */}
      <div className="">
        <div className="relative h-[200px] sm:h-[250px] md:h-[290px]">
          
            <Image
              src="/agent.svg"
              alt="User 1"
              fill
              className="object-contain p-[15px] sm:p-[20px]"
            />
         

        </div>
        <h2 className="text-[16px] lg:text-[32px] mb-3 sm:mb-4 font-semibold text-[#1E1E1E]">
          AI-Powered WhatsApp Agent
        </h2>
        <p className="lg:text-[20px] sm:text-lg leading-relaxed font-semibold text-[#808080]">
          Smart conversational AI that engages leads 24/7,
          qualifying and nurturing them towards conversion
        </p>
      </div>

      {/* Additional User Avatars at Bottom */}

    </div>
  );
};