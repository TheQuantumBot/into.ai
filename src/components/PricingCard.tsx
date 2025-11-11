// "use client";

// import { useState } from "react";
// import { Check } from "lucide-react";
// import Button from "./Button";
// import { useRouter } from "next/navigation";

// export default function PlanPricing({ isYearly }: any) {
//   const router = useRouter();
//   const showTooltip = [
//     "No cap on LinkedIn Account",
//     "Unlimited Campaigns",
//     "No Maximum Product Limit",
//     "Free API Integration",
//     "Unlimited Prompts",
//     "Full AI Conversation Management",
//     "Intelligent Lead Intention Spotting",
//     "24/7 Support",
//   ];
//   const [activePlan, setActivePlan] = useState<string | null>("Pro");

//   const plans = [
//     {
//       name: "Basic",
//       borderColor: "border-[#DED8D3]",
//       bgColor: "#E8E4E2",
//       isPopular: true,
//       icon: (
//         <div className="w-16 h-16 to-green-400 rounded-2xl flex items-center justify-center mb-6">
//           <svg
//             width="46"
//             height="54"
//             viewBox="0 0 46 54"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g filter="url(#filter0_iii_3116_78102)">
//               <path
//                 d="M44.7622 6.23793C41.5922 3.06793 33.0892 6.18593 24.0002 13.2949C14.9112 6.18693 6.40817 3.06993 3.23817 6.23793C0.0681721 9.40793 3.18617 17.9109 10.2952 26.9999C3.18717 36.0889 0.0701722 44.5919 3.23817 47.7619C6.40817 50.9319 14.9112 47.8139 24.0002 40.7049C33.0892 47.8129 41.5922 50.9299 44.7622 47.7619C47.9322 44.5919 44.8142 36.0889 37.7052 26.9999C44.8132 17.9109 47.9302 9.40793 44.7622 6.23793Z"
//                 fill="url(#paint0_linear_3116_78102)"
//               />
//             </g>
//             <path
//               d="M12.908 0.690918C29.833 14.1469 29.833 39.8529 12.908 53.3079H0V0.690918H12.908Z"
//               fill="white"
//               fill-opacity="0.6"
//             />
//             <defs>
//               <filter
//                 id="filter0_iii_3116_78102"
//                 x="2"
//                 y="3.99976"
//                 width="44"
//                 height="48.0002"
//                 filterUnits="userSpaceOnUse"
//                 color-interpolation-filters="sRGB"
//               >
//                 <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                 <feBlend
//                   mode="normal"
//                   in="SourceGraphic"
//                   in2="BackgroundImageFix"
//                   result="shape"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="4" />
//                 <feGaussianBlur stdDeviation="1.5" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="shape"
//                   result="effect1_innerShadow_3116_78102"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="1" />
//                 <feGaussianBlur stdDeviation="1.5" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="effect1_innerShadow_3116_78102"
//                   result="effect2_innerShadow_3116_78102"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="-1" />
//                 <feGaussianBlur stdDeviation="0.5" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="effect2_innerShadow_3116_78102"
//                   result="effect3_innerShadow_3116_78102"
//                 />
//               </filter>
//               <linearGradient
//                 id="paint0_linear_3116_78102"
//                 x1="24.0002"
//                 y1="4.99993"
//                 x2="24.0002"
//                 y2="48.9999"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-color="#FF8080" />
//                 <stop offset="1" stop-color="#FF2F2F" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       ),
//       credits: "2,777 credits/month (3.4 ₹ /credit)",
//       description:
//         "Small to medium businesses who want consistent automation and measurable ROI. Ideal for teams managing inbound leads and repetitive customer queries daily.",
//       originalPrice: "9,999",
//       monthlyPrice: "9,499",
//       yearlyPrice: "8,999",
//       features: [
//         "No cap on LinkedIn Account",
//         "Unlimited Campaigns",
//         "No Maximum Product Limit",
//         "Free API Integration",
//         "Unlimited Prompts",
//         "Full AI Conversation Management",
//         "Intelligent Lead Intention Spotting",
//         "24/7 Support",
//       ],
//     },
//     {
//       name: "Pro",
//       borderColor: "border-yellow-400",
//       isPopular: true,
//       credits: "9,722 credits/month (3.2 ₹ /credit)",
//       icon: (
//         <div className="w-16 h-16 to-yellow-400 rounded-2xl flex items-center justify-center mb-6">
//           <svg
//             width="46"
//             height="52"
//             viewBox="0 0 46 52"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g filter="url(#filter0_iii_3116_78087)">
//               <path
//                 d="M39.0284 26C40.343 25.1869 41.4402 24.3631 42.216 23.5628C46.4449 19.1899 46.4449 12.1015 42.216 7.72865C37.9871 3.35575 31.13 3.35575 26.9011 7.72865C25.899 8.76506 24.8518 10.3726 23.8359 12.3112C22.8211 10.3735 21.7739 8.76506 20.7708 7.72865C16.5419 3.35575 9.68573 3.35575 5.45683 7.72865C1.22793 12.1006 1.22793 19.1899 5.45683 23.5628C6.23267 24.3641 7.32981 25.1879 8.64442 26C7.32981 26.8131 6.23267 27.6369 5.45683 28.4372C1.22793 32.8101 1.22793 39.8984 5.45683 44.2713C9.68573 48.6442 16.5419 48.6442 20.7708 44.2713C21.7739 43.2349 22.8211 41.6274 23.8369 39.6888C24.8518 41.6264 25.899 43.234 26.9011 44.2713C31.13 48.6442 37.9871 48.6442 42.216 44.2713C46.4449 39.8994 46.4449 32.8101 42.216 28.4372C41.4402 27.6359 40.343 26.8121 39.0284 26ZM25.4679 27.6869L23.8359 37.1771L22.2049 27.6869L13.0261 26L22.2049 24.3131L23.8359 14.8229L25.4689 24.3131L34.6467 26L25.4679 27.6869Z"
//                 fill="url(#paint0_linear_3116_78087)"
//               />
//             </g>
//             <path
//               d="M12.9727 0.228027C29.5523 13.4094 29.5523 38.5908 12.9727 51.7712H0.328125V0.228027H12.9727Z"
//               fill="white"
//               fill-opacity="0.6"
//             />
//             <defs>
//               <filter
//                 id="filter0_iii_3116_78087"
//                 x="2.28516"
//                 y="3.46938"
//                 width="43.1016"
//                 height="47.0204"
//                 filterUnits="userSpaceOnUse"
//                 color-interpolation-filters="sRGB"
//               >
//                 <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                 <feBlend
//                   mode="normal"
//                   in="SourceGraphic"
//                   in2="BackgroundImageFix"
//                   result="shape"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="3.91837" />
//                 <feGaussianBlur stdDeviation="1.46939" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="shape"
//                   result="effect1_innerShadow_3116_78087"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="0.979592" />
//                 <feGaussianBlur stdDeviation="1.46939" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="effect1_innerShadow_3116_78087"
//                   result="effect2_innerShadow_3116_78087"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="-0.979592" />
//                 <feGaussianBlur stdDeviation="0.489796" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="effect2_innerShadow_3116_78087"
//                   result="effect3_innerShadow_3116_78087"
//                 />
//               </filter>
//               <linearGradient
//                 id="paint0_linear_3116_78087"
//                 x1="23.8359"
//                 y1="4.44897"
//                 x2="23.8359"
//                 y2="47.551"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-color="#F59A70" />
//                 <stop offset="1" stop-color="#EF6D16" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       ),
//       description:
//         "Scaling businesses handling large lead volumes or multiple campaigns across teams or regions. This plan delivers performance, insights, and growth at scale.",
//       originalPrice: "34,999",
//       monthlyPrice: "33,249",
//       yearlyPrice: "31,499",
//       features: [
//         "No cap on LinkedIn Account",
//         "Unlimited Campaigns",
//         "No Maximum Product Limit",
//         "Free API Integration",
//         "Unlimited Prompts",
//         "Full AI Conversation Management",
//         "Intelligent Lead Intention Spotting",
//         "24/7 Support",
//       ],
//     },
//     {
//       name: "Enterprise",
//       borderColor: "border-[#DED8D3]",
//       bgColor: "#E8E4E2",
//       icon: (
//         <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="46"
//             height="52"
//             viewBox="0 0 46 52"
//             fill="none"
//           >
//             <g filter="url(#filter0_iii_3116_78076)">
//               <path
//                 d="M22.519 20.4985L23.1166 10.3235C23.3566 6.25131 19.257 3.32037 15.4856 4.87204L15.2975 4.95041C11.5682 6.52266 10.7963 11.4814 13.8222 14.1723L21.4405 20.9471C21.5313 21.0286 21.6433 21.0828 21.7635 21.1034C21.8837 21.1239 22.0073 21.11 22.12 21.0633C22.2327 21.0166 22.3299 20.939 22.4003 20.8394C22.4708 20.7398 22.5116 20.6223 22.5181 20.5005V20.4985H22.519Z"
//                 fill="url(#paint0_linear_3116_78076)"
//               />
//               <path
//                 d="M29.667 24.3523L39.842 24.9498C43.9151 25.1898 46.8461 21.0912 45.2934 17.3188C45.267 17.2561 45.2425 17.1934 45.2151 17.1317C43.6428 13.4014 38.6841 12.6305 35.9932 15.6555L29.2193 23.2747C29.1381 23.3655 29.0842 23.4774 29.0638 23.5975C29.0434 23.7176 29.0574 23.841 29.1041 23.9535C29.1507 24.066 29.2283 24.1631 29.3277 24.2334C29.4271 24.3038 29.5444 24.3447 29.666 24.3513L29.667 24.3523Z"
//                 fill="url(#paint1_linear_3116_78076)"
//               />
//               <path
//                 d="M25.8125 20.4985C25.8195 20.6199 25.8606 20.737 25.9311 20.8361C26.0015 20.9353 26.0985 21.0126 26.2108 21.0593C26.3232 21.1059 26.4464 21.1199 26.5664 21.0997C26.6863 21.0796 26.7982 21.026 26.8891 20.9452L34.5074 14.1713C37.5324 11.4814 36.7614 6.52266 33.0321 4.94846L32.845 4.87107C29.0716 3.3194 24.975 6.25033 25.213 10.3225L25.8106 20.4975L25.8125 20.4985Z"
//                 fill="url(#paint2_linear_3116_78076)"
//               />
//               <path
//                 d="M18.6638 24.3522C18.7852 24.3452 18.9022 24.3042 19.0014 24.2337C19.1006 24.1633 19.1779 24.0663 19.2246 23.954C19.2712 23.8416 19.2852 23.7184 19.265 23.5984C19.2448 23.4785 19.1913 23.3666 19.1105 23.2757L12.3356 15.6564C9.64664 12.6314 4.68795 13.4033 3.11374 17.1326L3.03538 17.3198C1.4837 21.0922 4.41464 25.1898 8.4868 24.9508L18.6628 24.3532L18.6638 24.3522Z"
//                 fill="url(#paint3_linear_3116_78076)"
//               />
//               <path
//                 d="M26.8882 31.0546C26.7974 30.9731 26.6855 30.919 26.5652 30.8984C26.445 30.8779 26.3214 30.8917 26.2087 30.9384C26.096 30.9852 25.9988 31.0628 25.9284 31.1624C25.858 31.262 25.8171 31.3795 25.8107 31.5013L25.2131 41.6763C24.9741 45.7485 29.0727 48.6794 32.8451 47.1268L33.0322 47.0494C36.7625 45.4762 37.5334 40.5185 34.5085 37.8275L26.8892 31.0527L26.8882 31.0546Z"
//                 fill="url(#paint4_linear_3116_78076)"
//               />
//               <path
//                 d="M29.6649 27.6476C29.5434 27.6546 29.4264 27.6957 29.3273 27.7661C29.2281 27.8365 29.1507 27.9335 29.1041 28.0459C29.0575 28.1582 29.0435 28.2814 29.0637 28.4014C29.0838 28.5214 29.1374 28.6332 29.2182 28.7241L35.9931 36.3434C38.682 39.3684 43.6407 38.5965 45.2149 34.8672L45.2933 34.6801C46.845 30.9077 43.914 26.81 39.8419 27.049L29.6669 27.6466L29.6649 27.6476Z"
//                 fill="url(#paint5_linear_3116_78076)"
//               />
//               <path
//                 d="M22.5174 31.5012C22.5105 31.3795 22.4695 31.2623 22.399 31.163C22.3285 31.0636 22.2314 30.9861 22.1188 30.9395C22.0063 30.8928 21.8829 30.8789 21.7628 30.8992C21.6426 30.9196 21.5307 30.9734 21.4398 31.0545L13.8215 37.8284C10.7965 40.5183 11.5685 45.477 15.2968 47.0512L15.4849 47.1286C19.2573 48.6803 23.3549 45.7493 23.1159 41.6772L22.5183 31.5022L22.5164 31.5012H22.5174Z"
//                 fill="url(#paint6_linear_3116_78076)"
//               />
//               <path
//                 d="M19.109 28.7242C19.1902 28.6334 19.2441 28.5215 19.2645 28.4014C19.2848 28.2814 19.2709 28.1579 19.2242 28.0454C19.1775 27.9329 19.1 27.8359 19.0006 27.7655C18.9012 27.6951 18.7839 27.6543 18.6623 27.6476L8.48725 27.0501C4.41411 26.8101 1.48317 30.9097 3.03582 34.6811C3.06227 34.7438 3.08676 34.8065 3.11419 34.8692C4.68643 38.5985 9.64513 39.3694 12.3361 36.3445L19.1099 28.7252L19.109 28.7242Z"
//                 fill="url(#paint7_linear_3116_78076)"
//               />
//             </g>
//             <path
//               d="M13.2959 0.228027C29.8765 13.4094 29.8765 38.5908 13.2959 51.7712H0.652344V0.228027H13.2959Z"
//               fill="white"
//               fill-opacity="0.6"
//             />
//             <defs>
//               <filter
//                 id="filter0_iii_3116_78076"
//                 x="2.61328"
//                 y="3.46938"
//                 width="43.1016"
//                 height="47.0202"
//                 filterUnits="userSpaceOnUse"
//                 color-interpolation-filters="sRGB"
//               >
//                 <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                 <feBlend
//                   mode="normal"
//                   in="SourceGraphic"
//                   in2="BackgroundImageFix"
//                   result="shape"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="3.91837" />
//                 <feGaussianBlur stdDeviation="1.46939" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="shape"
//                   result="effect1_innerShadow_3116_78076"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="0.979592" />
//                 <feGaussianBlur stdDeviation="1.46939" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="effect1_innerShadow_3116_78076"
//                   result="effect2_innerShadow_3116_78076"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="-0.979592" />
//                 <feGaussianBlur stdDeviation="0.489796" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="effect2_innerShadow_3116_78076"
//                   result="effect3_innerShadow_3116_78076"
//                 />
//               </filter>
//               <linearGradient
//                 id="paint0_linear_3116_78076"
//                 x1="24.1667"
//                 y1="4.44886"
//                 x2="24.1667"
//                 y2="47.5509"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-color="#E467FE" />
//                 <stop offset="1" stop-color="#8A43E1" />
//               </linearGradient>
//               <linearGradient
//                 id="paint1_linear_3116_78076"
//                 x1="24.1666"
//                 y1="4.44895"
//                 x2="24.1666"
//                 y2="47.551"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-color="#E467FE" />
//                 <stop offset="1" stop-color="#8A43E1" />
//               </linearGradient>
//               <linearGradient
//                 id="paint2_linear_3116_78076"
//                 x1="24.1649"
//                 y1="4.44886"
//                 x2="24.1649"
//                 y2="47.5509"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-color="#E467FE" />
//                 <stop offset="1" stop-color="#8A43E1" />
//               </linearGradient>
//               <linearGradient
//                 id="paint3_linear_3116_78076"
//                 x1="24.1652"
//                 y1="4.44889"
//                 x2="24.1652"
//                 y2="47.5509"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-color="#E467FE" />
//                 <stop offset="1" stop-color="#8A43E1" />
//               </linearGradient>
//               <linearGradient
//                 id="paint4_linear_3116_78076"
//                 x1="24.164"
//                 y1="4.4489"
//                 x2="24.164"
//                 y2="47.5509"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-color="#E467FE" />
//                 <stop offset="1" stop-color="#8A43E1" />
//               </linearGradient>
//               <linearGradient
//                 id="paint5_linear_3116_78076"
//                 x1="24.1645"
//                 y1="4.44888"
//                 x2="24.1645"
//                 y2="47.5509"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-color="#E467FE" />
//                 <stop offset="1" stop-color="#8A43E1" />
//               </linearGradient>
//               <linearGradient
//                 id="paint6_linear_3116_78076"
//                 x1="24.165"
//                 y1="4.44877"
//                 x2="24.165"
//                 y2="47.5508"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-color="#E467FE" />
//                 <stop offset="1" stop-color="#8A43E1" />
//               </linearGradient>
//               <linearGradient
//                 id="paint7_linear_3116_78076"
//                 x1="24.1637"
//                 y1="4.44895"
//                 x2="24.1637"
//                 y2="47.551"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-color="#E467FE" />
//                 <stop offset="1" stop-color="#8A43E1" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       ),
//       description:
//         "Need additional security, control, and support build your own tailored solution.",

