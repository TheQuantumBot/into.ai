"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Badge from "@/components/Badge";
import DynamicGradientText from "./DynamicGradientText";
import ProcessCard from "./ProcessCard";

interface ProcessSectionProps {
  text: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    }),
  } as any;

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-[100px] text-black text-lg font-medium space-y-[10px] bg-[#F1F0EE]">
      <DynamicGradientText
        title={`<span class="[@media(max-width:375px)]:text-[34px]">How INTO AI</span> <br /> <span class="gradient-text  test-[60px] [@media(max-width:375px)]:text-[28px] [@media(max-width:375px)]:font-[600] [@media(max-width:375px)]:leading-[34px] [@media(max-width:1024px)]:leading-[52px]  [@media(max-width:1024px)]:text-[42px]" >Transforms Yours Sales</span>`}
        description={`INTO AI automates sales and delivers real-time insights - helping you close deals faster.`}
        badgeText="Process"
        lineHeight={"66px"}
      />

      <div ref={ref} className="w-full items-center justify-center mt-10">
        <div className="max-w-[1542px] mx-auto flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Launch campaigns",
                description:
                  "Deploy targeted campaigns across LinkedIn, Meta & WhatsApp, Our platform Optimizes targeting for maximum lead quality",
                gradient:
                  "linear-gradient(87deg, #ffffff 0%, #D4549F 12%, #F15A22 100%)",
              },
              {
                step: "02",
                title: "AI Engages Leads",
                description:
                  "Our WhatsApp AI bot immediately engages every lead, qualifying prospects and nurturing them through personalized conversations.",
                gradient:
                  "linear-gradient(87deg, #ffffff 0%, #8A43E1 12%, #8A43E1 100%)",
              },
              {
                step: "03",
                title: "Convert & Analyze",
                description:
                  "Track lead sentiment, conversion rates & ROI in real-time. Get actionable insights to optimize your sales process.",
                gradient:
                  "linear-gradient(87deg, #ffffff 0%, #54ACD4 12%, #54ACD4 100%)",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <ProcessCard
                  step={card.step}
                  title={card.title}
                  description={card.description}
                  gradient={card.gradient}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
