"use client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  buttonType?: "black" | "white";
};

export default function Button({
  children,
  className = "",
  buttonType = "black",
  ...props
}: ButtonProps) {
  const baseBtn = `
    relative overflow-hidden z-0 transition-all duration-300
    active:translate-y-[-1px]
  `;

  const blackBtn = `
    ${baseBtn}
    px-3 py-2 sm:px-5 sm:py-3 min-w-[120px]
    text-white font-semibold text-sm sm:text-lg tracking-wide rounded-lg
    bg-gradient-to-br from-black to-[#222] font-inter outline-none ${className}
  `;

  const whiteBtn = `
    ${baseBtn}
    px-3 py-2 sm:px-5 sm:py-3 min-w-[110px]
    text-black font-semibold text-sm sm:text-lg tracking-wide rounded-md
    border border-[#d9d3ce] bg-white font-inter outline-none ${className}
  `;

  return (
    <>
      <button
        className={buttonType === "white" ? whiteBtn : blackBtn}
        {...props}
      >
        {children}
      </button>

      <style jsx>{`
        button {
          position: relative;
          z-index: 0;
        }

        button::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px; /* border thickness */
          background: linear-gradient(
            90deg,
            #35a1da,
            #d4549f,
            #f15a22,
            #35a1da
          );
          background-size: 300% 300%;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          z-index: -1;
        }

        button:hover::before {
          opacity: 1;
          animation: moveBorder 3s linear infinite;
        }

        @keyframes moveBorder {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}
