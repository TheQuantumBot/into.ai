import React from "react";
import Badge from "@/components/Badge";
import Hero from "./Hero";
import MultiCampaignCard from "./MultiCampaignCard";
import WhatsAppAgentCard from "./WhatsAppAgentCard";
import LeadIntelligencecard from "./LeadIntelligencecard";
import ROIOptimization from "./ROIOptimization";
import TestimonialCard from "./TestimonialCard";

interface TestimonialProps {
  text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text }) => {
  const testimonials = [
    {
      name: "Raj P.",
      role: "CEO",
      company: "FashionHubs",
      avatar: "/Testimonial1.svg",
      testimonial: "The WhatsApp AI bot feels almost human! It engages leads instantly, even outside office hours, and books meetings for us while we sleep."
    },
    {
      name: "Anita K.",
      role: "CMO",
      company: "StyleWorld",
      avatar: "/Testimonial2.svg",
      testimonial: "The WhatsApp AI bot feels almost human! It engages leads instantly, even outside office hours, and books meetings for us while we sleep."
    },
    {
      name: "Michael B.",
      role: "COO",
      company: "UrbanStore",
      avatar: "/Testimonial2.svg",
      testimonial: "The WhatsApp AI bot feels almost human! It engages leads instantly, even outside office hours, and books meetings for us while we sleep."
    },
    {
      name: "Michael B.",
      role: "COO",
      company: "UrbanStore",
      avatar: "/Testimonial2.svg",
      testimonial: "The WhatsApp AI bot feels almost human! It engages leads instantly, even outside office hours, and books meetings for us while we sleep."
    },
    {
      name: "Michael B.",
      role: "COO",
      company: "UrbanStore",
      avatar: "/Testimonial2.svg",
      testimonial: "The WhatsApp AI bot feels almost human! It engages leads instantly, even outside office hours, and books meetings for us while we sleep."
    },
    {
      name: "Michael B.",
      role: "COO",
      company: "UrbanStore",
      avatar: "/Testimonial2.svg",
      testimonial: "The WhatsApp AI bot feels almost human! It engages leads instantly, even outside office hours, and books meetings for us while we sleep."
    }
  ];

  return (
<div className="w-full flex flex-col items-center justify-center py-12 text-black text-lg font-medium space-y-6 relative px-0">
  <div className="px-4 sm:px-6 lg:px-8">
    <Badge text="Testimonial" />
  </div>

  <div className="px-4 sm:px-6 lg:px-8">
    <Hero
      title={`<span class="gradient-text">Trusted by </span> Sales Teams Worldwide`}
      description={
        "Sales teams across the globe rely on powerful AI solutions to drive growth, build trust, and achieve lasting success."
      }
    />
  </div>

  {/* Scroll wrapper */}
  <div className="relative w-full py-8 px-0">
    {/* Left gradient overlay matching card height */}
    <div
      className="absolute left-[-18px] top-1/2 transform -translate-y-1/2 w-32 h-[550px] pointer-events-none z-20"
      style={{
        background: 'linear-gradient(to right, #F6F5F4 0%, rgba(246, 245, 244, 0) 100%)',
      }}
    ></div>

    {/* Right gradient overlay matching card height */}
    <div
      className="absolute right-[-18px] top-1/2 transform -translate-y-1/2 w-32 h-[550px] pointer-events-none z-20"
      style={{
        background: 'linear-gradient(to left, #F6F5F4 0%, rgba(246, 245, 244, 0) 100%)',
      }}
    ></div>

    {/* Scrollable cards */}
    <div className="flex animate-scroll gap-8 items-start">
      {testimonials.concat(testimonials).map((testimonial, index) => {
        const rotations = ['rotate-6', '-rotate-6', 'rotate-3', '-rotate-6', '-rotate-8', '-rotate-12'];
        const rotationClass = rotations[index % rotations.length];

        return (
          <div
            key={index}
            className={`transform ${rotationClass} hover:rotate-0 transition-transform duration-300 ease-in-out`}
          >
            <div className="w-[250px] h-[350px] flex flex-col justify-between px-4 py-4">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
                testimonial={testimonial.testimonial}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

  );
};

export default Testimonial;