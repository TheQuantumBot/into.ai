import React from "react";
import Image from "next/image";
import Badge from "./Badge";

const WhatYouGet = () => {
  return (
    <div className="w-full flex justify-center items-center py-12 lg:py-[130px] px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
        {/* Badge - Shows first on mobile, hidden on desktop */}
        <div className="w-full flex justify-center lg:hidden mb-8">
          <Badge text="What You Get" />
        </div>

        {/* ===== LEFT SIDE - Circle Section ===== */}
        <div className="flex-1 flex justify-center items-center min-w-0 order-2 lg:order-1">
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
            {/* Center Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-xl flex items-center justify-center z-10">
                <Image
                  src="/girlsImage.png"
                  alt="Into.AI"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Outer Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full border-2 border-gray-200"></div>
            </div>

            {/* Icons Around the Circle - Rotating Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* LinkedIn */}
              <div className="absolute top-4 left-24 transform -translate-x-1/2">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Image src="/Group.svg" alt="Group" width={35} height={35} />
                </div>
              </div>

              {/* Slack */}
              <div className="absolute top-1/4 right-0 transform -translate-y-1/2">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Image src="/Mail.svg" alt="Mail" width={35} height={35} />
                </div>
              </div>

              {/* Meta */}
              <div className="absolute bottom-1/4 right-0 transform translate-y-1/2">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Image src="/video.svg" alt="video" width={35} height={35} />
                </div>
              </div>

              {/* Instagram */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Image
                    src="/Rocket.svg"
                    alt="Rocket"
                    width={35}
                    height={35}
                  />
                </div>
              </div>

              {/* Messenger */}
              <div className="absolute bottom-1/4 left-0 transform translate-y-1/2">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Image
                    src="/massages.svg"
                    alt="Messenger"
                    width={35}
                    height={35}
                  />
                </div>
              </div>

              {/* WhatsApp */}
              {/* <div className="absolute top-1/4 left-0 transform -translate-y-1/2">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={35}
                    height={35}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE - Text Section ===== */}
        <div className="flex-1 flex justify-center items-center min-w-0 order-3 lg:order-2 w-full px-4 lg:px-0">
          <div className="space-y-6 w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
            {/* Badge - Shows on desktop only */}
            <div className="hidden lg:flex lg:justify-start flex justify-center">
              <Badge text="Powerful Integration" />
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-6xl font-bold  leading-[110%] text-center lg:text-left [@media(max-width:375px)]:text-[24px]  [@media(max-width:375px)]:font-[600] [@media(max-width:375px)]:leading-[34px] ">
              <span className="gradient-text">Tools & Support</span>{" "}
              <span className="text-black"> to </span>
              <br></br> <span className="text-black">Help You Win</span>
            </h2>

            {/* Checklist */}
            <div className="space-y-4 w-full flex flex-col items-start">
              {[
                "Personal partner portal & live dashboards",
                "Customer success support",
                "Product demos handled by our team",
                "Ready-to-use emails, pitch decks, creatives",
                "New product access before public release",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 text-left w-full"
                >
                  {/* Gradient Check Icon */}
                  <div
                    className="flex-shrink-0 w-8 h-8 p-[2px] flex items-center justify-center rounded-[10px] shadow-md 
      bg-[linear-gradient(90deg,#35A1DA_0.24%,#847BBD_25.46%,#E8584B_50.67%,#584F9E_75.88%,#CE4C9B_101.09%)]"
                  >
                    <div className="bg-black rounded-[10px] w-full h-full flex items-center justify-center">
                      <Image
                        src="/check.svg"
                        alt="check"
                        width={12}
                        height={12}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Checklist Text */}
                  <span className="text-gray-800 font-medium leading-relaxed flex-1">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
