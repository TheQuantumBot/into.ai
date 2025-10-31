import React from "react";
import Badge from "@/components/Badge";
import Hero from "./Hero";
import ProcessCard from "./ProcessCard";
import IntegrationPlatform from "./IntegrationPlatform";

interface ProcessSectionProps {
  text: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ text }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-3 text-black text-lg font-medium space-y-[10px]">
      {/* Section Badge */}
      <div>
        <Badge text="Process" />
      </div>

      {/* Hero Section */}
      <div className="w-full items-center justify-center">
        <Hero
          title={`<span class="[@media(max-width:375px)]:text-[34px]">How INTO AI</span> <br /> <span class="gradient-text  test-[60px] [@media(max-width:375px)]:text-[28px] [@media(max-width:375px)]:font-[600] [@media(max-width:375px)]:leading-[34px] [@media(max-width:1024px)]:leading-[52px]  [@media(max-width:1024px)]:text-[42px]" >Transforms Yours Sales</span>`}

          description={
            `INTO AI automates sales and delivers real-time insights - helping you close deals faster.`
          }
        />

        {/* Cards Wrapper */}
        <div className="w-full flex justify-center">
          <div className="w-full mx-[8%] grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              step="01"
              title="Launch campaigns"
              description="Deploy targeted campaigns across LinkedIn, Meta & WhatsApp, Our platform Optimizes targeting for maximum lead quality."
              gradient="linear-gradient(87deg, #ffffff 0%, #D4549F 12%, #F15A22 100%)"
            />
            <ProcessCard
              step="02"
              title="Ai Engages Leads"
              description="Our WhatsApp AI bot immediately engages every lead, qualifying prospects and nurturing them through personalized conversations."
              gradient="linear-gradient(87deg, #ffffff 0%, #8A43E1 12%, #8A43E1 100%)"
            />
            <ProcessCard
              step="03"
              title="Convert & Analyze"
              description="Track lead sentiment, conversion rates & ROI in real-time. Get actionable insights to optimize your sales process."
              gradient="linear-gradient(87deg, #ffffff 0%, #54ACD4 12%, #54ACD4 100%)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
