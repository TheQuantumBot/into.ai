"use client";

import Badge from "./Badge";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
import Heros from "./Heros";
import { useRouter } from "next/navigation";

const features = [
  {
    img: "/objectionHendling.svg",
    title: `<span class="text-black text-[32px] leading-[40px] font-[600]">Pro-Level Objection Handling</span>`,
    description: `<p class="mt-3 text-[#808080]">SalesBot knows these objections and answers with logic, value, and clarity. It reframes doubts instead of ignoring them. Like a <span class="text-black">trained closer</span> would. Reduced drop-offs. More saved deals.</p>`,
  },
  {
    img: "/politeAndTimely.svg",
    title: `<span class="text-black text-[32px] leading-[40px] font-[600]">Polite & Timely Follow-Ups</span>`,
    description: `
      <p class="mt-3 text-[#808080]">Follow-ups are where most deals are won.</p>
      <p class="mt-3 font-semibold text-[24px] text-[#808080]">SalesBot sends:</p>
      <ul class="list-disc pl-5 mt-2 text-black space-y-1">
        <div class="flex flex-wrap gap-x-8">
          <li>Timely nudges</li>
          <li>Friendly reminders</li>
        </div>
        <li>Personal follow-ups based on previous conversation tone.</li>
      </ul>
      <p class="mt-3 text-[#808080]">Never spammy, always natural.</p>
      <p class="text-[#808080]">More re-engaged leads. More booked calls. More sales.</p>
    `,
  },
  {
    img: "/conversationInsights.svg",
    title: `<span class="text-black text-[32px] leading-[40px] font-[600]">Conversion Insights – Not Just Dashboard Data</span>`,
    description: `
      <p class="mt-3 text-[#808080] text-[18px] md:text-[18px] leading-[24px] sm:text-[16px]">No complicated charts. No guesswork.</p>
      <p class="mt-2 text-[#808080] text-[20px] leading-[24px] md:text-[20px] sm:text-[16px]">You see:</p>
      <ul class="list-disc mt-2 text-black space-y-1 pl-5 md:text-[18px] sm:text-[16px]">
        <div class="flex flex-wrap gap-x-8">
          <li>Hot vs cold leads</li>
          <li>Where people drop off</li>
          <li>Top-performing messages</li>
        </div>
        <div class="flex flex-wrap gap-x-8">
          <li>Qualification flow success</li>
          <li>Revenue impact from SalesBot</li>
        </div>
      </ul>
      <p class="mt-3 text-[#808080] text-[18px] leading-[24px] md:text-[18px] sm:text-[16px]">Clear insights → smarter sales strategy.</p>
    `,
  },
  {
    img: "/brandvoice.svg",
    title: `<span class="text-black text-[32px] leading-[40px] font-[600]">Adapts to Your Brand Voice</span>`,
    description: `
      <p class="mt-3 text-[#808080]">Formal? Warm? Energetic?</p>
      <p class="mt-3 text-[#808080]">SalesBot learns your style and responds in your tone.</p>
      <p class="mt-3 text-[#808080]">Your brand. Your personality.</p>
      <p class="mt-3 text-[#808080]">Consistent across WhatsApp, LinkedIn, Meta, and web chat.</p>
      <p class="mt-3 text-[#808080]">Personal, relatable, and on-brand conversations.</p>
    `,
  },
];