//       monthlyPrice: "Custom",
//       yearlyPrice: 255,
//       features: [
//         "Because Growth Has No Limits.",
//         "For teams who want more than “features” - they want results.",
//         "Unlock enterprise-grade AI that spots every lead intent, personalizes every pitch, and keeps your pipeline full 24/7.",
//         "Get your customized enterprise plan today.",
//       ],
//     },
//   ];
//   function handleGetStarted(name: string): void {
//     // throw new Error("Function not implemented.");
//   }

//   return (
//     <div className="min-h-screen mt-10">
//       <div className="max-w-7xl mx-auto">
//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {plans.map((plan: any, index) => {
//             console.log("🚀 ~ PlanPricing ~ plan:", plan.features);
//             return (
//               <div
//                 key={index}
//                 onClick={() => setActivePlan(plan.name)}
//                 className={`relative flex flex-col items-center
//               `}
//               >
//                 {/* Most Popular Badge */}
//                 {plan.isPopular && (
//                   <span
//                     className="absolute -top-3 -right-8 lg:-top-3 lg:-right-3 transform -translate-x-1/2 text-white text-xs font-semibold flex items-center justify-center shadow-lg z-20 w-[62px] h-[34px] opacity-100 pt-[8px] pr-[10px] pb-[8px] pl-[10px] rounded-[8px] md:top-0 md:-right-11 sm:top-0 sm:right-20"
//                     style={{
//                       background:
//                         "linear-gradient(90deg, #35A1DA -207.85%, #D4549F -28.59%, #F15A22 136.87%)",
//                     }}
//                   >
//                     {isYearly ? "10% off" : "5% Off"}
//                   </span>
//                 )}

