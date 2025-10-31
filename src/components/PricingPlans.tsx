import React from "react";
import Badge from "@/components/Badge";
import Hero from "./Hero";
import ProcessSection from "./ProcessSection";
import PricingCard from "./PricingCard";
import { FileQuestionMark } from "lucide-react";
import Faq from "./Faq";
import CtaCard from "./CtaCard";

interface PricingPlansProps {
  text: string;
}

const PricingPlans: React.FC<PricingPlansProps> = ({ text }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-3 text-black text-lg font-medium space-y-6">
      <div >
        <Badge text="Pricing & Plans" />
      </div>
      <div className="w-full items-center justify-center ">
        <Hero title={`Choose the plan that's right for you`} description={"Start with our straightforward pricing to transform your LinkedIn outreach"} >

        </Hero>
        <div className="w-full flex justify-center">
          <div className="w-full md:w-3/5 [@media(max-width:768px)]:w-0">
            <PricingCard />
          </div>
        </div>
        
        <div className="w-full">
          <Faq />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full md:w-3/5">
          <CtaCard />
        </div>
        </div>
      </div>

    </div>

  );
};

export default PricingPlans;