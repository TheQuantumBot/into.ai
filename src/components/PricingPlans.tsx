import React from "react";
import Badge from "@/components/Badge";
import Hero from "./Hero";
import ProcessSection from "./ProcessSection";
import PricingCard from "./PricingCard";
import { FileQuestionMark } from "lucide-react";
import Faq from "./Faq";
import CtaCard from "./CtaCard";
import Heros from "./Heros";
import PricingRechargeModel from "./PricingRechargeModel";

interface PricingPlansProps {
  text: string;
}

const PricingPlans: React.FC<PricingPlansProps> = ({ text }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-3 text-black text-lg font-medium space-y-6">
      <div>
        <Badge text="Pricing & Plans" />
      </div>
      <div className="w-full items-center justify-center ">
        <PricingRechargeModel />

        <PricingCard />

        <div className="w-full">
          <Faq />
        </div>

        <CtaCard />
      </div>
    </div>
  );
};

export default PricingPlans;
