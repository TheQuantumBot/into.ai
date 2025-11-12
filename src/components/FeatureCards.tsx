"use client";
import React from "react";

export default function FeatureCards({
  className = "absolute",
  description = "",
  title = "",
  svgClass = "",
  svg = <></>,
}: {
  className?: string;
  description?: string;
  title?: string;
  svgClass?: string;
  svg?: any;
}) {
  return (
    <div
      className={`w-[191px] lg:w-fit ${className} h-fit bg-white gap-[6px] md:gap-[12px] lg:gap-[20px] rounded-[12.5px] flex items-center shadow-[0px_3.42px_17.11px_0px_#0000001A] hover:shadow-xl transition-shadow duration-300 p-[6px] md:p-[8px] lg:p-[12px]`}
    >
      <div
        className={`${svgClass} border-[0.86px] flex items-center justify-center w-[28px] lg:w-[54px] h-[28px] lg:h-[54px] rounded-full  flex-shrink-0`}
      >
        {svg}
      </div>

      <div className="flex flex-col gap-[5px] md:gap-[8px] lg:gap-[11px] max-w-[267px]">
        <div className="font-semibold text-[8px] md:text-[12px] lg:text-[16px] leading-[9px] lg:leading-[18px] capitalize text-[#1E1E1E]">
          {title}
        </div>
        <div className="font-normal text-[7px] md:text-[10px] lg:text-[14px] leading-[120%] text-[#9A9A9A]">
          {description}
        </div>
      </div>
    </div>
  );
}
