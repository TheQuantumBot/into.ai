"use client";
import { ArrowRight } from "lucide-react";
import ButtonPrimary from "./Button-primary";
import FeatureCards from "@/components/FeatureCards";
import { useRouter } from "next/navigation";
import ScrollAnimation from "./ScrollAnimation";

export default function FeaturesPageHeroSection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden pt-[100px] pb-[48px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <ScrollAnimation>
            <div className="space-y-5">
              <div className="space-y-4">
                <h1 className="fade-up text-2xl sm:text-5xl lg:text-6xl font-[600] text-gray-900 leading-[66px]">
                  Conversations Built to <br /> Convert -{" "}
                  <span className="gradient-text bg-clip-text text-transparent">
                    Not Just Talk
                  </span>{" "}
                </h1>
              </div>

              <p className="fade-up font-inter-tight font-semibold italic text-lg leading-[24px] text-black max-w-md flex">
                <span className="flex flex-row gap-1">
                  {" "}
                  SalesBot isn’t here to “chat.”{" "}
                  <img
                    src="/threedot.png"
                    alt="Handshake Icon"
                    className="w-[20px] h-[20px]"
                  />
                </span>
              </p>

              <p className="fade-up text-lg	 text-[rgba(76,76,76,1)] font-medium  leading-normal max-w-md">
                It’s designed to understand leads, qualify them, handle
                objections, and close sales - just like your sharpest sales rep
                would. Powered by Agentic AI, it thinks, responds, and acts with
                purpose : Faster replies, smarter follow-ups, higher
                conversions.
              </p>
              <div className="flex items-center gap-4">
                <ButtonPrimary>Watch Demo</ButtonPrimary>

                <button
                  onClick={() => {
                    router.push("https://salesbot.cloud/register");
                  }}
                  className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium flex items-center gap-2 group"
                >
                  Get Yours Now
                </button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right - Visual with Icons */}

          <div
            className="relative flex items-center justify-center h-[500px] w-full bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/Features/pattern.svg')",
            }}
          >
            <div
              className="absolute  h-[450px] w-[350px] bg-center bg-contain bg-no-repeat top-[-34px]"
              style={{
                backgroundImage: "url('/Features/girimg.png')",
              }}
            >
              <FeatureCards
                title="Faster replies"
                svgClass=" bg-[#EAFFFF] border-[#CDEEEE]"
                svg={
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3591_79297)">
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
                }
                description="Respond instantly when buyers are most excited, before competitors even see the lead."
                className="left-[-110px] absolute bottom-[91px] -rotate-[16deg]"
              />
              <FeatureCards
                title="Smarter follow-ups"
                svgClass=" bg-[#EAECFF] border-[#C8CCED]"
                svg={
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3591_79310)">
                      <path
                        d="M21.4987 16.4546C23.0977 16.8144 24.6856 15.8098 25.0454 14.2108C25.4051 12.6118 24.4005 11.0239 22.8015 10.6641C21.2025 10.3043 19.6146 11.309 19.2548 12.908C18.8951 14.507 19.8997 16.0949 21.4987 16.4546Z"
                        fill="black"
                      />
                      <path
                        d="M15.0556 18.0471L13.9699 22.8726L25.551 25.4782L26.6367 20.6528C26.996 19.0556 25.9901 17.4655 24.3928 17.1061L18.6023 15.8033C17.0051 15.4439 15.415 16.4499 15.0556 18.0471Z"
                        fill="black"
                      />
                      <path
                        d="M12.354 5.27185L8.01122 24.5736C7.83208 25.3698 8.33694 26.1678 9.13314 26.347L28.4349 30.6897C29.2311 30.8689 30.0291 30.364 30.2083 29.5678L33.3568 15.574L32.3917 15.3569L29.2432 29.3507C29.1835 29.6161 28.9175 29.7844 28.6521 29.7247L9.35028 25.3819C9.08488 25.3222 8.91659 25.0562 8.9763 24.7908L13.3191 5.48899C13.3788 5.22359 13.6448 5.0553 13.9102 5.11502L27.904 8.26352L28.1211 7.29843L14.1273 4.14993C13.3311 3.97079 12.5331 4.47565 12.354 5.27185Z"
                        fill="black"
                      />
                      <path
                        d="M9.39685 7.14163C8.60065 6.96249 7.80265 7.46735 7.62351 8.26355L3.28075 27.5653C3.10161 28.3615 3.60647 29.1595 4.40267 29.3387L23.7045 33.6814C24.5007 33.8606 25.2987 33.3557 25.4778 32.5595L25.8035 31.1119L7.46681 26.9863C6.93601 26.8668 6.59943 26.3348 6.71886 25.804L10.8445 7.46733L9.39685 7.14163Z"
                        fill="black"
                      />
                      <path
                        d="M31.0164 7.94975L30.3649 10.845L27.4697 10.1936L27.2525 11.1587L30.1478 11.8101L29.4964 14.7054L30.4615 14.9225L31.1129 12.0272L34.0082 12.6787L34.2253 11.7136L31.33 11.0622L31.9814 8.16689L31.0164 7.94975Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3591_79310">
                        <rect
                          width="31.6549"
                          height="31.6549"
                          fill="white"
                          transform="translate(6.94922) rotate(12.68)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
                description="Reconnect naturally with perfect timing  no spam, just genuine conversations that."
                className="rotate-[6deg] absolute bottom-[34px] right-[-166px]"
              />
              <FeatureCards
                title="Higher conversions"
                svgClass=" bg-[#F5FFEA] border-[#C1D7A9]"
                svg={
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3591_79321)">
                      <path
                        d="M23.3835 2.44593C23.1966 2.46711 23.0155 2.52373 22.8497 2.6126L18.2181 5.07394C17.4967 5.46186 17.2262 6.36117 17.6141 7.08259C17.7701 7.3726 18.018 7.60252 18.319 7.736L23.7738 10.1763C24.5222 10.5091 25.3988 10.1721 25.7316 9.4236C25.85 9.15721 25.8873 8.86199 25.8389 8.57456L25.0098 3.67355C24.8789 2.89788 24.1652 2.3593 23.3834 2.44621L23.3835 2.44593Z"
                        fill="black"
                      />
                      <path
                        d="M21.9325 7.16048C21.2419 6.72241 20.3269 6.92624 19.8875 7.616L18.0427 10.5379L17.3962 9.89789C16.8136 9.3221 15.8746 9.32771 15.2988 9.91039C15.2241 9.98594 15.1577 10.0693 15.1009 10.159L11.9045 15.2061L10.4946 14.4107C9.80429 14.0217 8.93007 14.244 8.50944 14.9155L3.05045 23.553C2.61238 24.2437 2.81621 25.1586 3.50597 25.5981C4.19662 26.0362 5.1116 25.8323 5.55105 25.1426L10.2693 17.6895L11.6683 18.486C12.356 18.8779 13.2303 18.6606 13.6546 17.9924L16.6219 13.298L17.2684 13.9381C17.8511 14.5138 18.7901 14.5082 19.3659 13.9256C19.4406 13.85 19.5069 13.7667 19.5638 13.6769L22.3882 9.20572C22.8262 8.51507 22.6223 7.59992 21.9325 7.16048Z"
                        fill="black"
                      />
                      <path
                        d="M12.259 20.5726C11.4436 20.6501 10.8455 21.374 10.923 22.1893L10.9241 22.201L11.0698 23.6717C11.1473 24.487 11.8712 25.0852 12.6865 25.0077L12.6982 25.0065C13.5129 24.923 14.1057 24.1947 14.0222 23.38C14.0222 23.3797 14.0222 23.3795 14.0221 23.3792L13.8764 21.9085C13.7989 21.0932 13.0751 20.495 12.2597 20.5725C12.2595 20.5725 12.2592 20.5726 12.259 20.5726Z"
                        fill="black"
                      />
                      <path
                        d="M18.5676 16.9664C17.7522 17.0439 17.1541 17.7678 17.2316 18.5831L17.2327 18.5948L17.6709 23.0178C17.7484 23.8331 18.4722 24.4313 19.2876 24.3538L19.2992 24.3526C20.114 24.2691 20.7068 23.5408 20.6232 22.7261C20.6232 22.7258 20.6232 22.7256 20.6232 22.7253L20.185 18.3023C20.1075 17.487 19.3837 16.8888 18.5683 16.9663C18.5681 16.9663 18.5678 16.9664 18.5676 16.9664Z"
                        fill="black"
                      />
                      <path
                        d="M24.8762 13.3599C24.0608 13.4374 23.4627 14.1613 23.5402 14.9766L23.5413 14.9883L24.2719 22.3637C24.3494 23.179 25.0733 23.7772 25.8886 23.6997L25.9003 23.6985C26.715 23.615 27.3078 22.8867 27.2243 22.072C27.2243 22.0717 27.2242 22.0715 27.2242 22.0712L26.4936 14.6959C26.4161 13.8805 25.6923 13.2824 24.8769 13.3599C24.8767 13.3599 24.8764 13.3599 24.8762 13.3599Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3591_79321">
                        <rect
                          width="25.8105"
                          height="25.8105"
                          fill="white"
                          transform="translate(0 2.54429) rotate(-5.65716)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
                description="Turn every chat into action, more site visits, more bookings, more sales."
                className="rotate-[-4deg] absolute bottom-[-50px] left-[-26px]"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
