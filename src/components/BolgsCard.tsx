"use client";
import React, { useState } from "react";

export const BolgsCard = () => {
  const [activeTab, setActiveTab] = useState("All");
  console.log("🚀 ~ BolgsCard ~ activeTab:", activeTab);
  const TabList = [
    "All",
    "Innovation",
    "Growth",
    "AI & Tech",
    "Industries",
    "Marketing",
  ];

  return (
    <div>
      <div className="flex items-center gap-3 p-2 bg-white rounded-full shadow-sm w-fit">
        {TabList.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all
        ${
          activeTab === tab
            ? "bg-black text-white"
            : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
        }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
