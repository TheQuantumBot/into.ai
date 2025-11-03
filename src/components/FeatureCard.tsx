"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

interface FeatureCardProps {
  img: string;
  title: string;
  description: string;
  buttonText?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  img,
  title,
  description,
  buttonText = "Start Free Trial",
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-[20px] border h-auto border-[#EAEAEA] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden ${className}`}
    >
      {/* Image */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
        <Image
          src={img}
          alt="feature image"
          fill
          className="object-contain rounded-t-[20px]"
        />
      </div>

      {/* Text */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <h3
          className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-gray-900 leading-snug"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div
          className="text-[15px] sm:text-[16px] md:text-[18px] text-[#808080] leading-[24px] font-medium mt-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="mt-6">
          <Button>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
