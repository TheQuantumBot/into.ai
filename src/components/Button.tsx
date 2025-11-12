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
  const blackBtn = `relative overflow-hidden px-3 py-2 sm:px-5 sm:py-3 min-w-[120px] [@media(max-width:375px)]:px-[7px]  
     text-white font-semibold text-sm sm:text-lg tracking-wide rounded-lg 
     bg-gradient-to-br from-black to-[#222] font-inter outline-none transition-all duration-300 
     active:translate-y-[-1px]
     before:content-[''] before:absolute before:top-0 before:left-[-60px] before:h-[250%] before:w-10 
     before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent 
     before:-rotate-[20deg] before:-translate-y-[35%] before:animate-shine ${className}`;

  const whiteBtn = `relative overflow-hidden px-3 py-2 sm:px-5 sm:py-3 min-w-[110px]  
     text-black font-semibold text-sm sm:text-lg tracking-wide rounded-md
     border border-[#d9d3ce] bg-white font-inter outline-none transition-all duration-300 
     active:translate-y-[-1px]
     before:content-[''] before:absolute before:top-0 before:left-[-60px] before:h-[250%] before:w-10 
     before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent 
     before:-rotate-[20deg] before:-translate-y-[35%] before:animate-shine ${className}`;

  return (
    <button className={buttonType === "white" ? whiteBtn : blackBtn} {...props}>
      {children}
    </button>
  );
}
