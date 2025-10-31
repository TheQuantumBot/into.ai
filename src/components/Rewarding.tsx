
"use client";
import { useEffect, useState } from 'react'
import Image from "next/image";
import Badge from './Badge';
import Hero from './Hero';
import RewardingCard from './RewardingCard';

const cards = [
  {
    img: "/rewardingImage1.svg",
    title: "Apply - Get approved in under 24 hours",
  },
  {
    img: "/rewardingImage2.svg",
    title: "Receive your partner code & toolkit",
  },
  {
    img: "/rewardingImage3.svg",
    title: "Promote & connect us with leads",
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
    return (

        <div className="w-full flex min-h-screen flex-col items-center justify-center py-12 text-black text-lg font-medium space-y-8 relative px-0">
            <div className="px-4 sm:px-6 lg:px-8">
                <Badge text="How Its Work" />
            </div>

            <div className="px-4 sm:px-6 lg:px-8">
                <Hero
                    title={`<span class="text-black text-[60px]">Simple, Transparent, Rewarding</span> <span class="gradient-text text-[60px]">4 Steps to Start</span>`}
                    description={
                        "Everything is automated: onboarding, tracking, and payout system."
                    }
                />

            </div>
            <div className="overflow-hidden w-[320px] sm:w-[960px]">
                <RewardingCard rewardContent={cards} current={current} />
            </div>
        </div>
    )
}

export default Rewarding
