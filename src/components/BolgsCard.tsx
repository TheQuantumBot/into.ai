"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { blogsData, generateSlug } from "@/app/blogs/page";

export const BolgsCard = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCards =
    activeTab === "All"
      ? blogsData
      : blogsData.filter((card) => card.category === activeTab);

  return (
    <section>
      {/* Tabs */}
      <div className="w-full flex justify-center px-4">
        <div className="p-[6px] gap-[6px] flex flex-wrap items-center bg-white rounded-[16px] w-fit max-w-full">
          {[
            "All",
            "Innovation",
            "Growth",
            "AI & Tech",
            "Industries",
            "Marketing",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pt-[10px] px-[20px] pb-[10px] rounded-[12px] ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-[#F4F2F1] text-[#4C4C4C]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-[80%] mx-auto">
        {filteredCards.map((card, i) => {
          const slug = generateSlug(card.title);

          return (
            <Link key={i} href={`/blogs/${slug}`}>
              <div className="bg-white flex flex-col rounded-[24px] p-[8px]">
                <div className="rounded-[16px] relative">
                  <img
                    src={card.image}
                    className="w-full h-full object-cover rounded-[24px]"
                  />
                  <p className="absolute top-3 right-3 bg-white px-4 py-1 rounded-[10px] shadow-md text-[rgba(76,76,76,1)]">
                    {card.category}
                  </p>
                </div>

                <div className="flex flex-col gap-[6px] px-5 border-b border-dashed pb-5 pt-[18px]">
                  <p className="text-[24px] font-medium text-black">
                    {card.title}
                  </p>
                  <p className="text-[16px] text-[#4C4C4C]">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center justify-between w-full p-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={card.footerImg}
                      className="w-[32px] h-[32px] rounded-full"
                    />
                    <p className="text-[16px] font-medium text-[#4C4C4C]">
                      {card.personName}
                    </p>
                  </div>
                  <p className="text-[14px] text-[#808080]">{card.date}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
