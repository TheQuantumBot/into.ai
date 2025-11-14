"use client";
import React from "react";
import Badge from "./Badge";
import Heros from "./Heros";
import Image from "next/image";
import ButtonPrimary from "./Button-primary";
import Button from "./Button";
import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";

export const BlogData = ({ blog }: any) => {
  const card = blog;
  console.log("Received card:", card);
  const SocialMediaIcon = [
    { img: "/FB.svg" },
    { img: "/TW.svg" },
    { img: "/IG.svg" },
    { img: "/IN.svg" },
    { img: "/Link.svg" },
  ];

  const LastPoseCard = [
    {
      image: "/cardImage1.svg",
      title: "What Is SalesBot and How It’s Revolutionizing WhatsApp Sales",
      description:
        "Ever wished your sales team could reply faster, sell smarter, and close deals around the clock - without hiring....",
      footerImg: "/ProfileImage.svg",
      personName: "Joel Keneley",
      date: "November 12, 2025",
      category: "Innovation",
    },
    {
      image: "/cardImage2.svg",
      title: "Why Businesses Are Switching to AI-Powered Sales Agents",
      description:
        "Let’s be honest, customers today don’t wait. They ask, compare, and expect instant responses....",
      footerImg: "/ProfileImage.svg",
      personName: "Joel Keneley",
      date: "November 12, 2025",
      category: "Growth",
    },
    {
      image: "/cardImage.svg",
      title: "How SalesBot Converts Chats into Paying Customers",

      description:
        "Most businesses believe that sales start the moment a rep steps in, but in reality, it starts way before when....",
      footerImg: "/ProfileImage.svg",
      personName: "Joel Keneley",
      date: "November 12, 2025",
      category: "AI & Tech",
    },
  ];
  return (
    <section className="w-full relative overflow-hidden max-w-[1440px] mx-auto">
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-[10px]">
          <div className="text-left">
            <Badge text={card?.category} />
          </div>
          <h2 className="font-interTight font-semibold lg:text-[60px] lg:leading-[68px] md:text-[42px] md:leading-[52px] text-[28px] leading-[34px] text-center md:text-left text-black">
            {card?.title}
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-[200px] md:h-[410px] lg:h-[640px] rounded-[20px] overflow-hidden">
            <Image
              src={card?.image}
              alt="Blog image"
              fill
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex items-center w-full  gap-[14px]">
            <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
              <img
                src={card?.footerImg}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[16px] font-medium text-[#4C4C4C]">
              {card?.personName}
            </p>
            <p className="text-[14px] text-[#808080]">{card?.date}</p>
          </div>
        </div>
        <div className="w-full h-fit gap-[25px] flex flex-col opacity-100 rounded-[12px] p-[20px] border-[1px] bg-[#FFFFFF]">
          <h3 className="font-inter-tight font-semibold text-[16px] leading-[21px] lg:text-[20px] text-black">
            Category
          </h3>
          <div className="flex flex-wrap gap-[6px]">
            <div className="bg-[#F4F2F1] w-fit rounded-[8px] pt-[10px] pb-[10px] px-[20px] md:rounded-[6px] md:pt-[6px] md:pb-[6px] md:px-[10px] lg:rounded-[12px] lg:pt-[10px] lg:pb-[10px] lg:px-[20px]">
              <p className="font-inter-tight font-medium text-[14px] leading-none text-[#4A5565] md:text-[12px] lg:text-[14px]">
                All
              </p>
            </div>
            <div className="bg-[#F4F2F1] w-fit rounded-[8px] pt-[10px] pb-[10px] px-[20px] md:rounded-[6px] md:pt-[6px] md:pb-[6px] md:px-[10px] lg:rounded-[12px] lg:pt-[10px] lg:pb-[10px] lg:px-[20px]">
              <p className="font-inter-tight font-medium text-[14px] leading-none text-[#4A5565] md:text-[12px] lg:text-[14px]">
                Innovation
              </p>
            </div>
            <div className="bg-[#F4F2F1] w-fit rounded-[8px] pt-[10px] pb-[10px] px-[20px] md:rounded-[6px] md:pt-[6px] md:pb-[6px] md:px-[10px] lg:rounded-[12px] lg:pt-[10px] lg:pb-[10px] lg:px-[20px]">
              <p className="font-inter-tight font-medium text-[14px] leading-none text-[#4A5565] md:text-[12px] lg:text-[14px]">
                Growth
              </p>
            </div>
            <div className="bg-[#F4F2F1] w-fit rounded-[8px] pt-[10px] pb-[10px] px-[20px] md:rounded-[6px] md:pt-[6px] md:pb-[6px] md:px-[10px] lg:rounded-[12px] lg:pt-[10px] lg:pb-[10px] lg:px-[20px]">
              <p className="font-inter-tight font-medium text-[14px] leading-none text-[#4A5565] md:text-[12px] lg:text-[14px]">
                AI & Tech
              </p>
            </div>
            <div className="bg-[#F4F2F1] w-fit rounded-[8px] pt-[10px] pb-[10px] px-[20px] md:rounded-[6px] md:pt-[6px] md:pb-[6px] md:px-[10px] lg:rounded-[12px] lg:pt-[10px] lg:pb-[10px] lg:px-[20px]">
              <p className="font-inter-tight font-medium text-[14px] leading-none text-[#4A5565] md:text-[12px] lg:text-[14px]">
                Industries
              </p>
            </div>
            <div className="bg-[#F4F2F1] w-fit rounded-[8px] pt-[10px] pb-[10px] px-[20px] md:rounded-[6px] md:pt-[6px] md:pb-[6px] md:px-[10px] lg:rounded-[12px] lg:pt-[10px] lg:pb-[10px] lg:px-[20px]">
              <p className="font-inter-tight font-medium text-[14px] leading-none text-[#4A5565] md:text-[12px] lg:text-[14px]">
                Marketing
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-auto 
            flex flex-col md:flex-row 
            gap-[20px] opacity-100 mx-auto"
        >
          <div className="w-full h-auto flex flex-col gap-[30px] opacity-100 rounded-[12px] p-[40px] border-[1px] bg-[#FFFFFF]">
            <div className="flex flex-col gap-[10px]">
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                Ever wished your sales team could{" "}
                <span className="font-semibold">
                  reply faster, sell smarter, and close deals around the clock -
                  without hiring more people?{" "}
                </span>
              </p>
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                Meet <span className="font-semibold">SalesBot, </span>{" "}
                <span className="font-semibold">
                  your AI-powered WhatsApp sales automation assistant{" "}
                </span>{" "}
                that
                <span className="font-semibold">
                  {" "}
                  never sleeps, never forgets a lead, and never sends a dull
                  reply.
                </span>
              </p>
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                It doesn’t just respond - {" "}
                <span className="font-semibold">
                  it acts, decides, and sells{" "}
                </span>{" "}
                like your most experienced salesperson would… only faster.
              </p>
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                So, if your{" "}
                <span className="font-semibold">
                  {" "}
                  WhatsApp inbox is overflowing{" "}
                </span>{" "}
                with unread messages, missed leads, or “interested but not
                followed up” prospects,{" "}
                <span className="font-semibold">
                  SalesBot is the upgrade your sales game has been waiting for.
                </span>
              </p>
            </div>
            <div className="border-[1px] border-[#0000001A]"></div>
            <div className="flex flex-col gap-[10px]">
              {/* First Title */}
              <h1 className="font-inter-tight font-medium text-[24px] leading-none text-[black]">
                What Is SalesBot?
              </h1>

              {/* Paragraph Block */}
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                <span className="font-semibold">
                  SalesBot is more than just another chatbot.
                </span>
              </p>
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                It’s a{" "}
                <span className="font-semibold">
                  conversational AI for sales
                </span>
                , built with
                <span className="font-semibold">
                  {" "}
                  Agentic AI technology
                </span>{" "}
                that
                <span className="font-semibold">
                  {" "}
                  handles real customer interactions, qualifies leads, and
                  closes deals – all in real time.
                </span>
                Think of it as your{" "}
                <span className="font-semibold">
                  sharpest salesperson cloned
                </span>{" "}
                and deployed across
                <span className="font-semibold">
                  {" "}
                  WhatsApp, Instagram, LinkedIn, Shopify, and YouTube.
                </span>
              </p>

              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                👉{" "}
                <a
                  className="font-semibold text-[var(--color-azure-45,rgba(0,146,232,1))] underline"
                  href=""
                >
                  See How SalesBot Works
                </a>
              </p>
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                How SalesBot Is Changing the Way Businesses Sell on WhatsApp
              </p>
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                Your customers don’t wait — and neither should you.
              </p>
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                That’s where{" "}
                <span className="font-semibold">
                  SalesBot’s WhatsApp sales automation
                </span>{" "}
                comes in. It{" "}
                <span className="font-semibold">
                  instantly replies to leads, nurtures prospects, and converts
                  chats into sales
                </span>
                — all without sounding robotic.
                <br />
                <br />
                Whether you’re in{" "}
                <span className="font-semibold">
                  eCommerce, real estate, healthcare, or SaaS
                </span>
                , SalesBot ensures no lead slips through the cracks.
              </p>

              {/* Second Title */}
              <h2 className="font-inter-tight font-semibold text-[18px] leading-none text-[black]">
                Here’s What It Brings to the Table:
              </h2>

              {/* List */}
              <ul className="font-inter-tight font-normal text-[14px] leading-[24px] text-[#4C4C4C] lg:text-[16px] list-disc pl-5">
                <li>
                  <span className="font-semibold">
                    Human-sounding dialogue:
                  </span>{" "}
                  Every response feels personal, warm, and convincing, not
                  scripted.
                </li>
                <li>
                  <span className="font-semibold">
                    Agentic AI intelligence:
                  </span>{" "}
                  It thinks strategically and acts like a top closer, not a
                  responder.
                </li>
                <li>
                  <span className="font-semibold">24/7 engagement:</span>{" "}
                  SalesBot never logs off. It sells, supports, and follows up
                  around the clock.
                </li>
                <li>
                  <span className="font-semibold">Instant follow-ups:</span> As
                  soon as a lead shows interest, SalesBot jumps in — no delay,
                  no lost leads.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[10px]">
              {/* First Title */}
              <h1 className="font-inter-tight font-medium text-[24px] leading-none text-[black]">
                One Bot. All Channels.
              </h1>

              {/* Paragraph */}
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                SalesBot isn’t confined to one platform, it’s your
                <span className="font-semibold">
                  {" "}
                  all-in-one AI sales assistant
                </span>{" "}
                that follows your customers everywhere.
              </p>

              {/* Second Title */}
              <h2 className="font-inter-tight font-semibold text-[18px] leading-none text-[black]">
                Here’s Where the Magic Happens:
              </h2>

              {/* List */}
              <ul className="font-inter-tight font-normal text-[14px] leading-[24px] text-[#4C4C4C] lg:text-[16px] list-disc pl-5">
                <li>
                  <span className="font-semibold">WhatsApp:</span> Converts live
                  conversations into paying customers.
                </li>

                <li>
                  <span className="font-semibold">Instagram & LinkedIn:</span>{" "}
                  Replies instantly to DMs and comments.
                </li>

                <li>
                  <span className="font-semibold">YouTube:</span> Turns video
                  views into real-time leads using
                  <span className="font-semibold"> CTA-driven messages.</span>
                </li>

                <li>
                  <span className="font-semibold">IndiaMART & Justdial:</span>{" "}
                  Automates B2B lead responses on autopilot.
                </li>

                <li>
                  <span className="font-semibold">Shopify & Websites:</span>{" "}
                  Recovers abandoned carts, answers FAQs, and boosts
                  conversions.
                </li>
              </ul>

              {/* Final paragraph */}
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                Wherever your audience engages,
                <span className="font-semibold">
                  {" "}
                  SalesBot is already there, ready to talk business.
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {/* First Title */}
              <h1 className="font-inter-tight font-medium text-[24px] leading-none text-[black]">
                Why Businesses Are Falling in Love with SalesBot
              </h1>

              {/* Paragraphs */}
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                Because{" "}
                <span className="font-semibold">
                  SalesBot isn’t just a chatbot, it’s a sales agent with
                  purpose.
                </span>
              </p>

              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                It keeps conversations alive,{" "}
                <span className="font-semibold">
                  handles objections smartly
                </span>
                , and turns{" "}
                <span className="font-semibold">
                  “Just looking” into “Let’s close this.”
                </span>
              </p>

              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                It <span className="font-semibold">learns from every chat</span>
                , adapts to your brand tone, and
                <span className="font-semibold">
                  {" "}
                  makes your sales cycle faster and smarter.
                </span>
              </p>

              {/* Second Title */}
              <h2 className="font-inter-tight font-semibold text-[18px] leading-none text-[black]">
                Here’s What Businesses Love Most:
              </h2>

              {/* List */}
              <ul className="font-inter-tight font-normal text-[14px] leading-[24px] text-[#4C4C4C] lg:text-[16px] list-disc pl-5">
                <li>
                  <span className="font-semibold">Smarter Conversions:</span>{" "}
                  Every chat is structured to sell, not just talk.
                </li>

                <li>
                  <span className="font-semibold">Tone Consistency:</span> Every
                  reply sounds like your brand, confident, natural, and
                  persuasive.
                </li>

                <li>
                  <span className="font-semibold">Zero Delay:</span> Instant
                  responses that keep your leads warm.
                </li>

                <li>
                  <span className="font-semibold">Data-Driven Insights:</span>{" "}
                  Understand customer patterns and act faster.
                </li>
              </ul>

              {/* Final Link */}
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px] ">
                👉{" "}
                <a
                  className="font-semibold text-[var(--color-azure-45,rgba(0,146,232,1))] underline"
                  href=""
                >
                  Explore Real Customer Results
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {/* First Title */}
              <h1 className="font-inter-tight font-medium text-[24px] leading-none text-[black]">
                The Future of Selling Is Agentic AI
              </h1>

              {/* Paragraphs */}
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                <span className="font-semibold">
                  SalesBot doesn’t replace your team, it amplifies them.
                </span>
              </p>

              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                Powered by <span className="font-semibold">Agentic AI</span>,
                <span className="font-semibold">
                  {" "}
                  it reads context, anticipates intent, and responds like your
                  best salesperson would multiplied across every channel.
                </span>
              </p>

              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                Imagine a system that{" "}
                <span className="font-semibold">
                  never forgets a lead, never delays, and never loses patience.
                </span>
                <br />
                That’s SalesBot,{" "}
                <span className="font-semibold">
                  proactive, intelligent, and built to close.
                </span>
              </p>

              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                So if you’ve ever dreamed of making{" "}
                <span className="font-semibold">
                  every conversation a conversion
                </span>
                , you’re not dreaming anymore.
              </p>

              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                You’re just{" "}
                <span className="font-semibold">one SalesBot away.</span>
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {/* First Title */}
              <h1 className="font-inter-tight font-medium text-[24px] leading-none text-[black]">
                Try SalesBot Today, Turn Every Chat into a Conversion
              </h1>
              <p className="font-inter-tight font-normal text-[14px] leading-none text-[#4C4C4C] lg:text-[16px]">
                Experience the power of{" "}
                <span className="font-semibold">
                  AI-driven WhatsApp sales automation
                </span>
                for your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mt-6">
              <ButtonPrimary>Watch Demo</ButtonPrimary>
              <Button
              // onClick={() => {
              //   router.push("https://salesbot.cloud/register");
              // }}
              >
                Experience Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-inter-tight font-semibold text-[20px] leading-[21px] text-black">
            Share it with the world
          </div>
          <div className="flex gap-3">
            {SocialMediaIcon.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt="avatar"
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-[15px]">
          <div className="text-center">
            <Badge text={"Our Blog"} />
          </div>
          <h1 className="text-black text-center font-inter-tight font-semibold text-[44px] leading-[50px] text-center align-middle ">
            Latest Posts
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mx-auto">
          {LastPoseCard.map((card) => (
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
                <p className="text-[16px] text-[#4C4C4C]">{card.description}</p>
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
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-20">
          <Button
          // onClick={() => {
          //   router.push("https://salesbot.cloud/register");
          // }}
          >
            Experience Now
          </Button>
        </div>{" "}
      </div>
    </section>
  );
};
export default BlogData;
