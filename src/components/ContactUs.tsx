"use client";

import React, { useState } from "react";
import Button from "./Button";
import Badge from "./Badge";
import { useForm } from "react-hook-form";
import Image from "next/image";
type FormValues = {
  fullName: string;
  emailId: string;
  phoneNumber: string;
  message: string;
};
const ContactUs = () => {
  //   const router = useRouter();
  const { register, handleSubmit } = useForm();

  // Submit handler
  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12 relative z-10 bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="w-full flex justify-center items-center py-8 ">
            <div className="space-y-7 max-w-xl text-left">
              {/* Tag */}

              <div className="">
                <Badge text="Contact Us" />
              </div>
              {/* Main Heading */}
              <h1 className="font-inter-tight text-[28px] md:text-[42px] font-[600] leading-[40px] md:leading-[55px] text-[#191919]">
                Give Your Sales the Upgrade They Deserve.
              </h1>

              {/* Subheading */}
              <p className="font-inter-tight font-medium text-[16px] lg:text-[20px] leading-[25px] text-[#191919]">
                Got questions about the product or scaling on our platform?
                We're here to help. Chat to our friendly team 24/7 and get
                onboarded in less then 5 minutes.
              </p>

              {/* Description */}
              <h3 className="font-inter-tight font-medium text-[18px] lg:text-[24px] leading-[25px] text-[#191919]">
                We'd Love to Hear From You.
              </h3>

              <p className="font-inter-tight font-medium text-[16px] lg:text-[20px] leading-[25px] text-[#191919]">
                Or just reach out manually to info@intoai.us
              </p>
              <div className="absolute bottom-[0px] left-[0px]">
                <Image
                  src="/ContectBG.svg"
                  alt="Arrow"
                  width={500}
                  height={358.5}
                />
              </div>

              {/* Button */}
              <Button
              // onClick={() => {
              //   router.push("https://salesbot.cloud/register");
              // }}
              >
                Experience Now
              </Button>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full max-w-4xl p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"
            >
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-sm text-gray-900"
                  required
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Id<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("emailId")}
                  type="email"
                  placeholder="Enter your mail id"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-sm text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phoneNumber")}
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-sm text-gray-900"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Leave your message here..."
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-sm text-gray-900 resize-none"
                />
              </div>

              <div className="md:col-span-2 flex justify-center pt-2">
                <Button type="submit">Submit Inquiry</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