//                 {/* Top Card */}
//                 <div
//                   className={`bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col items-center justify-between z-10 relative w-full max-w-[345px]`}
//                 >
//                   <div className="lg:p-[30px] md:p-[25px] p-[30px] flex flex-col justify-between h-full w-full">
//                     {plan.icon}
//                     <div className="flex flex-col justify-between h-full">
//                       <div>
//                         <h3 className="lg:text-[22px] md:text-[20px] text-[22px] leading-[26px] font-bold text-gray-900 mb-2">
//                           {plan.name}
//                         </h3>
//                         <p className="text-sm text-gray-600 mb-6 lg:text-[16px] lg:leading-[21px] text-[14px] leading-[20px] min-h-[60px]">
//                           <span className="text-[#111111]">Perfect For:</span>{" "}
//                           {plan.description}
//                         </p>

//                         {/* Price Section */}
//                         <div className="flex flex-col justify-center items-baseline min-h-[90px] mb-6">
//                           {plan.originalPrice ? (
//                             <div className="text-gray-500 text-[20px] line-through">
//                               ₹{plan.originalPrice}
//                             </div>
//                           ) : (
//                             <div className="text-gray-500 text-[20px] line-through"></div>
//                           )}
//                           {plan.monthlyPrice !== "Custom" ? (
//                             <>
//                               <div className="flex items-baseline">
//                                 <span className="lg:text-[48px] lg:leading-[48px] md:text-[42px] md:leading-[48px] text-[28px] leading-[28px] font-bold text-gray-900">
//                                   ₹
//                                   {isYearly
//                                     ? plan.yearlyPrice
//                                     : plan.monthlyPrice}
//                                 </span>
//                                 <span className="text-gray-600 ml-2">
//                                   / {isYearly ? "year" : "month"}
//                                 </span>
//                               </div>
//                             </>
//                           ) : (
//                             <span className="lg:text-[48px] lg:leading-[48px] md:text-[42px] md:leading-[48px] text-[28px] leading-[28px] font-bold text-gray-900">
//                               Custom
//                             </span>
//                           )}
//                         </div>

