import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`relative overflow-hidden px-3 py-2 sm:px-5 sm:py-3 min-w-[120px] sm:min-w-[150px] text-white font-semibold text-sm sm:text-lg tracking-wide rounded-lg bg-gradient-to-br from-black to-[#222] font-inter outline-none transition-all duration-300 active:translate-y-[-1px] before:content-[''] before:absolute before:top-0 before:left-[-60px] before:h-[250%] before:w-10 before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:-rotate-[20deg] before:-translate-y-[35%] before:animate-shine ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}