"use client";
import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { SpringOptions } from "motion/react";

interface CardAnimationProps {
  children: ReactNode;
  containerHeight?: string;
  containerWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function CardAnimation({
  children,
  containerHeight = "auto",
  containerWidth = "100%",
  scaleOnHover = 1.05,
  rotateAmplitude = 12,
}: CardAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const [lastY, setLastY] = useState<number>(0);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 1.5)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 1.5)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(1);
    rotateY.set(1);
  }

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
        perspective: "1700px",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative transform-style-preserve-3d will-change-transform"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
