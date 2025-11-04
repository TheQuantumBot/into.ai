"use client";
import { useState } from "react";
import Button from "./Button";
import ButtonPrimary from "./Button-primary";

export default function PricingRechargeModel() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <div className="flex flex-col  lg:items-center lg:justify-between gap-[15px] md:gap-[25px]">
          {/* <div className="flex-grow"> */}
          <div className="flex flex-col items-center gap-[14px] ">
            <h2 className="text-center text-[28px] md:text-[42px] lg:text-[60px] leading-[100%] font-[600] text-[#111111]">
              Pay As You Go Recharge Model
            </h2>
            <h3 className="text-center text-[16px] leading-[100%] md:text-[18px] lg:text-[24px] lg:leading-[28px] font-[600] text-[#1E1E1E]">
              Starting at ₹10 | ₹3.6/credit
            </h3>
            {/* Subtext */}
            <p className="text-center text-[16px] leading-[100%] lg:text-[18px] lg:leading-[24px] text-[#4C4C4C] max-w-2xl mx-auto">
              Perfect For: Freelancers, startups, or early-stage businesses testing AI-led conversations. No commitments, no contracts just top-up and go. 
            </p>
          </div>
          {/* </div> */}
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 ">
            <span
              className={`text-sm font-medium ${
                !isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Billed Monthly
            </span>

            {/* Gradient Border */}
            <div
              className="rounded-full p-[2px] flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(90deg, #35A1DA -207.85%, #D4549F -28.59%, #F15A22 136.87%)",
              }}
            >
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none transition-all duration-300 ease-in-out"
                style={{
                  backgroundColor: isYearly ? "#ffffff" : "#111111", // track color
                }}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full transition-all duration-300 ease-in-out ${
                    isYearly
                      ? "translate-x-6 bg-black"
                      : "translate-x-1 bg-white"
                  }`}
                />
              </button>
            </div>

            <span
              className={`text-[14px] leading-[16px] md:text-[16px] md:leading-[20px] lg:text-[16px]  font-medium ${
                isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Billed yearly (Save 20%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
