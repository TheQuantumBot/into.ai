"use client";
import React from "react";
import Image from "next/image";

const WhoCanBecomePartner = () => {
  const roles = [
    { text: "Digital marketing agencies", faded: true },
    { text: "Freelancers & consultants", faded: true },
    {
      text: "Startup founders",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    { text: "Sales professionals" },
    { text: "Business coaches & consultants", faded: true },
    { text: "Influencers & community leaders", faded: true },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative space-y-6">
          <div className="bg-white inline-block border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-700 font-bold">
            Partner
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Who Can <br /> Become a Partner
          </h2>

          <p className="text-gray-500 text-lg">
            Perfect for Anyone With a Network - No Tech Skills Needed
          </p>

          <button className="inline-flex items-center gap-2 bg-[#f05a25] text-white font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all">
            👋 Anyone who believes in AI
          </button>

          {/* Arrow graphic */}
          <div className="absolute  right-0  top-0 hidden md:block">
            <Image src="/arrow.svg" alt="Arrow" width={200} height={100} />
          </div>
        </div>

        {/* Right Side - Role List */}
        <div className="space-y-3 text-left md:pl-8">
          {roles.map((role, index) => (
            <p
              key={index}
              className={`text-2xl sm:text-3xl font-semibold ${
                role.gradient
                  ? "bg-gradient-to-r " +
                    role.gradient +
                    " bg-clip-text text-transparent"
                  : role.faded
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              {role.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanBecomePartner;