//                         {/* Button */}
//                         <Button
//                           onClick={() => {
//                             handleGetStarted(plan.name);
//                             router.push("/contact-us");
//                           }}
//                           className="w-full"
//                         >
//                           {plan.monthlyPrice === "Custom"
//                             ? "Get Quote"
//                             : "Get Started"}
//                         </Button>

//                         {plan?.credits && (
//                           <div className="flex mt-[30px] font-[500] text-[16px] leading-[26px] gap-[4px] items-center">
//                             <svg
//                               width="12"
//                               height="10"
//                               viewBox="0 0 12 10"
//                               fill="none"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 d="M0.75 5.19444L4.75 8.75L10.75 0.75"
//                                 stroke="#111111"
//                                 stroke-width="1.5"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                               />
//                             </svg>
//                             {plan?.credits}
//                             <svg
//                               width="20"
//                               height="20"
//                               viewBox="0 0 20 20"
//                               fill="none"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 d="M9.93994 9.5H9.94661L9.93994 13.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z"
//                                 stroke="#808080"
//                                 stroke-width="1.5"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                               />
//                             </svg>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Bottom Features Card */}
//                 {plan.name === "Enterprise" ? (
//                   <div
//                     className="rounded-2xl p-1 -mt-16 relative z-0 flex justify-center w-full max-w-[345px]"
//                     style={{
//                       height: "600px",
//                       border: "1px solid #DED8D3",
//                       background:
//                         activePlan === plan.name
//                           ? "linear-gradient(90deg, #35A1DA -207.85%, #D4549F -28.59%, #F15A22 136.87%)"
//                           : "#E8E4E2",
//                     }}
//                   >
//                     <div
//                       className="rounded-2xl p-6 h-full w-full"
//                       style={{
//                         backgroundColor:
//                           activePlan === plan.name ? "#fff" : "#E8E4E2",
//                       }}
//                     >
//                       <div className="space-y-3 mt-[70px]">
//                         {plan.features.map((feature: any, idx: any) => (
//                           <div key={idx} className="flex items-center gap-3">
//                             {/* <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" /> */}

