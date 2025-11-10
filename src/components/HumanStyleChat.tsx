"use client";
import ButtonPrimary from "./Button-primary";
import Button from "./Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HumanStyleChat() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden pt-[100px] pb-[48px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="w-full flex md:justify-center lg:justify-start items-center py-8 ">
            <div className="space-y-8 max-w-xl">
              <div className="inline-block border border-gray-300 bg-white rounded-full px-4 py-1 text-sm text-gray-700 font-bold whitespace-normal break-words">
                Build Trust
              </div>

              <h2
                className="text-[28px] sm:text-[40px] lg:text-[56px] font-[600] leading-tight text-black 
               whitespace-normal break-words w-full"
              >
                Human-Style <br className="block sm:hidden" /> Conversations{" "}
                <br />
                <span
                  className="gradient-text block whitespace-normal break-words leading-tight"
                  style={{
                    display: "inline",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  That Build Trust
                </span>
              </h2>

              <div className="mt-4 space-y-[14px]">
                <p className="text-[18px] text-[rgba(128,128,128,1)] leading-relaxed mt-2 whitespace-normal break-words">
                  Your customers shouldn't feel like they’re talking to a bot.
                </p>

                <p className="text-[18px] text-[rgba(128,128,128,1)] leading-relaxed whitespace-normal break-words">
                  SalesBot adapts to tone, reads context, and responds
                  thoughtfully, so conversations feel friendly, natural, and
                  consultative, not robotic.
                </p>

                <div className="flex flex-wrap gap-3 text-[16px] font-medium whitespace-normal break-words">
                  <span className="flex items-center gap-1 flex-shrink-0">
                    <Image
                      src="Replies.svg"
                      alt="Replies"
                      width={20}
                      height={20}
                    />
                    <span className="bg-[linear-gradient(90.28deg,#35A1DA_0.47%,#857BBD_84.44%,#E8584B_109.47%)] bg-clip-text text-transparent">
                      More replies.
                    </span>
                  </span>
                  <span className="flex items-center gap-1 flex-shrink-0">
                    <Image
                      src="Support.svg"
                      alt="Support"
                      width={20}
                      height={20}
                    />
                    <span className="bg-[linear-gradient(90.28deg,#35A1DA_0.47%,#857BBD_84.44%,#E8584B_109.47%)] bg-clip-text text-transparent">
                      Better support.
                    </span>
                  </span>
                  <span className="flex items-center gap-1 flex-shrink-0">
                    <Image src="Trust.svg" alt="Trust" width={20} height={20} />
                    <span className="bg-[linear-gradient(90.28deg,#35A1DA_0.47%,#857BBD_84.44%,#E8584B_109.47%)] bg-clip-text text-transparent">
                      Higher trust
                    </span>
                  </span>
                  <span className="flex items-center gap-1 flex-shrink-0">
                    <Image
                      src="TextArrow.svg"
                      alt="TextArrow"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="Conversions.svg"
                      alt="Conversions"
                      width={20}
                      height={20}
                    />
                    <span className="bg-[linear-gradient(90.28deg,#35A1DA_0.47%,#857BBD_84.44%,#E8584B_109.47%)] bg-clip-text text-transparent">
                      Higher conversions.
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <ButtonPrimary>Try a Live Demo Conversation</ButtonPrimary>
                <Button
                  onClick={() => {
                    router.push("https://salesbot.cloud/register");
                  }}
                >
                  Experience Now
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center relative md:justify-end">
            <div className="w-[648px] h-[560px] rounded-t-[20px]  rounded-b-[0px] bg-white  overflow-visible relative">
              <div className="flex  z-20  absolute left-[-128px] bottom-[126px] mt-[25px] mr-[40px] items-center text-white text-[20px] tracking-[2px] font-semibold  w-[200.29px] h-[45.31px] opacity-100 rounded-[433.34px] pt-[8.63px] pr-[19.26px] pb-[9.63px] pl-[19.26px] gap-[10.62px] bg-[linear-gradient(91.11deg,#9673E9_0.3%,#C558E5_29.11%,#EC9C75_57.17%,#EC7B5C_76.66%,#E9AE89_98.87%)]">
                <span>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41489 12.9423C6.98496 12.9835 6.56623 12.7843 6.33877 12.4362L4.32759 9.32143L0.733129 8.0339C0.330886 7.88749 0.0458172 7.53402 0.00656061 7.12435C-0.032696 6.71468 0.180058 6.3135 0.547177 6.09336L3.83172 4.14666L5.21479 0.706675C5.37201 0.321697 5.74527 0.046574 6.17521 0.00537512C6.60515 -0.0358238 7.02387 0.163407 7.25134 0.511522L9.26251 3.62625L12.857 4.91377C13.2592 5.06019 13.5443 5.41366 13.5835 5.82333C13.6228 6.233 13.41 6.63418 13.0429 6.85431L9.75839 8.80102L8.37532 12.241C8.2181 12.626 7.84483 12.9011 7.41489 12.9423ZM3.69497 6.7709L5.50352 7.41358C5.74013 7.49971 5.93769 7.65485 6.05915 7.84993L7.07708 9.41699L7.76758 7.68622C7.86006 7.45976 8.02456 7.26992 8.23023 7.15229L9.88382 6.17786L8.07527 5.53518C7.83866 5.44906 7.6411 5.29391 7.51965 5.09883L6.51302 3.53069L5.81121 5.26254C5.71873 5.489 5.55423 5.67884 5.34856 5.79647L3.69497 6.7709ZM11.7389 22.3197C11.309 22.3609 10.8902 22.1617 10.6628 21.8136L9.3093 19.7238L6.89687 18.8561C6.49463 18.7097 6.20956 18.3562 6.17031 17.9466C6.13105 17.5369 6.3438 17.1357 6.71092 16.9156L8.91467 15.6056L9.84665 13.2968C10.0039 12.9118 10.3771 12.6367 10.8071 12.5955C11.237 12.5543 11.6557 12.7535 11.8832 13.1016L13.2367 15.1914L15.6491 16.0591C16.0513 16.2055 16.3364 16.559 16.3757 16.9686C16.4149 17.3783 16.2022 17.7795 15.8351 17.9996L13.6313 19.3097L12.6993 21.6184C12.5421 22.0034 12.1688 22.2785 11.7389 22.3197ZM9.87107 17.6028L10.4976 17.8257C10.7342 17.9118 10.9317 18.0669 11.0532 18.262L11.4021 18.8052L11.6415 18.2056C11.734 17.9792 11.8985 17.7893 12.1042 17.6717L12.677 17.334L12.0505 17.1111C11.8139 17.025 11.6163 16.8698 11.4948 16.6748L11.1459 16.1316L10.9065 16.7312C10.814 16.9576 10.6495 17.1474 10.4439 17.2651L9.87107 17.6028ZM18.4216 14.6075C17.9917 14.6487 17.5729 14.4495 17.3455 14.1014L15.992 12.0116L13.5796 11.1439C13.1773 10.9975 12.8923 10.644 12.853 10.2344C12.8138 9.82469 13.0265 9.42351 13.3936 9.20338L15.5974 7.89335L16.5294 5.58457C16.6866 5.19959 17.0598 4.92447 17.4898 4.88327C17.9197 4.84207 18.3384 5.0413 18.5659 5.38941L19.9194 7.47919L22.3318 8.34687C22.7341 8.49329 23.0191 8.84676 23.0584 9.25643C23.0976 9.6661 22.8849 10.0673 22.5178 10.2874L20.314 11.5974L19.382 13.9062C19.2248 14.2912 18.8515 14.5663 18.4216 14.6075ZM16.5538 9.89061L17.1803 10.1135C17.4169 10.1996 17.6145 10.3547 17.7359 10.5498L18.0848 11.093L18.3242 10.4934C18.4167 10.267 18.5812 10.0771 18.7869 9.9595L19.3597 9.62174L18.7332 9.3989C18.4966 9.31277 18.299 9.15763 18.1775 8.96255L17.8286 8.41936L17.5892 9.01893C17.4967 9.24539 17.3322 9.43523 17.1266 9.55285L16.5538 9.89061Z"
                      fill="white"
                      fill-opacity="0.95"
                    />
                    <path
                      d="M3.69497 6.7709L5.50352 7.41358C5.74013 7.49971 5.93769 7.65485 6.05915 7.84993L7.07708 9.41699L7.76758 7.68622C7.86006 7.45976 8.02456 7.26992 8.23023 7.15229L9.88382 6.17786L8.07527 5.53518C7.83866 5.44906 7.6411 5.29391 7.51965 5.09883L6.51302 3.53069L5.81121 5.26254C5.71873 5.489 5.55423 5.67884 5.34856 5.79647L3.69497 6.7709Z"
                      fill="white"
                      fill-opacity="0.95"
                    />
                    <path
                      d="M9.87107 17.6028L10.4976 17.8257C10.7342 17.9118 10.9317 18.0669 11.0532 18.262L11.4021 18.8052L11.6415 18.2056C11.734 17.9792 11.8985 17.7893 12.1042 17.6717L12.677 17.334L12.0505 17.1111C11.8139 17.025 11.6163 16.8698 11.4948 16.6748L11.1459 16.1316L10.9065 16.7312C10.814 16.9576 10.6495 17.1474 10.4439 17.2651L9.87107 17.6028Z"
                      fill="white"
                      fill-opacity="0.95"
                    />
                    <path
                      d="M16.5538 9.89061L17.1803 10.1135C17.4169 10.1996 17.6145 10.3547 17.7359 10.5498L18.0848 11.093L18.3242 10.4934C18.4167 10.267 18.5812 10.0771 18.7869 9.9595L19.3597 9.62174L18.7332 9.3989C18.4966 9.31277 18.299 9.15763 18.1775 8.96255L17.8286 8.41936L17.5892 9.01893C17.4967 9.24539 17.3322 9.43523 17.1266 9.55285L16.5538 9.89061Z"
                      fill="white"
                      fill-opacity="0.95"
                    />
                  </svg>
                </span>
                Agentic AI
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[-16px] top-[-16px] rotate-[0deg]"
                >
                  <g filter="url(#filter0_d_3552_111783)">
                    <path
                      d="M4.55097 10.0611L12.8949 12.4174C13.5911 12.6141 14.0844 13.2276 14.1272 13.9497L14.6384 22.6049C14.7438 24.3907 17.1792 24.8172 17.914 23.1786L26.0405 5.05381C26.6118 3.77953 25.5069 2.40562 24.1397 2.69021L4.69354 6.73889C2.93527 7.10496 2.82926 9.57493 4.55097 10.0611Z"
                      fill="black"
                    />
                    <path
                      d="M4.37087 10.6984C1.95381 10.0157 2.15023 6.59142 4.55847 6.09003L24.0047 2.041C25.9014 1.64625 27.4378 3.55688 26.6454 5.32477L18.5186 23.4495C17.5121 25.6938 14.1254 25.1512 13.9773 22.644L13.4657 13.9888C13.4396 13.5484 13.1393 13.175 12.7148 13.055L4.37087 10.6984Z"
                      stroke="white"
                      stroke-width="1.32555"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3552_111783"
                      x="-5.06639e-05"
                      y="6.91414e-06"
                      width="29.5118"
                      height="28.1768"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.662777" />
                      <feGaussianBlur stdDeviation="0.994166" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3552_111783"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3552_111783"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className=" absolute z-10 top-[25px] right-[71px] inline-block ">
                <svg
                  width="53"
                  height="25"
                  viewBox="0 0 53 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4531 10.2352C10.214 9.49338 8.10473 10.9639 5.68868 10.8408C6.10824 10.3414 6.39133 9.90451 6.78417 9.5381C12.008 4.62242 18.2859 2.43979 25.4323 2.49348C27.179 2.52791 28.8722 2.82826 30.4123 3.70354C32.0405 4.62629 33.2319 5.89172 33.6585 7.93526C33.0028 8.1147 32.3919 8.2956 31.7818 8.45421C27.3972 9.60544 24.435 13.8808 24.8946 18.3566C25.2373 21.6019 27.9739 22.8952 30.658 20.975C33.4569 18.9693 34.8977 16.005 35.8539 12.7797C36.0323 12.1163 36.1891 11.43 36.3675 10.7667C42.1173 11.7341 49.6033 18.5793 51.2925 24.5225C51.6853 24.1561 52.2081 23.9277 52.263 23.6172C52.3295 22.9503 52.3787 22.1266 52.0617 21.5364C51.2185 19.9031 50.4005 18.1814 49.2128 16.8046C46.0388 13.1105 42.1181 10.3289 37.4883 8.68418C36.7345 8.43665 36.2738 8.13173 36.076 7.32236C34.8849 2.59978 31.4336 0.547207 26.943 0.133695C19.9512 -0.539497 13.5708 1.34985 7.81705 5.33385C7.2213 5.73828 6.66888 6.18872 5.95688 6.7232C5.85731 5.64936 6.52672 5.04659 6.90802 4.34524C7.48071 3.27094 8.16387 2.24483 8.69178 1.16907C8.81311 0.883054 8.62902 0.341774 8.41314 0.0894159C8.2839 -0.0709122 7.69757 0.0438679 7.44628 0.191836C7.03395 0.468396 6.6635 0.835536 6.35948 1.22714C5.61134 2.18422 4.79677 3.11684 4.22408 4.19115C2.86567 6.68971 1.61702 9.25874 0.301208 11.8256C-0.0346076 12.5061 -0.216628 13.2809 0.462087 13.7713C0.922025 14.0985 1.67875 14.2569 2.22104 14.1184C5.22564 13.3684 8.18766 12.5502 11.1511 11.6873C11.6486 11.5474 12.1086 11.1831 12.565 10.9303C12.5279 10.6912 12.4907 10.4595 12.4531 10.2352ZM27.8268 19.8347C26.5049 17.0707 27.2452 14.9758 28.496 13.0314C29.7453 11.1315 31.8365 10.218 33.8179 10.6169C32.9598 14.2693 31.6858 17.6181 27.8268 19.8347Z"
                    fill="black"
                  />
                </svg>
                <span className="text-black font-medium ">Feels human</span>
              </div>
              <div className="absolute bottom-[0px] right-[0px]  max-w-[155px] max-h-[260px]">
                <Image
                  src="/Rectangle18238.svg"
                  alt="Arrow"
                  width={200}
                  height={100}
                />
              </div>
              <div className="absolute bottom-[0px] z-10 right-[0px] ">
                <Image src="/woman.svg" alt="Arrow" width={220} height={331} />
              </div>
              <div className="absolute lg:max-w-[457px] max-w-[244px] lg:max-h-[692px] max-h-[329px] lg:left-[38px] left-[20px] top-[-60px] ">
                <Image
                  src="/HumanChet.svg"
                  alt="Arrow"
                  width={457}
                  height={692}
                  className="lg:max-w-[457px] max-w-[244px] lg:max-h-[692px] max-h-[329px] w-full h-auto"
                />
              </div>
              <div className="w-[650px] h-[78px] z-10 bg-[linear-gradient(to_bottom,_#ffffff36_0%,_#fffffff7_70%,_#fffffff5_100%)] overflow-hidden absolute bottom-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
