"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Badge from "./Badge";
import Hero from "./Hero";

const faqData111 = [
  {
    id: 1,
    question: "What makes SalesBot different from regular chatbots?",
    answer: `SalesBot isn’t a typical chatbot that just responds. 
It behaves like a real sales representative — powered by Agentic AI that understands context, handles objections, and guides customers towards a decision.
It doesn’t just talk. It converts.`,
    defaultOpen: true,
  },

  {
    id: 2,
    question: "Is there a free trial available?",
    answer:
      "Yes - this program is designed to run alongside your existing work.",
  },
  {
    id: 3,
    question: "Can I customise the tone and personality?",
    answer:
      "Yes -  partners automatically get access to our full AI suite as we launch new tools.",
  },
  {
    id: 4,
    question: "Does SalesBot replace my sales team?",
    answer: "Monthly payouts via bank transfer/UPI.",
  },
  {
    id: 5,
    question: "Can SalesBot handle objections and follow-ups? ",
    answer: "Can SalesBot handle objections and follow-ups?",
  },
  {
    id: 6,
    question: "Do I need any technical setup or coding?",
    answer: "Do I need any technical setup or coding",
  },
  {
    id: 7,
    question: "What’s included in the paid plans?",
    answer: "What’s included in the paid plans?",
  },
  {
    id: 8,
    question: "How secure is my data? ",
    answer: "How secure is my data?",
  },
  {
    id: 9,
    question: "What support do I get after purchasing? ",
    answer: "What support do I get after purchasing?",
  },
];
const faqData = [
  {
    id: 1,
    question: "What makes SalesBot different from regular chatbots?",
    answer: `SalesBot isn’t a typical chatbot that just responds. 
It behaves like a real sales representative — powered by Agentic AI that understands context, handles objections, and guides customers towards a decision.

It doesn’t just talk. It converts.`,
    defaultOpen: true,
  },
  {
    id: 2,
    question: "Do I need any technical setup or coding?",
    answer: `No setup headaches — no coding required.
You can deploy SalesBot on your website, WhatsApp, Instagram, or landing pages in just a few minutes.

If you can copy-paste, you can launch SalesBot.`,
  },
  {
    id: 3,
    question: "Is there a free trial available?",
    answer: `Yes, we offer a free trial so you can experience SalesBot before choosing a plan.
Test real conversations, see real conversions — no credit card required.`,
  },
  {
    id: 4,
    question: "What’s included in the paid plans?",
    answer: `All paid plans include access to:
• Agentic AI selling engine
• Smart lead qualification
• Objection handling
• Multi-channel deployment
• Real-time analytics and insights

Higher plans unlock:
• Additional chat volumes
• CRM syncing
• Team seats
• Enterprise integrations
• Deeper automation`,
  },
  {
    id: 5,
    question: "Can I customise the tone and personality?",
    answer: `100%.
SalesBot adapts to your brand — friendly, professional, bold, or conversational.
It speaks like your business, not like a script.`,
  },
  {
    id: 6,
    question: "How secure is my data?",
    answer: `Your data stays protected with enterprise-grade encryption, secure storage, and compliance standards.
Customer conversations remain private and are used only to improve their buying journey.`,
  },
  {
    id: 7,
    question: "Does SalesBot replace my sales team?",
    answer: `No — it boosts your sales team's performance.
SalesBot handles first-touch interactions, warms up prospects, and qualifies leads, so your team closes deals instead of answering repetitive questions.

Think of it as your AI SDR working 24/7.`,
  },
  {
    id: 8,
    question: "What support do I get after purchasing?",
    answer: `You get:
• Guided onboarding
• Live support from our success team
• Best-practice playbooks
• Strategy assistance to maximise conversions

We don't just give you a bot — we help you win with it.`,
  },
  {
    id: 9,
    question: "Can SalesBot handle objections and follow-ups?",
    answer: `Yes. SalesBot is designed to reduce drop-offs by:
• Addressing pricing concerns
• Handling doubts in real time
• Following up automatically without sounding robotic

It nudges prospects until they convert — or qualify out.`,
  },
];

type FAQType = {
  id: number;
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

type FAQItemProps = {
  faq: FAQType;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  // Split answer into lines
  const lines = faq.answer.split("\n").filter((line) => line.trim() !== "");

  return (
    <div className="border-b border-gray-300 border-t">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
          {faq.question}
        </span>
        {isOpen ? (
          <Minus className="w-6 h-6 text-gray-900" />
        ) : (
          <Plus className="w-6 h-6 text-gray-900" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-600 font-medium text-base md:text-base leading-relaxed mb-6 space-y-3">
          {lines.map((line, index) =>
            line.trim().startsWith("•") ? (
              <li key={index} className="list-disc list-inside">
                {line.replace("•", "").trim()}
              </li>
            ) : (
              <p key={index}>{line}</p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeaturesFaq() {
  // Define state type explicitly
  const [openItems, setOpenItems] = useState<Record<number, boolean>>(() => {
    const initialState: Record<number, boolean> = {};
    faqData.forEach((faq) => {
      initialState[faq.id] = !!faq.defaultOpen;
    });
    return initialState;
  });

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const leftColumnFaqs = faqData.slice(0, 5);
  const rightColumnFaqs = faqData.slice(5);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge text="FAQs" />
          <Hero
            title="Frequently Asked Questions"
            description=""
            className="font-interTight font-semibold text-[44px] leading-[50px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div>
            {leftColumnFaqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={Boolean(openItems[faq.id])}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>
          <div>
            {rightColumnFaqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={Boolean(openItems[faq.id])}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
