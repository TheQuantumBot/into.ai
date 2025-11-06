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
import BecameAPartnerFaq from "./BecameAPartnerFaq";

interface PricingPlansProps {
  text: string;
}
const faqData = [
  {
    id: 1,
    question: "What makes SalesBot different from regular chatbots?",
    answer1: "SalesBot isn’t a typical chatbot that just responds.",
    answer2:
      "It behaves like  a real sales representative - powered by Agentic AI that understands context, handles objections, and guides customers towards a decision.",
    answer3: "It doesn’t just talk. It converts.",
    defaultOpen: true,
  },
  {
    id: 2,
    question: "Is there a free trial available?",
    answer1:
      "Yes, we offer a free trial so you can experience SalesBot before choosing a plan.",
  },
  {
    id: 3,
    question: "Can I customise the tone and personality?",
    answer1: "100%.",
    answer2:
      "SalesBot adapts to your brand: friendly, professional, bold, or conversational.",
    answer3: "It speaks like your business, not like a script.",
  },
  {
    id: 4,
    question: "Does SalesBot replace my sales team?",
    answer1: "No,  it boosts your sales team’s performance.",
    answer2:
      "SalesBot handles first-touch interactions, warms up prospects, and qualifies leads, so your team closes deals instead of answering repetitive questions.",
    answer3: "Think of it as your AI SDR working 24/7.",
  },
  {
    id: 5,
    question: "Can SalesBot handle objections and follow-ups? ",
    answer1: `
      <p>Yes. SalesBot is designed to reduce drop-offs by:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Addressing pricing concerns</strong></li>
        <li><strong>Handling doubts in real time</strong></li>
        <li><strong>Following up automatically without sounding robotic</strong></li>
      </ul>
    `,
    answer2: "It nudges prospects until they convert or qualify out.",
  },
  {
    id: 6,
    question: "Do I need any technical setup or coding?",
    answer1: "No setup headaches - no coding required.",
    answer2:
      "You can deploy SalesBot on your website, WhatsApp, Instagram, or landing pages in just a few minutes.",
    answer3: "If you can copy-paste, you can launch SalesBot",
  },
  {
    id: 7,
    question: "What’s included in the paid plans?",
    answer1: `
      <p>All paid plans include access to:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong><Agentic AI selling engine</strong></li>
        <li><strong><Smart lead qualification</strong></li>
        <li><strong>Objection handling</strong></li>
        <li><strong>Multi-channel deployment</strong></li>
        <li><strong>Real-time analytics and insights</strong></li>
      </ul>
    `,
    answer2:
      "Higher plans unlock additional chat volumes, CRM syncing, team seats, enterprise integrations, and deeper automation.",
  },
  {
    id: 8,
    question: "How secure is my data?",
    answer1:
      "Your data stays protected with enterprise-grade encryption, secure storage, and compliance standards.",
    answer2:
      " Customer conversations remain private and are used only to improve their buying journey.",
  },
  {
    id: 9,
    question: "What support do I get after purchasing?",
    answer1: `
      <p>You get:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Guided onboarding</strong></li>
        <li><strong>Live support from our success team</strong></li>
        <li><strong>Best-practice playbooks</strong></li>
        <li><strong>Strategy assistance to maximise conversions</strong></li>
      </ul>
    `,
    answer2: "We don't just give you a bot, we help you win with it.",
  },
];
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
          <BecameAPartnerFaq faqs={faqData as any} />
        </div>

        <CtaCard />
      </div>
    </div>
  );
};

export default PricingPlans;
