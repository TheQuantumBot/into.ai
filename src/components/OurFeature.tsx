import React from "react";
import Badge from "@/components/Badge";
import Hero from "./Hero";
import MultiCampaignCard from "./MultiCampaignCard";
import WhatsAppAgentCard from "./WhatsAppAgentCard";
import LeadIntelligencecard from "./LeadIntelligencecard";
import ROIOptimization from "./ROIOptimization";
import Heros from "./Heros";
import MultiCampaignCardDesktop from "./MultiCampaignCardComponents/MultiCampaignCardDesktop";

interface OurfeatureProps {
  text: string;
}

const Ourfeature: React.FC<OurfeatureProps> = ({ text }) => {
  return (
    <div className="w-[1542px] flex flex-col items-center justify-center py-3 text-black font-medium space-y-6">
      {/* Badge */}
      <Badge text="Our Benefits" />

      {/* Hero */}
      <div className="w-full flex flex-col items-center justify-center">
        <Heros
          title={`Everything you need to <span class="gradient-text">Scale Your Sales</span>`}
          description="From campaign launch to customer conversion, Our AI-powered platform handles every steps of your sales funnel."
        />
      </div>

      {/* Cards */}
      <div className="w-full flex justify-center">
        <div className="w-full mx-auto">
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-3/5">
              {/* <MultiCampaignCard /> */}

              <div className="block">
                <MultiCampaignCardDesktop />
              </div>

              {/* Tablet: md to lg */}
              {/* <div className="hidden md:block lg:hidden">
                <MultiCampaignCardTablet />
              </div> */}

              {/* Mobile: below md */}
              {/* <div className="block md:hidden">
                <MultiCampaignCardMobile />
              </div> */}
            </div>
            <div className="w-full md:w-2/5">
              <WhatsAppAgentCard />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-6 mt-5">
            <div className="w-full md:w-2/5">
              <LeadIntelligencecard />
            </div>
            <div className="w-full md:w-3/5">
              <ROIOptimization />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourfeature;
