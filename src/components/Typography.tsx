import React, { ReactNode } from "react";


interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

export function H1({ children, ...props }: TypographyProps) {
  return (
   
       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight" {...props}>
      {children}
    </h1>
    
  );
}


export function Body({ children, className = "" }: TypographyProps) {
  return <p className={`text-slate-600 ${className}`}>{children}</p>;
}

// Export all
export default { H1, Body };
