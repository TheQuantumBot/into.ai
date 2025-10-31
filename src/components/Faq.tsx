'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Badge from './Badge';
import Hero from './Hero';

const faqData = [
  { id: 1, question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Namvele at libero hendrerit ultrices at nisl.', defaultOpen: true },
  { id: 2, question: 'Aenean ultricies lectus a tristique?', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Namvele at libero hendrerit ultrices at nisl.' },
  { id: 3, question: 'Quisque placerat tellus effic?', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Namvele at libero hendrerit ultrices at nisl.' },
  { id: 4, question: 'Pellentesque sed purus a sem aliquam lacinia?', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Namvele at libero hendrerit ultrices at nisl.' },
  { id: 5, question: 'Fusce efficitur neque condimentum vehicula?', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Namvele at libero hendrerit ultrices at nisl.' },
  { id: 6, question: 'Vivamus ornare velit eros accumsan?', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Namvele at libero hendrerit ultrices at nisl.' },
  { id: 7, question: 'Mauris is turpis facilisis pulvinar?', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Namvele at libero hendrerit ultrices at nisl.' },
  { id: 8, question: 'Pellentesque sed purus a sem aliquam lacinia?', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Namvele at libero hendrerit ultrices at nisl.' },
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
   <div className="border-b border-gray-300 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
          {faq.question}
        </span>
        {isOpen ? <Minus className="w-6 h-6 text-gray-900" /> : <Plus className="w-6 h-6 text-gray-900" />}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
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

  const leftColumnFaqs = faqData.slice(0, 4);
  const rightColumnFaqs = faqData.slice(4);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge text="FAQs" />
          <Hero title="Frequently Asked Questions" description="" />
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
