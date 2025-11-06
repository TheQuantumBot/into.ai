"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Badge from "./Badge";
import Hero from "./Hero";
import WhatYouGet from "./WhatYouGet";

const faqData = [
  {
    id: 1,
    question: "What makes SalesBot different from regular chatbots?",
    answer: "No. We handle all demos and setup.",
    defaultOpen: true,
  },
  {
    id: 2,
    question: "Is there a free trial available?",
    answer:
      "Yes - this program is designed to run alongside your existing work.Yes, we offer a free trial so you can experience SalesBot before choosing a plan. Test real conversations, see real conversions,  no credit card required.",
  },
  {
    id: 3,
    question: "Can I promote future Into AI products?",
    answer:
      "Yes -  partners automatically get access to our full AI suite as we launch new tools.",
  },
  {
    id: 4,
    question: "How do I get paid?",
    answer: "Monthly payouts via bank transfer/UPI.",
  },
  { id: 5, question: "Is there a joining fee?", answer: "No. It’s 100% free." },
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
  return (
    <div className="border-b border-gray-300  border-t">
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
        <p className="text-gray-600 font-medium text-base md:text-base leading-relaxed mb-6">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FeatuerFaq() {
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

  const leftColumnFaqs = faqData.slice(0, 3);
  const rightColumnFaqs = faqData.slice(3);

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
