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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto p-[30px] md:p-[50px] relative z-10 bg-[#faf9f8] rounded-[20px] border border-[#EAEAEA] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center">
          {/* left Text Section */}
          <div className="w-full flex relative justify-center items-center lg:py-8 ">
            <div className="space-y-7  max-w-xl text-center lg:text-left">
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
              <div className="absolute bottom-[0px] left-[-50px]">
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
              {/* Full Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-[#F0F0F0] border-0 rounded-lg text-sm text-gray-900 focus:outline-none"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message as string}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Id<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("emailId", { required: "Email is required" })}
                  type="email"
                  placeholder="Enter your mail id"
                  className="w-full px-4 py-3 bg-[#F0F0F0] border-0 rounded-lg text-sm text-gray-900  focus:outline-none "
                />
                {errors.emailId && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.emailId.message as string}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-[#F0F0F0] border-0 rounded-lg text-sm text-gray-900 focus:outline-none"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber.message as string}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Leave your message here..."
                  className="w-full h-[147px] px-4 py-3 bg-[#F0F0F0] border-0 rounded-lg text-sm text-gray-900 resize-none focus:outline-none"
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
