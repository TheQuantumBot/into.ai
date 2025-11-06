import React from "react";

type ButtonPrimaryProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function ButtonPrimary({
  children,
  className = "",
  ...props
}: ButtonPrimaryProps) {
  return (
    <button
      className={`relative overflow-hidden px-3 py-2 md:px-3 sm:px-[10px]  [@media(max-width:375px)]:px-[7px] sm:py-3 min-w-[120px] sm:min-w-[150px] flex items-center justify-center gap-1 sm:gap-2 
        text-black font-semibold text-sm sm:text-lg tracking-wide rounded-lg bg-white font-inter outline-none border-[2px] border-[#DED8D3]
        transition-all duration-300 active:translate-y-[-1px] hover:bg-gray-100
        before:content-[''] before:absolute before:top-0 before:left-[-60px] before:h-[250%] before:w-10 
        before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent 
        before:-rotate-[20deg] before:-translate-y-[35%] before:animate-shine
        ${className}`}
      {...props}
    >
      {/* Fixed SVG on the LEFT */}
      <span className="flex items-center w-4 h-4 sm:w-5 sm:h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
        >
          <path
            d="M1.25 2.65302C1.25 1.79702 2.167 1.25502 2.917 1.66702L14.457 8.01402C14.6336 8.11106 14.781 8.25376 14.8836 8.42721C14.9862 8.60066 15.0403 8.79849 15.0403 9.00002C15.0403 9.20155 14.9862 9.39938 14.8836 9.57283C14.781 9.74628 14.6336 9.88898 14.457 9.98602L2.917 16.333C2.74569 16.4272 2.55278 16.4751 2.35731 16.472C2.16184 16.469 1.97054 16.415 1.80227 16.3155C1.634 16.216 1.49457 16.0743 1.39773 15.9045C1.30089 15.7346 1.24997 15.5425 1.25 15.347V2.65302Z"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Button Text */}
      {children}
    </button>
  );
}
