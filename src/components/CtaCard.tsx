"use client";

import { log } from "console";
import Button from "./Button";
import ButtonPrimary from "./Button-primary";
import { useRouter } from "next/navigation";
import ScrollAnimation from "./ScrollAnimation";

interface ctsCards {
  HeadingTitle?: string;
  Description?: string;
  PrimaryButton?: string;
  secondaryButton?: string;
  primaryButtonHref?: string | any;
  secondaryButtonHref?: string | any;
}

export default function CtaCard({
  HeadingTitle,
  Description,
  PrimaryButton,
  secondaryButton,
  primaryButtonHref,
  secondaryButtonHref = "https://salesbot.cloud/register",
}: ctsCards) {
  const router = useRouter();

  return (
    <ScrollAnimation>
      <div className="max-w-7xl mx-auto my-10 ">
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-red-500 via-orange-500 to-purple-600 shadow-md">
          <div className="rounded-2xl bg-white px-6 py-8 sm:px-12 md:px-[80px] md:py-[40px] [@media(max-width:375px)]:px-[15px] lg:px-[100px] lg:py-[50px]">
            {/* Title */}
            <h2
              className="fade-up text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
              dangerouslySetInnerHTML={{ __html: HeadingTitle ?? "" }}
            ></h2>

            {/* Subtext */}
            <p className="fade-up mt-3 sm:mt-4 text-center text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto">
              {Description}
            </p>

            {/* Buttons */}
            <div className="flex flex-row  justify-center items-center gap-4 mt-6">
              {PrimaryButton && (
                <ButtonPrimary
                  onClick={() => {
                    if (primaryButtonHref && primaryButtonHref != "") {
                      router?.push(primaryButtonHref);
                    }
                  }}
                >
                  {PrimaryButton}
                </ButtonPrimary>
              )}
              {secondaryButton && (
                <Button
                  onClick={() => {
                    if (secondaryButtonHref && secondaryButtonHref != "") {
                      router?.push(secondaryButtonHref);
                    }
                  }}
                >
                  {secondaryButton}
                </Button>
              )}
            </div>

            <div className="mt-6 text-xs sm:text-sm lg:text-base text-gray-500">
              {/* Mobile View */}
              <div className="flex flex-col items-center gap-4 sm:hidden">
                {/* First Row - Free Trial and No Credit Card */}
                <div className="fade-up flex flex-row gap-6">
                  <div className="flex flex-row items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      className="flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.75 7.75L12.25 12.25M12.25 7.75L7.75 12.25M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                        stroke="#808080"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="whitespace-nowrap">Cancel anytime</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="18"
                      className="flex-shrink-0"
                      viewBox="0 0 22 18"
                      fill="none"
                    >
                      <path
                        d="M1.25 5.25H20.75M4.25 11.25H10.25M4.25 13.5H7.25M3.5 16.5H18.5C19.0967 16.5 19.669 16.2629 20.091 15.841C20.5129 15.419 20.75 14.8467 20.75 14.25V3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75V14.25C1.25 14.8467 1.48705 15.419 1.90901 15.841C2.33097 16.2629 2.90326 16.5 3.5 16.5Z"
                        stroke="#808080"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="whitespace-nowrap">
                      No credit card required
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop View */}
              <div className="fade-up hidden sm:flex flex-row items-center justify-center gap-[10px]">
                {/* Free Trial */}
                <div className="flex flex-row items-center gap-2"></div>

                {/* No Credit Card Required */}
                <div className="flex flex-row items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="18"
                    className="flex-shrink-0"
                    viewBox="0 0 22 18"
                    fill="none"
                  >
                    <path
                      d="M1.25 5.25H20.75M4.25 11.25H10.25M4.25 13.5H7.25M3.5 16.5H18.5C19.0967 16.5 19.669 16.2629 20.091 15.841C20.5129 15.419 20.75 14.8467 20.75 14.25V3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75V14.25C1.25 14.8467 1.48705 15.419 1.90901 15.841C2.33097 16.2629 2.90326 16.5 3.5 16.5Z"
                      stroke="#808080"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="whitespace-nowrap">
                    No credit card required
                  </span>
                </div>

                <div
                  className="w-[8px] h-[8px] opacity-100 rounded-[4px] bg-[#DED8D3]
"
                ></div>

                {/* Cancel Anytime */}
                <div className="flex flex-row items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.75 7.75L12.25 12.25M12.25 7.75L7.75 12.25M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                      stroke="#808080"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="whitespace-nowrap">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
