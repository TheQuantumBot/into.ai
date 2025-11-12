import React from "react";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  gradient?: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  step,
  title,
  description,
  gradient,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full h-full">
      {/* Step Number */}
      <div
        className="text-4xl font-bold animate-bounce"
        style={{
          // background: "linear-gradient(87deg, #ffffff 0%, #D4549F 12%, #F15A22 100%)",
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {step}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mt-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProcessCard;
