import React from "react";

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-lg font-medium rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      {text}
    </div>
  );
};

export default Badge;