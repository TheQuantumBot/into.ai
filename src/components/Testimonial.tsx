import React from "react";
import Badge from "@/components/Badge";
import Hero from "./Hero";
import TestimonialCard from "./TestimonialCard";
import Heros from "./Heros";

interface TestimonialProps {
  text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text }) => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Lead",
      company: "",
      avatar: "/Image_container_sarah_girl.svg",
      testimonial:
        "“INTO AI transformed our lead generation process. We’re seeing 3x more qualified leads and our conversion rate has doubled.”",
    },
    {
      name: "Raj P.",
      role: "COO @ FashionHub",
      company: "",
      avatar: "/Image_container_raj.svg",
      testimonial:
        "The WhatsApp AI bot feels almost human! It engages leads instantly, even outside office hours, and books meetings for us while we sleep.",
    },
    {
      name: "Sarah Mitchell",
      role: "Marketing Lead",
      company: "",
      avatar: "/Testimonial1.svg",
      testimonial:
        "“INTO AI transformed our lead generation process. We’re seeing 3x more qualified leads and our conversion rate has doubled.”",
    },
    {
      name: "Carlos M.",
      role: "Founder @ Essentials",
      company: "",
      avatar: "/Image_container_carlos.svg",
      testimonial:
        "“With Into AI, our sales team no longer wastes time on cold leads. The AI bot filters and nurtures prospects automatically — our pipeline has never been stronger.”",
    },
    {
      name: "Lena K.",
      role: "Marketing @ HomeDecor",
      company: "",
      avatar: "/Image_container_lena.svg",
      testimonial:
        "“Before Into AI, we struggled to track campaigns across platforms. Now, LinkedIn, Meta, and WhatsApp campaigns are all in one dashboard — a game changer for our team”",
    },
    {
      name: "Sarah Mitchell",
      role: "CEO @ LifeStyle Co.",
      company: "UrbanStore",
      avatar: "/Image_container_sarah.svg",
      testimonial:
        "“Our conversion time dropped from weeks to just days. Into AI nurtures leads so effectively that by the time we speak to them, they’re ready to buy”",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 text-black text-lg font-medium space-y-6 relative px-0">
      <div className="px-4 sm:px-6 lg:px-8">
        <Badge text="Testimonial" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <Heros
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
            background:
              "linear-gradient(to right, #F6F5F4 0%, rgba(246, 245, 244, 0) 100%)",
          }}
        ></div>

        {/* Right gradient overlay matching card height */}
        <div
          className="absolute right-[-18px] top-1/2 transform -translate-y-1/2 w-32 h-[550px] pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(to left, #F6F5F4 0%, rgba(246, 245, 244, 0) 100%)",
          }}
        ></div>

        {/* Scrollable cards */}
        <div className="flex animate-scroll gap-8 items-start">
          {[...testimonials, ...testimonials].map((testimonial, index) => {
            const rotations = ["rotate-6", "-rotate-6"];
            const rotationClass = rotations[index % rotations.length];

            return (
              <div
                key={index}
                className={`flex-shrink-0 transform ${rotationClass} mr-4 hover:rotate-0 transition-transform duration-300 ease-in-out`}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  avatar={testimonial.avatar}
                  testimonial={testimonial.testimonial}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
