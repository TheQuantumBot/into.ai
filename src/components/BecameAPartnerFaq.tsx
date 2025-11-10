"use client";
import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import Badge from "./Badge";
import Hero from "./Hero";

type FAQType = {
  id: number;
  question: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  defaultOpen?: boolean;
};

type FAQItemProps = {
  faq: FAQType;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-t border-b border-gray-300">
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
        <p
          className="text-gray-600 font-medium text-base md:text-base leading-relaxed "
          dangerouslySetInnerHTML={{ __html: faq.answer1 ?? "" }}
        />
        <p className="text-gray-600 font-medium text-base md:text-base leading-relaxed">
          {faq.answer2}
        </p>
        <p className="text-gray-600 font-medium text-base md:text-base leading-relaxed ">
          {faq.answer3}
        </p>
      </div>
    </div>
  );
}

export default function BecameAPartnerFaq({ faqs }: { faqs: FAQType[] }) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  // ✅ Fix: initialize open states after first render
  useEffect(() => {
    const initial: Record<number, boolean> = {};
    faqs.forEach((faq) => {
      initial[faq.id] = !!faq.defaultOpen;
    });
    setOpenItems(initial);
  }, [faqs]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <div id="faqs" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge text="FAQs" />
          <Hero
            title="Frequently Asked Questions"
            description=""
            className="font-interTight font-semibold text-[44px] leading-[50px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 lg:max-w-none md:max-w-[654px] md:mx-auto">
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
