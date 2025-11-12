"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  start?: string;
  end?: string;
  y?: number;
  duration?: number;
  stagger?: number;
}
// TODO: Add the 'fade-up' class when this section is used

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
  start = "top 80%",
  end = "bottom 60%",
  y = 50,
  duration = 1.5,
  stagger = 0.9,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".fade-up"),
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          end,
        },
      }
    );
  }, [start, end, y, duration, stagger]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
