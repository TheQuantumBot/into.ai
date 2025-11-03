"use client";
import Image from "next/image";
import React from "react";

export default function MultiCampaignCardMobile() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-4 mx-auto text-center">
      <Image src="/logo.svg" alt="Into.AI Logo" width={40} height={40} className="mx-auto" />

      <h2 className="text-xl font-bold text-gray-900 mt-4">
        Multi-Platform Campaign
      </h2>
      <p className="text-gray-500 text-sm mt-2">
        Run campaigns across LinkedIn, Meta, and WhatsApp from one place.
      </p>

      <div className="flex justify-center gap-6 mt-6">
        <Image src="/linkedin.svg" alt="LinkedIn" width={35} height={35} />
        <Image src="/meta.svg" alt="Meta" width={35} height={35} />
        <Image src="/whatsapp.svg" alt="WhatsApp" width={35} height={35} />
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl py-2 px-4 mt-6 inline-block">
        <div className="text-xl font-medium">92%</div>
        <div className="text-xs opacity-90">Conversion Rate</div>
      </div>

      <div className="flex justify-center mt-6 -space-x-3">
        <Image src="/user1.svg" alt="User 1" width={40} height={40} className="rounded-full border-2 border-white" />
        <Image src="/user2.svg" alt="User 2" width={40} height={40} className="rounded-full border-2 border-white" />
        <Image src="/user3.svg" alt="User 3" width={40} height={40} className="rounded-full border-2 border-white" />
      </div>
    </div>
  );
}
