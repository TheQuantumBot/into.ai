import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  avatar,
  testimonial,
}) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-5 flex flex-col gap-4 border border-gray-100">
      {/* User Info */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">
            {role} @ {company}
          </p>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-800 text-sm leading-relaxed">
        {testimonial}
      </p>

      {/* Quote Icon */}
      <div className="mt-[100px]">
        <div className="w-6 h-6">
          <Image
            src="/quote.svg"
            alt="quote"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
