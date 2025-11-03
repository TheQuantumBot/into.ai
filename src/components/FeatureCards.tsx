"use client";
import React from "react";

export default function FeatureCards({
  className = "absolute",
  description = "",
}: {
  className?: string;
  description?: string;
}) {
  return (
    <div
      className={`w-fit ${className} h-fit bg-white gap-[20px] rounded-[12.5px] flex items-center shadow-[0px_3.42px_17.11px_0px_#0000001A] hover:shadow-xl transition-shadow duration-300 p-[12px]`}
    >
      <div className="bg-cyan-50 border-[0.86px] flex items-center justify-center h-[54px] w-[54px] border-[#CDEEEE] rounded-full  flex-shrink-0">
        <svg
          width="23"
          height="23"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3591_79297)">
            <path
              d="M10.397 11.6097C9.97372 11.8108 9.49492 12.168 9.17225 12.5808C9.48445 12.6918 9.69079 12.8531 9.84162 13.1706C10.1433 13.8055 9.81531 14.4801 9.28629 14.7314C8.96885 14.8823 8.70694 14.877 8.39479 14.7659C8.38425 15.2897 8.52985 15.8691 8.73095 16.2923C9.58568 18.0911 11.7207 18.7628 13.4136 17.9583C15.2124 17.1036 15.8841 14.9686 15.0796 13.2757C14.2752 11.5827 12.1957 10.755 10.397 11.6097Z"
              fill="black"
            />
            <path
              d="M29.8504 18.7135L22.7761 16.1087L22.3874 17.2013L20.0461 16.3683C20.2892 14.6963 20.1144 12.9636 19.3099 11.2706C17.6005 7.67303 13.2353 5.85618 9.38632 7.03653C4.1115 8.7647 1.94044 15.1141 5.30606 19.7405C7.24289 22.4518 10.7826 23.6234 13.9968 22.7446C16.4199 22.112 18.1286 20.5219 19.1628 18.6038L21.5041 19.4368L21.1657 20.6353L28.2399 23.2401C29.4887 23.6844 30.8642 23.0308 31.2026 21.8324C31.7024 20.4275 31.0991 19.1578 29.8504 18.7135ZM14.417 20.0806C11.4543 21.4883 8.02032 20.2666 6.61254 17.3038C5.20476 14.3411 6.42653 10.9072 9.38928 9.49942C12.352 8.09164 15.786 9.31338 17.1937 12.2761C18.6015 15.2389 17.3797 18.6728 14.417 20.0806Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_3591_79297">
              <rect
                width="25.8105"
                height="25.8105"
                fill="white"
                transform="translate(0 8.57969) rotate(-19.4152)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col gap-[11px] max-w-[267px]">
        <div className="font-semibold text-[16px] leading-[18px] capitalize text-[#1E1E1E]">
          Faster replies
        </div>
        <div className="font-normal text-[14px] leading-[120%] text-[#9A9A9A]">
          {description}
        </div>
      </div>
    </div>
  );
}
