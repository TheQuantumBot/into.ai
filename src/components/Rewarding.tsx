"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Badge from "./Badge";
import Hero from "./Hero";
import RewardingCard from "./RewardingCard";
import Heros from "./Heros";

const cards = [
  {
    img: "/rewardingImage1.svg",
    title: "1. Apply - Get approved in under 24 hours",
  },
  {
    img: "/rewardingImage2.svg",
    title: "2. Receive your partner code & toolkit",
  },
  {
    img: "/rewardingImage3.svg",
    title: "3. Promote & connect us with leads",
  },
  {
    img: "/infographic.png",
    title: "4. Earn commissions + track earnings live",
  },
];

const Rewarding = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const infiniteCards = [...cards, ...cards];

  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-center py-12 text-black text-lg font-medium space-y-8 relative px-0">
      <div className="px-4 sm:px-6 lg:px-8">
        <Badge text="How Its Work" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 leading-[76px]">
        <Hero
          title={`<span class="text-black text-[60px]">Simple, Transparent, Rewarding -</span> <span class="gradient-text text-[60px]">4 Steps to Start</span>`}
          description={
            "Everything is automated: onboarding, tracking, and payout system."
          }
        />
      </div>

      <div className="overflow-hidden w-full flex justify-center">
        <RewardingCard rewardContent={infiniteCards} current={current} />
      </div>
    </div>
  );
};

export default Rewarding;
