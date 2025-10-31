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
    <div className="w-full flex flex-col items-center justify-center px-6 py-3 text-black text-lg font-medium space-y-6">
      {/* Section Badge */}
      <div>
        <Badge text="Process" />
      </div>

      {/* Hero Section */}
      <div className="w-full items-center justify-center">
        <Hero
          title={`How INTO AI <span class="gradient-text">Transforms Your Sales</span>`}
          description={
            "INTO AI automates sales and delivers real-time insights - helping you close deals faster."
          }
        />

        {/* Cards Wrapper */}
        <div className="w-full flex justify-center">
          <div className="w-full mx-[8%] grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              step="01"
              title="Launch campaigns"
              description="Deploy targeted campaigns across LinkedIn, Meta & WhatsApp. Our platform optimizes targeting for maximum lead quality."
            />
            <ProcessCard
              step="02"
              title="Engage leads"
              description="Use automated WhatsApp and multi-channel engagement to nurture prospects and close deals faster."
            />
            <ProcessCard
              step="03"
              title="Optimize ROI"
              description="Leverage AI-driven insights to optimize campaigns and maximize return on investment."
            />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ProcessSection;
