"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const WhoCanBecomePartner = () => {
  const roles = [
    { text: "Digital marketing agencies" },
    { text: "Freelancers & consultants" },
    { text: "Startup founders" },
    { text: "Sales professionals" },
    { text: "Business coaches & consultants" },
    { text: "Influencers & community leaders" },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentGradientIndex, setCurrentGradientIndex] = React.useState(2);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const itemHeight = 50;
    const totalHeight = roles.length * itemHeight;

    const animate = () => {
      scrollPosition += 0.5;

      // Reset position for infinite loop
      if (scrollPosition >= totalHeight) {
        scrollPosition = 0;
      }

      // Calculate which item is at gradient position
      const offset = Math.floor(scrollPosition / itemHeight);
      setCurrentGradientIndex(2 + offset);

      scrollContainer.style.transform = `translateY(-${scrollPosition}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [roles.length]);

  // Triple the roles for seamless infinite scroll
  const extendedRoles = [...roles, ...roles, ...roles];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left Content */}
        <div className="relative space-y-6">
          <div className="bg-white inline-block border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-700 font-bold">
            Partner
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Who Can <br /> Become a Partner
          </h2>

          <p className="text-gray-500 text-lg">
            Perfect for Anyone With a Network - No Tech Skills Needed
          </p>

          <button className="inline-flex items-center gap-2 bg-[#f05a25] text-white font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all">
            👋 Anyone who believes in AI
          </button>

          <div className="absolute right-0 top-0 hidden md:block">
            <Image src="/arrow.svg" alt="Arrow" width={200} height={100} />
          </div>
        </div>

        {/* Right Side - Continuous Infinite Scroll */}
        <div className="relative h-[250px] overflow-hidden md:pl-8">
          <div
            ref={scrollRef}
            className="absolute w-full"
            style={{ top: "50px" }}
          >
            {extendedRoles.map((role, i) => {
              const position = i * 50; // 50px spacing between items (reduced gap)

              // Check if this item is currently at gradient position
              const isGradientLine =
                i === currentGradientIndex ||
                i === currentGradientIndex + roles.length ||
                i === currentGradientIndex + roles.length * 2;
              // Next line after gradient is black
              const isBlackLine =
                i === currentGradientIndex + 1 ||
                i === currentGradientIndex + 1 + roles.length ||
                i === currentGradientIndex + 1 + roles.length * 2;

              return (
                <div
                  key={`${role.text}-${i}`}
                  className="text-2xl sm:text-3xl font-semibold absolute w-full text-center"
                  style={{
                    top: `${position}px`,
                  }}
                >
                  {isGradientLine ? (
                    <span
                      className="inline-block transition-all duration-300 font-bold"
                      style={{
                        background:
                          "linear-gradient(to right, #3b82f6, #a855f7, #ec4899)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {role.text}
                    </span>
                  ) : (
                    <span
                      className={`inline-block transition-all duration-300 ${
                        isBlackLine
                          ? "text-gray-900 font-semibold"
                          : "text-gray-300"
                      }`}
                    >
                      {role.text}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanBecomePartner;
