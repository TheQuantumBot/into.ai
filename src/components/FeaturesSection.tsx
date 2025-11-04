"use client";

import Image from "next/image";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

const features = [
  {
    img: "/objectionHendling.svg",
    title: `<span class="text-black text-[32px] leading-[40px] font-[600]">Pro-Level Objection Handling</span>`,
    description: `<p class="mt-3 text-[#808080]">SalesBot knows these objections and answers with logic, value, and clarity. It reframes doubts instead of ignoring them. Like a <span class="text-black">trained closer</span> would. Reduced drop-offs. More saved deals.</p>`,
  },
  {
    img: "/politeAndTimely.svg",
    title: `<span class="text-black text-[32px] leading-[40px] font-[600]">Polite & Timely Follow-Ups</span>`,
    description: `
      <p class="mt-3 text-[#808080]">Follow-ups are where most deals are won.</p>
      <p class="mt-3 font-semibold text-[24px] text-[#808080]">SalesBot sends:</p>
      <ul class="list-disc pl-5 mt-2 text-black space-y-1">
        <div class="flex flex-wrap gap-x-8">
          <li>Timely nudges</li>
          <li>Friendly reminders</li>
        </div>
        <li>Personal follow-ups based on previous conversation tone.</li>
      </ul>
      <p class="mt-3 text-[#808080]">Never spammy, always natural.</p>
      <p class="text-[#808080]">More re-engaged leads. More booked calls. More sales.</p>
    `,
  },
  {
    img: "/conversationInsights.svg",
    title: `<span class="text-black text-[32px] leading-[40px] font-[600]">Conversion Insights – Not Just Dashboard Data</span>`,
    description: `
      <p class="mt-3 text-[#808080] text-[18px] md:text-[18px] leading-[24px] sm:text-[16px]">No complicated charts. No guesswork.</p>
      <p class="mt-2 text-[#808080] text-[20px] leading-[24px] md:text-[20px] sm:text-[16px]">You see:</p>
      <ul class="list-disc mt-2 text-black space-y-1 pl-5 md:text-[18px] sm:text-[16px]">
        <div class="flex flex-wrap gap-x-8">
          <li>Hot vs cold leads</li>
          <li>Where people drop off</li>
          <li>Top-performing messages</li>
        </div>
        <div class="flex flex-wrap gap-x-8">
          <li>Qualification flow success</li>
          <li>Revenue impact from SalesBot</li>
        </div>
      </ul>
      <p class="mt-3 text-[#808080] text-[18px] leading-[24px] md:text-[18px] sm:text-[16px]">Clear insights → smarter sales strategy.</p>
    `,
  },
  {
    img: "/brandvoice.svg",
    title: `<span class="text-black text-[32px] leading-[40px] font-[600]">Adapts to Your Brand Voice</span>`,
    description: `
      <p class="mt-3 text-[#808080]">Formal? Warm? Energetic?</p>
      <p class="mt-3 text-[#808080]">SalesBot learns your style and responds in your tone.</p>
      <p class="mt-3 text-[#808080]">Your brand. Your personality.</p>
      <p class="mt-3 text-[#808080]">Consistent across WhatsApp, LinkedIn, Meta, and web chat.</p>
      <p class="mt-3 text-[#808080]">Personal, relatable, and on-brand conversations.</p>
    `,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-16 ">
      {/* Feature Cards in two columns */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-center gap-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-10 flex-1 min-w-[320px]">
          <FeatureCard
            img={features[0].img}
            title={features[0].title}
            description={features[0].description}
          />
          <FeatureCard
            img={features[2].img}
            title={features[2].title}
            description={features[2].description}
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-10 flex-1 min-w-[320px]">
          <FeatureCard
            img={features[1].img}
            title={features[1].title}
            description={features[1].description}
          />
          <FeatureCard
            img={features[3].img}
            title={features[3].title}
            description={features[3].description}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1400px] mx-auto mt-10 bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-stretch     overflow-hidden">
        {/* Image */}
        <div className="relative w-full md:w-1/2 h-[240px] sm:h-[320px] md:h-auto min-h-[320px] flex-shrink-0">
          <Image
            src="/secureForBusiness.svg"
            alt="Built for scale illustration"
            fill
            className="object-contain md:object-contain sm:object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center text-left">
          <h3 className="text-black text-[32px] sm:text-[16px] md:text-[32px] font-semibold leading-[32px] sm:leading-[40px]">
            Built for Scale. Secured for Business.
          </h3>

          <ul className="list-disc pl-5 mt-4 text-[#808080] text-[18px] md:text-[18px] sm:text-[14px] leading-[24px] space-y-2">
            <li>Enterprise-grade architecture.</li>
            <li>Encrypted conversations.</li>
            <li>Built to scale without breaking.</li>
          </ul>

          <p className="text-[#808080] text-[18px] md:text-[18px] sm:text-[14px] mt-4 leading-[24px]">
            Whether you're a fast-growing startup or a large team,
            <br /> SalesBot grows with you. <br />
            Always running. Always secure.
          </p>

          <div className="mt-6">
            <Button>Start Free Trial</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