//                             <div className="text-sm text-gray-700 flex items-center ">
//                               <span className="text-sm text-gray-700 flex-1">
//                                 {feature}
//                               </span>
//                               {showTooltip.includes(feature) && (
//                                 <div className="relative  group ml-[5px]">
//                                   {/* Info Icon */}
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-4 h-4 text-gray-400 cursor-pointer"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
//                                     />
//                                   </svg>

//                                   {/* Tooltip */}
//                                   <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
//                                     {feature === "Advanced performance reports"
//                                       ? "Advanced"
//                                       : feature}
//                                   </span>
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : plan.name === "Pro" ? (
//                   <div
//                     className="rounded-2xl p-1 -mt-16 relative z-0 flex justify-center w-full max-w-[345px]"
//                     style={{
//                       height: "600px",
//                       border: "1px solid #DED8D3",
//                       background:
//                         activePlan === plan.name
//                           ? "linear-gradient(90deg, #35A1DA -207.85%, #D4549F -28.59%, #F15A22 136.87%)"
//                           : "#E8E4E2",
//                     }}
//                   >
//                     <div
//                       className="rounded-2xl p-6 h-full w-full "
//                       style={{
//                         backgroundColor:
//                           activePlan === plan.name ? "#fff" : "#E8E4E2",
//                       }}
//                     >
//                       <div className="space-y-3 mt-[70px]">
//                         {plan.features.map((feature: any, idx: any) => (
//                           <div key={idx} className="flex items-center gap-3">
//                             <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />

//                             <div className="text-sm text-gray-700 flex items-center ">
//                               <span className="text-sm text-gray-700 flex-1">
//                                 {feature}
//                               </span>
//                               {showTooltip.includes(feature) && (
//                                 <div className="relative  group ml-[5px]">
//                                   {/* Info Icon */}
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-4 h-4 text-gray-400 cursor-pointer"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
//                                     />
//                                   </svg>

//                                   {/* Tooltip */}
//                                   <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
//                                     {feature === "Advanced performance reports"
//                                       ? "Advanced"
//                                       : feature}
//                                   </span>
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     className={`rounded-2xl shadow-sm p-1 -mt-16 relative z-0 border-2 w-full max-w-[345px] `}
//                     style={{
//                       height: "600px",
//                       border: "1px solid #DED8D3",
//                       background:
//                         activePlan === plan.name
//                           ? "linear-gradient(90deg, #35A1DA -207.85%, #D4549F -28.59%, #F15A22 136.87%)"
//                           : "#E8E4E2",
//                     }}
//                   >
//                     <div
//                       className="rounded-2xl p-6 h-full w-full"
//                       style={{
//                         backgroundColor:
//                           activePlan === plan.name ? "#fff" : "#E8E4E2",
//                       }}
//                     >
//                       <div className="space-y-3 mt-[70px]">
//                         {plan.features.map((feature: any, idx: any) => (
//                           <div key={idx} className="flex items-center gap-3">
//                             <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />

//                             <div className="text-sm text-gray-700 flex items-center ">
//                               <span className="text-sm text-gray-700 flex-1">
//                                 {feature}
//                               </span>
//                               {showTooltip.includes(feature) && (
//                                 <div className="relative  group ml-[5px]">
//                                   {/* Info Icon */}
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-4 h-4 text-gray-400 cursor-pointer"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
//                                     />
//                                   </svg>

//                                   {/* Tooltip */}
//                                   <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
//                                     {feature === "Advanced performance reports"
//                                       ? "Advanced"
//                                       : feature}
//                                   </span>
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function PlanPricing({ isYearly, data }: any) {
  const router = useRouter();
  const showTooltip = [
    "No cap on LinkedIn Account",
    "Unlimited Campaigns",
    "No Maximum Product Limit",
    "Free API Integration",
    "Unlimited Prompts",
    "Full AI Conversation Management",
    "Intelligent Lead Intention Spotting",
    "24/7 Support",
  ];
  const [activePlan, setActivePlan] = useState<string | null>("Pro");

  // ✅ Map API plan names to your internal plan names

  const plans = useMemo(() => {
    if (!data) return [];

    // Step 1: Your static plans (base UI data)
    const staticPlans = [
      {
        name: "Trial",
        apiName: "Trial",
        borderColor: "border-[#DED8D3]",
        bgColor: "#E8E4E2",
        credits: "Custom credits",
        originalPrice: "0.00",
        monthlyPrice: "0.00",
        yearlyPrice: "0.00",
        description:
          "For large organizations that need enterprise-grade scale, compliance, and dedicated support.",
        features: [
          "Custom AI solutions",
          "Dedicated account manager",
          "Premium integrations",
        ],
        icon: (
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-blue-100">
            🏢
          </div>
        ),
      },
      {
        name: "Growth",
        apiName: "Growth",
        borderColor: "border-[#DED8D3]",
        bgColor: "#E8E4E2",
        isPopular: true,
        credits: "2,777 credits/month (3.4 ₹ /credit)",
        originalPrice: "9,999",
        monthlyPrice: "9,499",
        yearlyPrice: "8,999",
        description:
          "Small to medium businesses who want consistent automation and measurable ROI.",
        features: [
          "No cap on LinkedIn Account",
          "Unlimited Campaigns",
          "Free API Integration",
        ],
        icon: (
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-red-100">
            🔰
          </div>
        ),
      },
      {
        name: "Professional",
        apiName: "Professional",
        borderColor: "border-yellow-400",
        isPopular: true,
        credits: "9,722 credits/month (3.2 ₹ /credit)",
        originalPrice: "34,999",
        monthlyPrice: "33,249",
        yearlyPrice: "31,499",
        description: "Scaling businesses handling large lead volumes.",
        features: [
          "Unlimited Campaigns",
          "Full AI Conversation Management",
          "24/7 Support",
        ],
        icon: (
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-yellow-100">
            🌟
          </div>
        ),
      },
    ];

    // Step 2: Filter active API plans
    const filteredData = data.filter((p: any) => p.is_active);

    // Step 3: Merge API data into static plans
    return staticPlans.map((plan) => {
      const apiPlan = filteredData.find(
        (item: any) => item.name?.toLowerCase() === plan.apiName?.toLowerCase()
      );

      if (!apiPlan) return plan; // Fallback to static

      const apiFeatures =
        apiPlan.plan_features
          ?.filter((f: any) => f.is_included)
          ?.map((f: any) => f.feature_name_limit.trim()) || [];

      return {
        ...plan,
        name: apiPlan.name ?? plan.name,
        isPopular: apiPlan.is_popular ?? plan.isPopular,
        description: apiPlan.description?.trim() || plan.description,
        credits: apiPlan.message_credits_included
          ? `${apiPlan.message_credits_included} credits/month`
          : plan.credits,
        monthlyPrice: apiPlan.total_price
          ? parseFloat(apiPlan.total_price).toFixed(2)
          : plan.monthlyPrice,
        yearlyPrice: plan.yearlyPrice,
        features: apiFeatures.length ? apiFeatures : plan.features,
      };
    });
  }, [data]);

  function handleGetStarted(name: string): void {
    console.log("Selected Plan:", name);
  }

  return (
    <div className="min-h-screen mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan: any, index) => (
            <div
              key={index}
              onClick={() => setActivePlan(plan.name)}
              className={`relative flex flex-col items-center`}
            >
              {/* Badge */}
              {plan.isPopular && (
                <span
                  className="absolute -top-3 -right-8 lg:-top-3 lg:-right-3 text-white text-xs font-semibold flex items-center justify-center shadow-lg z-20 w-[62px] h-[34px] rounded-[8px]"
                  style={{
                    background:
                      "linear-gradient(90deg, #35A1DA -207.85%, #D4549F -28.59%, #F15A22 136.87%)",
                  }}
                >
                  {isYearly ? "10% Off" : "Popular"}
                </span>
              )}

              {/* Top Card */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col items-center justify-between z-10 relative w-full max-w-[345px]">
                <div className="lg:p-[30px] p-[30px] flex flex-col justify-between h-full w-full">
                  {plan.icon}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-[22px] font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-6 min-h-[60px]">
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="flex flex-col justify-center items-baseline min-h-[90px] mb-6">
                        {plan.originalPrice &&
                          plan.originalPrice !== "0.00" && (
                            <div className="text-gray-500 text-[20px] line-through">
                              ₹{plan.originalPrice}
                            </div>
                          )}
                        <div className="flex items-baseline">
                          <span className="text-[28px] font-bold text-gray-900">
                            ₹
                            {isYearly
                              ? plan.yearlyPrice
                              : plan.monthlyPrice || "Free"}
                          </span>
                          <span className="text-gray-600 ml-2">
                            / {isYearly ? "year" : "month"}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        onClick={() => {
                          handleGetStarted(plan.name);
                          router.push("/contact-us");
                        }}
                        className="w-full"
                      >
                        {plan.monthlyPrice === "Free"
                          ? "Start Free Trial"
                          : "Get Started"}
                      </Button>

                      {plan.credits && (
                        <div className="flex mt-[30px] font-[500] text-[16px] gap-[4px] items-center">
                          <Check className="w-4 h-4 text-gray-800" />
                          {plan.credits}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Features */}
              <div
                className={`rounded-2xl p-1 -mt-16 relative z-0 flex justify-center w-full max-w-[345px]`}
                style={{
                  height: "600px",
                  border: "1px solid #DED8D3",
                  background:
                    activePlan === plan.name
                      ? "linear-gradient(90deg, #35A1DA -207.85%, #D4549F -28.59%, #F15A22 136.87%)"
                      : "#E8E4E2",
                }}
              >
                <div
                  className="rounded-2xl p-6 h-full w-full"
                  style={{
                    backgroundColor:
                      activePlan === plan.name ? "#fff" : "#E8E4E2",
                  }}
                >
                  {/* <div className="space-y-3 mt-[70px]">
                    {plan.features?.map((feature: any, idx: any) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div> */}
                  <div className="space-y-3 mt-[70px]">
                    {plan.features?.map((feature: any, idx: any) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 relative group"
                      >
                        <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>

                        {/* Info Icon */}
                        <div className="relative">
                          <span className="text-gray-500 cursor-pointer group-hover:text-gray-800">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.93994 9.5H9.94661L9.93994 13.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z"
                                stroke="#808080"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>

                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max max-w-xs text-xs text-white bg-gray-800 rounded-lg py-1 px-2 shadow-lg z-10">
                            {feature}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