export default function FeaturesSection() {
  const router = useRouter();

  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-16 ">
      {/* Heading */}

      <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <Badge text="Features" />
      </div>

      <div className="w-full flex flex-col items-center justify-center mb-10">
        <Heros
          className="text-black font-[600]"
          title={`Our Core <span class="gradient-text ml-[6px]">Differentiators</span>`}
        />
      </div>
      {/* Feature Cards in two columns */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-center gap-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-10 flex-1 ">
          <FeatureCard
            img={features[0].img}
            title={features[0].title}
            description={features[0].description}
          />
          <FeatureCard
            img={features[2].img}
            title={features[2].title}
            description={features[2].description}
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-10 flex-1">
          <FeatureCard
            img={features[1].img}
            title={features[1].title}
            description={features[1].description}
          />
          <FeatureCard
            img={features[3].img}
            title={features[3].title}
            description={features[3].description}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1400px] mx-auto mt-10 bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-stretch     overflow-hidden">
        {/* Image */}
        <div className="relative flex justify-center items-center w-full md:w-1/2 h-[240px] sm:h-[320px] md:h-auto min-h-[320px] flex-shrink-0">
        <div className="flex justify-center items-center w-[-webkit-fill-available]">
          <svg
            width="705"
            height="478"
            viewBox="0 0 705 478"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_4541_81001"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="705"
              height="478"
            >
              <rect
                width="705"
                height="478"
                fill="url(#paint0_linear_4541_81001)"
              />
            </mask>
            <g mask="url(#mask0_4541_81001)"></g>
            <mask
              id="mask1_4541_81001"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="705"
              height="478"
            >
              <path
                d="M705 0H0V478H705V0Z"
                fill="url(#paint1_linear_4541_81001)"
              />
            </mask>
            <g mask="url(#mask1_4541_81001)">
              <path
                d="M-23.4141 372.976H297.86C314.911 372.976 328.733 359.114 328.733 342.012V309.113C328.733 300.563 335.644 293.631 344.169 293.631H704.999"
                stroke="#1D1D20"
                stroke-opacity="0.1"
                stroke-width="1.93684"
              />
              <path
                d="M-10.6562 107.02H707.901"
                stroke="#1D1D20"
                stroke-opacity="0.1"
                stroke-width="1.93684"
              />
              <path
                d="M639.148 488.402V-14.2848"
                stroke="#1D1D20"
                stroke-opacity="0.1"
                stroke-width="1.93684"
              />
              <path
                d="M66.8203 488.402V-14.2848"
                stroke="#1D1D20"
                stroke-opacity="0.1"
                stroke-width="1.93684"
              />
              <path
                opacity="0.05"
                d="M299.238 372.919H66.8203V107.02H638.18V293.343H345.721C337.165 293.343 330.227 300.296 330.227 308.87V341.865C330.227 359.017 316.354 372.919 299.238 372.919Z"
                fill="#1D1D20"
                stroke="#1D1D20"
                stroke-width="1.93684"
              />
            </g>
            <path
              d="M300.219 123.518H98.7877C90.2302 123.518 83.293 130.469 83.293 139.045V340.895C83.293 349.471 90.2302 356.422 98.7877 356.422H300.219C308.776 356.422 315.713 349.471 315.713 340.895V139.045C315.713 130.469 308.776 123.518 300.219 123.518Z"
              fill="white"
            />
            <path
              d="M214.977 122.548H300.197C309.289 122.548 316.66 129.934 316.66 139.046V340.896C316.66 350.007 309.289 357.394 300.197 357.394H214.977"
              stroke="#716FFF"
              stroke-opacity="0.4"
              stroke-width="1.93684"
            />
            <path
              d="M606.282 123.234H347.158C338.614 123.234 331.688 130.193 331.688 138.777V261.178C331.688 269.763 338.614 276.721 347.158 276.721H606.282C614.826 276.721 621.752 269.763 621.752 261.178V138.777C621.752 130.193 614.826 123.234 606.282 123.234Z"
              fill="white"
            />
            <path
              d="M530.539 184.139H528.914V194.033H530.539V184.139Z"
              fill="#BABABA"
              stroke="#BABABA"
              stroke-width="1.30074"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M520.089 194.033H518.395L521.941 184.13H523.819L527.365 194.033H525.662L524.945 192.018H520.797L520.089 194.033ZM521.251 190.744H524.509L522.884 186.085L521.251 190.744Z"
              fill="#BABABA"
              stroke="#BABABA"
              stroke-width="1.30074"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M518.047 178.633C518.536 178.136 519.2 177.865 519.898 177.865H530.231C530.93 177.865 531.594 178.136 532.092 178.633L535.49 182.027C535.979 182.516 536.258 183.188 536.258 183.877V193.858C536.258 194.548 535.979 195.22 535.49 195.708L531.664 199.53C531.166 200.018 530.502 200.298 529.803 200.298H519.47C518.772 200.298 518.108 200.018 517.619 199.53L514.562 196.485C514.072 195.996 513.793 195.324 513.793 194.626V183.955C513.793 183.266 514.072 182.594 514.562 182.106L518.047 178.633ZM518.676 179.436L515.383 182.734C514.963 183.153 514.728 183.72 514.728 184.304V194.251C514.728 194.844 514.963 195.411 515.383 195.83L518.283 198.727C518.702 199.146 519.27 199.381 519.863 199.381H529.498C530.083 199.381 530.651 199.146 531.07 198.727L534.686 195.115C535.105 194.696 535.341 194.129 535.341 193.536V184.235C535.341 183.641 535.105 183.074 534.686 182.655L531.463 179.436C531.044 179.017 530.476 178.781 529.891 178.781H520.257C519.663 178.781 519.095 179.017 518.676 179.436Z"
              fill="#BABABA"
              stroke="#BABABA"
              stroke-width="1.30074"
            />
            <mask
              id="mask2_4541_81001"
              maskUnits="userSpaceOnUse"
              x="331"
              y="123"
              width="291"
              height="154"
            >
              <path
                d="M606.282 123.234H347.158C338.614 123.234 331.688 130.193 331.688 138.777V261.178C331.688 269.763 338.614 276.721 347.158 276.721H606.282C614.826 276.721 621.752 269.763 621.752 261.178V138.777C621.752 130.193 614.826 123.234 606.282 123.234Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask2_4541_81001)">
              <path
                opacity="0.6"
                d="M441.001 251.028V237.859C441.012 227.384 445.143 217.342 452.486 209.936C459.829 202.529 469.785 198.363 480.169 198.351C488.648 198.323 496.903 201.098 503.67 206.253C504.593 206.951 505.754 207.251 506.897 207.087C508.039 206.922 509.07 206.306 509.763 205.375C510.455 204.444 510.753 203.273 510.589 202.12C510.426 200.968 509.816 199.928 508.892 199.229C500.621 192.932 490.532 189.54 480.169 189.572C467.477 189.587 455.309 194.679 446.335 203.732C437.36 212.784 432.312 225.057 432.297 237.859V251.028C432.297 252.192 432.755 253.308 433.572 254.132C434.388 254.955 435.495 255.417 436.649 255.417C437.803 255.417 438.91 254.955 439.726 254.132C440.542 253.308 441.001 252.192 441.001 251.028Z"
                fill="url(#paint2_linear_4541_81001)"
              />
              <path
                d="M452.631 287.396C451.68 287.396 450.755 287.081 449.997 286.5C449.24 285.919 448.693 285.104 448.439 284.18C448.184 283.255 448.237 282.272 448.59 281.381C448.942 280.489 449.574 279.739 450.39 279.245C465.809 269.903 465.809 249.842 465.809 237.859C465.809 234.366 467.184 231.016 469.633 228.547C472.081 226.077 475.402 224.69 478.865 224.69C482.328 224.69 485.648 226.077 488.097 228.547C490.545 231.016 491.921 234.366 491.921 237.859C491.921 239.023 491.462 240.139 490.646 240.963C489.83 241.786 488.723 242.248 487.569 242.248C486.415 242.248 485.308 241.786 484.492 240.963C483.675 240.139 483.217 239.023 483.217 237.859C483.217 236.694 482.758 235.578 481.942 234.755C481.126 233.931 480.019 233.469 478.865 233.469C477.711 233.469 476.604 233.931 475.788 234.755C474.971 235.578 474.513 236.694 474.513 237.859C474.513 250.795 474.513 274.881 454.868 286.773C454.192 287.181 453.419 287.396 452.631 287.396ZM474.23 293.634C484.161 283.538 489.962 269.341 491.468 251.401C491.519 250.825 491.457 250.245 491.285 249.694C491.113 249.143 490.835 248.632 490.466 248.189C490.098 247.747 489.647 247.382 489.138 247.116C488.63 246.849 488.074 246.687 487.504 246.638C486.933 246.579 486.355 246.636 485.807 246.807C485.258 246.978 484.749 247.258 484.31 247.631C483.871 248.004 483.511 248.463 483.252 248.979C482.992 249.495 482.838 250.059 482.799 250.637C481.446 266.69 476.624 278.731 468.054 287.427C467.241 288.253 466.786 289.371 466.789 290.536C466.793 291.7 467.255 292.815 468.074 293.636C468.893 294.457 470.002 294.916 471.156 294.912C472.31 294.909 473.416 294.442 474.23 293.616V293.634ZM496.86 292.817C499.5 288.393 501.699 283.716 503.423 278.854C503.784 277.767 503.708 276.58 503.213 275.548C502.717 274.516 501.841 273.721 500.772 273.332C499.702 272.943 498.525 272.992 497.49 273.468C496.456 273.943 495.647 274.808 495.237 275.878C493.705 280.189 491.754 284.337 489.414 288.261C489.118 288.754 488.92 289.301 488.833 289.872C488.746 290.442 488.771 291.023 488.907 291.584C489.043 292.144 489.288 292.672 489.626 293.137C489.964 293.602 490.39 293.995 490.879 294.295C491.866 294.899 493.051 295.083 494.173 294.806C494.728 294.668 495.252 294.422 495.713 294.081C496.174 293.74 496.564 293.311 496.86 292.817ZM507.153 265.035C508.765 256.071 509.494 246.968 509.329 237.859C509.325 231.64 507.45 225.568 503.952 220.447C500.455 215.326 495.499 211.396 489.739 209.176C483.98 206.956 477.688 206.551 471.696 208.014C465.704 209.478 460.293 212.741 456.178 217.372C455.777 217.798 455.465 218.3 455.26 218.85C455.056 219.4 454.962 219.985 454.986 220.572C455.009 221.158 455.149 221.734 455.397 222.265C455.645 222.796 455.997 223.272 456.43 223.664C456.864 224.055 457.371 224.355 457.921 224.546C458.472 224.737 459.055 224.814 459.635 224.773C460.216 224.733 460.783 224.575 461.302 224.309C461.821 224.044 462.282 223.676 462.658 223.228C465.597 219.919 469.462 217.588 473.742 216.542C478.022 215.496 482.517 215.785 486.631 217.371C490.745 218.956 494.285 221.763 496.784 225.421C499.283 229.08 500.622 233.416 500.625 237.859C500.785 246.404 500.112 254.945 498.614 263.358C498.395 264.5 498.633 265.684 499.278 266.648C499.923 267.613 500.92 268.28 502.052 268.503C502.329 268.559 502.61 268.587 502.892 268.586C503.9 268.584 504.876 268.228 505.653 267.581C506.43 266.933 506.96 266.033 507.153 265.035ZM457.105 237.859C457.103 236.633 457.204 235.41 457.405 234.202C457.535 233.62 457.546 233.018 457.438 232.432C457.329 231.846 457.104 231.288 456.774 230.793C456.445 230.297 456.019 229.875 455.523 229.551C455.027 229.227 454.47 229.009 453.887 228.909C453.304 228.809 452.708 228.831 452.133 228.971C451.559 229.112 451.019 229.369 450.546 229.727C450.073 230.085 449.678 230.537 449.384 231.054C449.09 231.571 448.903 232.143 448.836 232.736C448.549 234.428 448.403 236.142 448.401 237.859C448.401 258.249 442.543 268.586 430.993 268.586C429.838 268.586 428.731 269.049 427.915 269.872C427.099 270.695 426.641 271.812 426.641 272.976C426.641 274.14 427.099 275.257 427.915 276.08C428.731 276.903 429.838 277.366 430.993 277.366C447.831 277.366 457.105 263.319 457.105 237.859ZM516.727 292.352C523.889 275.119 527.303 256.536 526.737 237.859C526.757 230.567 525.119 223.368 521.95 216.814C521.7 216.296 521.351 215.832 520.923 215.449C520.495 215.066 519.997 214.772 519.456 214.583C518.916 214.395 518.344 214.316 517.773 214.35C517.202 214.384 516.643 214.532 516.129 214.784C515.615 215.036 515.155 215.388 514.775 215.82C514.396 216.251 514.104 216.754 513.917 217.299C513.73 217.845 513.652 218.422 513.686 218.997C513.72 219.573 513.866 220.137 514.116 220.655C516.706 226.013 518.046 231.898 518.033 237.859C518.581 255.28 515.437 272.619 508.811 288.717C508.575 289.243 508.444 289.811 508.426 290.387C508.408 290.964 508.502 291.539 508.704 292.079C508.907 292.618 509.212 293.113 509.604 293.533C509.996 293.954 510.466 294.292 510.987 294.529C511.551 294.791 512.164 294.926 512.784 294.925C513.617 294.921 514.431 294.677 515.129 294.221C515.828 293.765 516.383 293.116 516.727 292.352Z"
                fill="black"
                fill-opacity="0.2"
              />
            </g>
            <mask id="path-17-inside-1_4541_81001" fill="white">
              <path d="M331.688 214.286H621.752V138.843C621.752 130.223 614.764 123.234 606.143 123.234H347.296C338.676 123.234 331.688 130.223 331.688 138.843V214.286Z" />
            </mask>
            <path
              d="M331.688 214.286H621.752V138.843C621.752 130.223 614.764 123.234 606.143 123.234H347.296C338.676 123.234 331.688 130.223 331.688 138.843V214.286Z"
              fill="url(#paint3_linear_4541_81001)"
              fill-opacity="0.2"
            />
            <path
              d="M331.688 218.452H621.752V210.119H331.688V218.452ZM621.752 123.234H331.688H621.752ZM331.688 123.234V214.286V123.234ZM621.752 214.286V123.234V214.286Z"
              fill="#716FFF"
              fill-opacity="0.7"
              mask="url(#path-17-inside-1_4541_81001)"
            />
            <path
              d="M97.8115 140.986C99.416 140.986 100.717 139.683 100.717 138.075C100.717 136.467 99.416 135.164 97.8115 135.164C96.207 135.164 94.9062 136.467 94.9062 138.075C94.9062 139.683 96.207 140.986 97.8115 140.986Z"
              fill="url(#paint4_linear_4541_81001)"
            />
            <path
              d="M345.726 140.986C347.33 140.986 348.631 139.683 348.631 138.075C348.631 136.467 347.33 135.164 345.726 135.164C344.121 135.164 342.82 136.467 342.82 138.075C342.82 139.683 344.121 140.986 345.726 140.986Z"
              fill="url(#paint5_linear_4541_81001)"
            />
            <path
              d="M345.726 265.202C347.33 265.202 348.631 263.899 348.631 262.291C348.631 260.683 347.33 259.379 345.726 259.379C344.121 259.379 342.82 260.683 342.82 262.291C342.82 263.899 344.121 265.202 345.726 265.202Z"
              fill="url(#paint6_linear_4541_81001)"
            />
            <path
              d="M97.8115 344.777C99.416 344.777 100.717 343.474 100.717 341.866C100.717 340.258 99.416 338.955 97.8115 338.955C96.207 338.955 94.9062 340.258 94.9062 341.866C94.9062 343.474 96.207 344.777 97.8115 344.777Z"
              fill="url(#paint7_linear_4541_81001)"
            />
            <path
              opacity="0.6"
              d="M301.171 140.986C302.775 140.986 304.076 139.683 304.076 138.075C304.076 136.467 302.775 135.164 301.171 135.164C299.566 135.164 298.266 136.467 298.266 138.075C298.266 139.683 299.566 140.986 301.171 140.986Z"
              fill="#716FFF"
            />
            <path
              d="M607.19 140.986C608.795 140.986 610.096 139.683 610.096 138.075C610.096 136.467 608.795 135.164 607.19 135.164C605.586 135.164 604.285 136.467 604.285 138.075C604.285 139.683 605.586 140.986 607.19 140.986Z"
              fill="url(#paint8_linear_4541_81001)"
            />
            <path
              d="M607.19 265.202C608.795 265.202 610.096 263.899 610.096 262.291C610.096 260.683 608.795 259.379 607.19 259.379C605.586 259.379 604.285 260.683 604.285 262.291C604.285 263.899 605.586 265.202 607.19 265.202Z"
              fill="url(#paint9_linear_4541_81001)"
            />
            <path
              opacity="0.6"
              d="M301.171 344.777C302.775 344.777 304.076 343.474 304.076 341.866C304.076 340.258 302.775 338.955 301.171 338.955C299.566 338.955 298.266 340.258 298.266 341.866C298.266 343.474 299.566 344.777 301.171 344.777Z"
              fill="#716FFF"
            />
            <path
              d="M300.215 123.518H98.7837C90.2263 123.518 83.2891 130.469 83.2891 139.045V340.895C83.2891 349.471 90.2263 356.422 98.7837 356.422H300.215C308.772 356.422 315.709 349.471 315.709 340.895V139.045C315.709 130.469 308.772 123.518 300.215 123.518Z"
              fill="url(#paint10_linear_4541_81001)"
              fill-opacity="0.5"
            />
            <path
              opacity="0.9"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M197.702 170.386C186.768 170.386 177.879 174.08 170.125 178.097C167.782 179.311 165.606 180.511 163.526 181.658C158.437 184.466 153.927 186.954 148.974 188.534C146.065 189.462 143.488 190.284 141.661 191C139.941 191.674 137.897 192.598 136.447 194.209C135.145 195.657 134.476 197.282 134.032 198.837C133.629 200.248 133.285 202.158 132.955 203.991C124.903 248.643 142.509 290.945 185.501 307.405C189.727 309.024 192.839 310.216 197.724 310.216C202.609 310.216 205.721 309.024 209.946 307.405C252.937 290.945 270.525 248.641 262.472 203.991C262.141 202.158 261.797 200.247 261.394 198.836C260.95 197.281 260.281 195.656 258.978 194.208C257.528 192.596 255.484 191.673 253.764 191C251.937 190.284 249.36 189.462 246.451 188.535C241.496 186.954 236.982 184.465 231.889 181.658C229.808 180.511 227.63 179.31 225.288 178.097C217.53 174.08 208.637 170.386 197.702 170.386ZM181.449 218.758V225.662C180.961 225.811 180.475 225.988 179.993 226.202C175.96 227.992 172.858 231.376 171.263 235.501C170.574 237.283 170.309 239.113 170.186 241.042C170.068 242.899 170.068 245.16 170.068 247.871V248.178C170.068 250.888 170.068 253.15 170.186 255.007C170.309 256.936 170.574 258.766 171.263 260.547C172.858 264.673 175.96 268.056 179.993 269.846C181.764 270.632 183.578 270.929 185.435 271.065C187.201 271.194 189.342 271.194 191.848 271.194H203.569C206.076 271.194 208.216 271.194 209.982 271.065C211.84 270.929 213.653 270.632 215.424 269.846C219.458 268.056 222.56 264.673 224.155 260.547C224.843 258.766 225.108 256.936 225.231 255.007C225.349 253.15 225.349 250.888 225.349 248.178V247.871C225.349 245.16 225.349 242.899 225.231 241.042C225.108 239.113 224.843 237.283 224.155 235.501C222.56 231.376 219.458 227.992 215.424 226.202C214.942 225.988 214.456 225.811 213.968 225.662V218.758C213.968 209.837 206.52 202.905 197.709 202.905C188.898 202.905 181.449 209.837 181.449 218.758ZM197.709 212.66C193.948 212.66 191.205 215.556 191.205 218.758V224.855L191.848 224.855H203.569L204.212 224.855V218.758C204.212 215.556 201.469 212.66 197.709 212.66Z"
              fill="url(#paint11_linear_4541_81001)"
            />
            <path
              d="M214.98 61.4099H213.043V418.531H214.98V61.4099Z"
              fill="url(#paint12_linear_4541_81001)"
            />
            <path
              d="M402.857 61.4097H213.047V418.53H402.857V61.4097Z"
              fill="url(#paint13_radial_4541_81001)"
              fill-opacity="0.4"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4541_81001"
                x1="352.5"
                y1="0"
                x2="352.5"
                y2="478"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.75" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_4541_81001"
                x1="352.5"
                y1="0"
                x2="352.5"
                y2="478"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D9D9D9" stop-opacity="0" />
                <stop offset="0.558442" stop-color="#D9D9D9" />
                <stop offset="0.896104" stop-color="#D9D9D9" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_4541_81001"
                x1="432.432"
                y1="229.902"
                x2="511.582"
                y2="229.725"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#35A1DA" />
                <stop offset="0.25" stop-color="#857BBD" />
                <stop offset="0.5" stop-color="#E8584B" />
                <stop offset="0.75" stop-color="#584F9E" />
                <stop offset="1" stop-color="#CE4C9B" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_4541_81001"
                x1="481.512"
                y1="99.2888"
                x2="477.407"
                y2="233.522"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#716FFF" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_4541_81001"
                x1="101.685"
                y1="137.104"
                x2="95.8626"
                y2="142.915"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D9D9DE" />
                <stop offset="1" stop-color="#EBEBED" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_4541_81001"
                x1="349.599"
                y1="137.104"
                x2="343.777"
                y2="142.915"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D9D9DE" />
                <stop offset="1" stop-color="#EBEBED" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_4541_81001"
                x1="349.599"
                y1="261.32"
                x2="343.777"
                y2="267.131"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D9D9DE" />
                <stop offset="1" stop-color="#EBEBED" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_4541_81001"
                x1="101.685"
                y1="340.896"
                x2="95.8626"
                y2="346.706"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D9D9DE" />
                <stop offset="1" stop-color="#EBEBED" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_4541_81001"
                x1="611.064"
                y1="137.104"
                x2="605.241"
                y2="142.915"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D9D9DE" />
                <stop offset="1" stop-color="#EBEBED" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_4541_81001"
                x1="611.064"
                y1="261.32"
                x2="605.241"
                y2="267.131"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D9D9DE" />
                <stop offset="1" stop-color="#EBEBED" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_4541_81001"
                x1="315.709"
                y1="123.518"
                x2="82.8049"
                y2="355.937"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.510417" stop-color="white" />
                <stop offset="0.515625" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_4541_81001"
                x1="139.178"
                y1="195.426"
                x2="255.221"
                y2="318.547"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#35A1DA" />
                <stop offset="0.25" stop-color="#857BBD" />
                <stop offset="0.5" stop-color="#E8584B" />
                <stop offset="0.75" stop-color="#584F9E" />
                <stop offset="1" stop-color="#CE4C9B" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_4541_81001"
                x1="214.011"
                y1="61.4099"
                x2="214.011"
                y2="418.531"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#716FFF" stop-opacity="0" />
                <stop
                  offset="0.120312"
                  stop-color="#716FFF"
                  stop-opacity="0.5"
                />
                <stop offset="0.517187" stop-color="#716FFF" />
                <stop
                  offset="0.871875"
                  stop-color="#716FFF"
                  stop-opacity="0.5"
                />
                <stop offset="1" stop-color="#716FFF" stop-opacity="0" />
              </linearGradient>
              <radialGradient
                id="paint13_radial_4541_81001"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(213.047 239.97) scale(183.031 172.183)"
              >
                <stop stop-color="#716FFF" />
                <stop
                  offset="0.270408"
                  stop-color="#716FFF"
                  stop-opacity="0.5"
                />
                <stop offset="1" stop-color="#716FFF" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center text-left">
          <h3 className="text-black text-[32px] sm:text-[16px] md:text-[32px] font-semibold leading-[32px] sm:leading-[40px]">
            Built for Scale. Secured for Business.
          </h3>

          <ul className="list-disc pl-5 mt-4 text-[#808080] text-[18px] md:text-[18px] sm:text-[14px] leading-[24px] space-y-2">
            <li>Enterprise-grade architecture.</li>
            <li>Encrypted conversations.</li>
            <li>Built to scale without breaking.</li>
          </ul>

          <p className="text-[#808080] text-[18px] md:text-[18px] sm:text-[14px] mt-4 leading-[24px]">
            Whether you're a fast-growing startup or a large team,
            <br /> SalesBot grows with you. <br />
            Always running. Always secure.
          </p>

          <div className="mt-6">
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
    </section>
  );
}
