import Image from "next/image";
import React from "react";

interface Card {
  img: string;
  title: string;
}

interface RewardingCardProps {
  rewardContent: Card[];
  current: number;
}

const RewardingCard: React.FC<RewardingCardProps> = ({
  rewardContent,
  current,
}) => {
  return (
    <div className="relative w-full">
      <div
        className="
          flex
          gap-6
          animate-scroll
          w-max
        "
      >
        {rewardContent.map((card, index) => (
          <div
            key={index}
            className="
            w-[466px]
            h-[364px]
            bg-white
            rounded-[20px]
            border border-[#EAEAEA]
            flex flex-col
            justify-start
            items-center
            p-6
            shadow-sm
            hover:shadow-md
            transition-all
            duration-300
            shrink-0
          "
          >
            <div className="relative w-full h-[200px] rounded-[12px] overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[#111111] text-[22px] font-[500] leading-[26px] text-center mt-6">
              {card.title}
            </p>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
};

export default RewardingCard;
