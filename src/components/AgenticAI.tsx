"use client";

import React from "react";
import Image from "next/image";

import Button from "./Button";
import Badge from "./Badge";
import { useRouter } from "next/navigation";
import ScrollAnimation from "./ScrollAnimation";

const AgenticAIHero = () => {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0 md:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Text Section */}
          <div
            className="relative flex justify-center items-center bg-cover bg-center h-auto"
            style={{ backgroundImage: "url('AiImages.png')" }}
          >
            <div className="relative w-[360px] h-[360px] flex justify-center items-center rounded-full bg-transparent">
              <div className="flex mt-[25px] mr-[40px] items-center text-[19px] tracking-[2px] font-semibold absolute w-[200.29px] h-[45.31px] opacity-100 rounded-[433.34px] pt-[8.63px] pr-[19.26px] pb-[9.63px] pl-[19.26px] gap-[10.62px] bg-[linear-gradient(91.11deg,#9673E9_0.3%,#C558E5_29.11%,#EC9C75_57.17%,#EC7B5C_76.66%,#E9AE89_98.87%)]">
                <span>
                  <Image
                    src="/StartIcon.svg"
                    alt="StartIcon"
                    width={25}
                    height={25}
                  />
                </span>
                Agentic AI
                <Image
                  src="/ArrowAI.svg"
                  alt="ArrowAI"
                  width={30}
                  height={30}
                  className="absolute right-[-16px] top-[-16px] rotate-[0deg]"
                />
              </div>
            </div>

            {/* Floating Labels */}
            <div className="absolute top-[2%] right-20 animate-float-slow ">
              <div className="bg-[rgba(255,255,255,1)] shadow-md px-[19px] py-[10px] rounded-[8px] text-sm font-medium flex items-center gap-2 rotate-[5deg]  text-gray-500">
                <span className="border border-[rgba(255,147,1,1)] p-[4px] rounded-[10px]">
                  <Image
                    src="/LightingIcon.svg"
                    alt="LightingIcon"
                    width={15}
                    height={15}
                  />
                </span>
                Real-time Qualification
              </div>
            </div>
            <div className="absolute top-6 left-0 animate-float">
              <div className=" p-3 rounded-full">
                <Image
                  src="/VectorIcon.svg"
                  alt="VectorIcon"
                  width={43}
                  height={43}
                />
              </div>
            </div>
            <div className="absolute bottom-[0%] left-[5%] animate-float-slow">
              <div className="bg-[rgba(255,255,255,1)] shadow-md px-[19px] py-[10px] rounded-[8px] text-sm font-medium flex items-center gap-2 rotate-[5deg] text-gray-500">
                <span className="border border-[rgba(247,78,140,1)] p-[4px] rounded-[10px]">
                  <Image
                    src="/MindIcon.svg"
                    alt="MindIcon"
                    width={15}
                    height={15}
                  />
                </span>
                Smart Decisions
              </div>
            </div>

            <div className="absolute bottom-[0%] right-[5%] animate-float">
              <div className="bg-[rgba(255,255,255,1)] shadow-md px-[19px] py-[10px] rounded-[8px] text-sm font-medium flex items-center gap-2 rotate-[-5deg] text-gray-500">
                <span className="border border-[rgba(230,202,41,1)] p-[4px] rounded-[10px] bg-[rgba(255,252,237,1)]">
                  <Image
                    src="/PortIcon.svg"
                    alt="PortIcon"
                    width={15}
                    height={15}
                  />
                </span>
                More Closed Deals
              </div>
            </div>

            <div className="absolute top-[185px] right-10 animate-float">
              <div className="p-3 rounded-ful">
                <Image src="/AiIcon.svg" alt="AiIcon" width={43} height={43} />
              </div>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full flex justify-center items-center py-8 ">
            <div className="space-y-8 max-w-xl text-center md:text-left">
              {/* Tag */}

              <div className="">
                <Badge text="Agentic AI" />
              </div>
              {/* Main Heading */}

              <ScrollAnimation>
                <h1 className="fade-up text-[40px] sm:text-[50px] lg:text-[56px] font-[600] leading-[1.1] text-black">
                  <span className="bg-[linear-gradient(89.89deg,#35A1DA_0.24%,#857BBD_25.46%,#E8584B_50.67%,#584F9E_75.88%,#CE4C9B_101.09%)] bg-clip-text text-transparent">
                    Agentic AI
                  </span>{" "}
                  That Sells – Not Scripts
                </h1>

                {/* Subheading */}
                <p className="fade-up !my-2">
                  <span className="font-inter-tight font-medium text-[18px] leading-[26px] align-middle text-[rgba(128,128,128,1)]">
                    Most bots follow commands, SalesBot makes{" "}
                  </span>
                  <span className="font-inter-tight font-bold text-[18px] leading-[26px] align-middle text-[rgba(76,76,76,1)]">
                    decisions{" "}
                  </span>
                </p>

                {/* Description */}
                <p className="fade-up text-[17px] text-[rgba(76,76,76,1)] leading-relaxed">
                  It analyzes intent, asks the right questions, and guides every
                  chat toward one outcome –
                  <span className="font-semibold text-gray-800">
                    {" "}
                    conversion
                  </span>
                  . When a lead hesitates, SalesBot doesn’t freeze or send
                  generic replies – it uses{" "}
                  <span className="font-semibold text-gray-800">
                    context, behavior signals, and offers nudges to move them
                    forward.
                  </span>{" "}
                </p>

                {/* Highlights */}
                <div className="fade-up flex flex-wrap gap-3 text-[16px] font-medium">
                  <span className="flex items-center gap-1">
                    <Image
                      src="/LightingIcon.svg"
                      alt="LightingIcon"
                      width={18}
                      height={18}
                    />
                    <span className="bg-[linear-gradient(90.28deg,#35A1DA_0.47%,#857BBD_84.44%,#E8584B_109.47%)] bg-clip-text text-transparent">
                      Real-time Qualification
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Image
                      src="/WatchIcon.svg"
                      alt="WatchIcon"
                      width={18}
                      height={18}
                    />
                    <span className="bg-[linear-gradient(89.75deg,#E8584B_0.34%,#584F9E_141.89%)] bg-clip-text text-transparent">
                      Smart Decisions
                    </span>
                  </span>

                  <span className="flex items-center gap-1">
                    <Image
                      src="/PortIcon.svg"
                      alt="PortIcon"
                      width={18}
                      height={18}
                    />

                    <span className="bg-[linear-gradient(90.11deg,#584F9E_0.29%,#CE4C9B_118.16%)] bg-clip-text text-transparent">
                      More Closed Deals
                    </span>
                  </span>
                </div>
              </ScrollAnimation>

              {/* Button */}
              <Button
                onClick={() => {
                  router.push("https://salesbot.cloud/register");
                }}
              >
                Get Yours Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AgenticAIHero;
