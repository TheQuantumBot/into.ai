"use client";

import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import ButtonPrimary from "./Button-primary";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ Detect current route

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Become a partner", href: "/become-a-partner" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl 
                 bg-white/60 backdrop-blur-sm border border-white/30 
                 rounded-2xl shadow-md z-50"
      style={{
        WebkitBackdropFilter: "blur(6px)", 
        backdropFilter: "blur(6px)", 
      }}
    >
      <div className="flex items-center justify-between px-6 py-3 ">
        {/* Logo */}

        <Link href="/">
          <svg
            width="142"
            height="32"
            viewBox="0 0 142 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <g clip-path="url(#clip0_6_757)">
              <path d="M12.0571 0H5.71338V31.9998H12.0571V0Z" fill="#E6E7E8" />
              <path
                d="M36.1958 10.4366C35.3549 9.49113 34.3198 8.73826 33.1613 8.22939C32.0292 7.73895 30.8079 7.4881 29.5742 7.49261C28.2082 7.48814 26.8608 7.8092 25.6437 8.42919C24.4035 9.06946 23.3504 10.0203 22.5873 11.189V7.861H16.4714V31.9998H22.5873V19.1718C22.5681 18.1984 22.7073 17.2283 22.9994 16.2996C23.2395 15.5569 23.6247 14.8692 24.1327 14.2766C24.5888 13.7541 25.1535 13.3375 25.7873 13.0559C26.4194 12.784 27.1003 12.6437 27.7884 12.6437C28.4766 12.6437 29.1575 12.784 29.7896 13.0559C30.423 13.3383 30.9875 13.7548 31.4442 14.2766C31.9466 14.8705 32.3265 15.5581 32.5619 16.2996C32.854 17.2283 32.9932 18.1984 32.974 19.1718V31.9998H39.0898V19.356C39.1236 17.5854 38.8587 15.8217 38.3062 14.1392C37.8588 12.7757 37.141 11.5164 36.1958 10.4366Z"
                fill="#E6E7E8"
              />
              <path
                d="M49.3894 25.7934C48.994 25.4562 48.7962 24.7975 48.7962 23.8172V1.19568H42.6772V24.2761C42.6772 26.9818 43.413 28.9434 44.8845 30.161C46.3559 31.3785 48.3175 31.9915 50.7693 31.9998H55.9767V26.2991H51.606C50.5279 26.2991 49.789 26.1306 49.3894 25.7934Z"
                fill="#E6E7E8"
              />
              <path
                d="M49.9885 10.8956L55.967 14.0237V7.08057L49.9885 10.2056V10.8956Z"
                fill="#E6E7E8"
              />
              <path
                d="M79.6657 10.4585C78.533 9.30014 77.1809 8.37895 75.6884 7.74864C74.1089 7.0796 72.4086 6.74273 70.6933 6.75898C69.025 6.74436 67.3706 7.0642 65.8279 7.6996C64.2853 8.33501 62.8856 9.2731 61.7115 10.4585C59.3662 12.8426 58.0608 16.0586 58.0807 19.4028C58.0677 21.083 58.3959 22.7484 59.0454 24.298C59.672 25.7892 60.5768 27.1475 61.7115 28.3003C63.5158 30.0776 65.8046 31.2827 68.2909 31.7648C70.7773 32.2469 73.3506 31.9843 75.6884 31.0102C77.1809 30.3799 78.533 29.4587 79.6657 28.3003C80.7887 27.1425 81.6855 25.7851 82.31 24.298C82.9595 22.7484 83.2877 21.083 83.2747 19.4028C83.2864 17.7147 82.9583 16.0414 82.31 14.4826C81.6896 12.9869 80.7925 11.6216 79.6657 10.4585ZM76.4939 21.9784C76.1846 22.7531 75.7324 23.4627 75.1608 24.0701C74.5873 24.6696 73.9036 25.153 73.1471 25.4937C72.366 25.8416 71.5204 26.0214 70.6652 26.0214C69.8101 26.0214 68.9644 25.8416 68.1833 25.4937C67.4361 25.156 66.7641 24.6719 66.2071 24.0701C65.0411 22.7967 64.3998 21.1294 64.412 19.4028C64.4065 18.5141 64.5708 17.6325 64.8959 16.8054C65.1982 16.0247 65.6428 15.307 66.2071 14.6887C66.7641 14.0869 67.4361 13.6029 68.1833 13.2651C68.9639 12.9153 69.8097 12.7344 70.6652 12.7344C71.5207 12.7344 72.3665 12.9153 73.1471 13.2651C73.8991 13.6072 74.5785 14.0905 75.1483 14.6887C75.7237 15.3027 76.1761 16.0212 76.4814 16.8054C76.8065 17.6325 76.9707 18.5141 76.9653 19.4028C76.9755 20.2837 76.8155 21.1583 76.4939 21.9784Z"
                fill="#E6E7E8"
              />
              <path
                d="M89.6682 31.9998C91.2682 31.9998 92.5653 30.7027 92.5653 29.1027C92.5653 27.5026 91.2682 26.2055 89.6682 26.2055C88.0681 26.2055 86.771 27.5026 86.771 29.1027C86.771 30.7027 88.0681 31.9998 89.6682 31.9998Z"
                fill="#E6E7E8"
              />
              <path
                d="M12.0571 0H5.71338V31.9998H12.0571V0Z"
                fill="url(#paint0_linear_6_757)"
              />
              <path
                d="M36.1958 10.4366C35.3549 9.49113 34.3198 8.73826 33.1613 8.22939C32.0292 7.73895 30.8079 7.4881 29.5742 7.49261C28.2082 7.48814 26.8608 7.8092 25.6437 8.42919C24.4035 9.06946 23.3504 10.0203 22.5873 11.189V7.861H16.4714V31.9998H22.5873V19.1718C22.5681 18.1984 22.7073 17.2283 22.9994 16.2996C23.2395 15.5569 23.6247 14.8692 24.1327 14.2766C24.5888 13.7541 25.1535 13.3375 25.7873 13.0559C26.4194 12.784 27.1003 12.6437 27.7884 12.6437C28.4766 12.6437 29.1575 12.784 29.7896 13.0559C30.423 13.3383 30.9875 13.7548 31.4442 14.2766C31.9466 14.8705 32.3265 15.5581 32.5619 16.2996C32.854 17.2283 32.9932 18.1984 32.974 19.1718V31.9998H39.0898V19.356C39.1236 17.5854 38.8587 15.8217 38.3062 14.1392C37.8588 12.7757 37.141 11.5164 36.1958 10.4366Z"
                fill="url(#paint1_linear_6_757)"
              />
              <path
                d="M49.3894 25.7934C48.994 25.4562 48.7962 24.7975 48.7962 23.8172V1.19568H42.6772V24.2761C42.6772 26.9818 43.413 28.9434 44.8845 30.161C46.3559 31.3785 48.3175 31.9915 50.7693 31.9998H55.9767V26.2991H51.606C50.5279 26.2991 49.789 26.1306 49.3894 25.7934Z"
                fill="url(#paint2_linear_6_757)"
              />
              <path
                d="M49.9885 10.8956L55.967 14.0237V7.08057L49.9885 10.2056V10.8956Z"
                fill="url(#paint3_linear_6_757)"
              />
              <path
                d="M79.6657 10.4585C78.533 9.30014 77.1809 8.37895 75.6884 7.74864C74.1089 7.0796 72.4086 6.74273 70.6933 6.75898C69.025 6.74436 67.3706 7.0642 65.8279 7.6996C64.2853 8.33501 62.8856 9.2731 61.7115 10.4585C59.3662 12.8426 58.0608 16.0586 58.0807 19.4028C58.0677 21.083 58.3959 22.7484 59.0454 24.298C59.672 25.7892 60.5768 27.1475 61.7115 28.3003C63.5158 30.0776 65.8046 31.2827 68.2909 31.7648C70.7773 32.2469 73.3506 31.9843 75.6884 31.0102C77.1809 30.3799 78.533 29.4587 79.6657 28.3003C80.7887 27.1425 81.6855 25.7851 82.31 24.298C82.9595 22.7484 83.2877 21.083 83.2747 19.4028C83.2864 17.7147 82.9583 16.0414 82.31 14.4826C81.6896 12.9869 80.7925 11.6216 79.6657 10.4585ZM76.4939 21.9784C76.1846 22.7531 75.7324 23.4627 75.1608 24.0701C74.5873 24.6696 73.9036 25.153 73.1471 25.4937C72.366 25.8416 71.5204 26.0214 70.6652 26.0214C69.8101 26.0214 68.9644 25.8416 68.1833 25.4937C67.4361 25.156 66.7641 24.6719 66.2071 24.0701C65.0411 22.7967 64.3998 21.1294 64.412 19.4028C64.4065 18.5141 64.5708 17.6325 64.8959 16.8054C65.1982 16.0247 65.6428 15.307 66.2071 14.6887C66.7641 14.0869 67.4361 13.6029 68.1833 13.2651C68.9639 12.9153 69.8097 12.7344 70.6652 12.7344C71.5207 12.7344 72.3665 12.9153 73.1471 13.2651C73.8991 13.6072 74.5785 14.0905 75.1483 14.6887C75.7237 15.3027 76.1761 16.0212 76.4814 16.8054C76.8065 17.6325 76.9707 18.5141 76.9653 19.4028C76.9755 20.2837 76.8155 21.1583 76.4939 21.9784Z"
                fill="url(#paint4_linear_6_757)"
              />
              <path
                d="M89.6682 31.9998C91.2682 31.9998 92.5653 30.7027 92.5653 29.1027C92.5653 27.5026 91.2682 26.2055 89.6682 26.2055C88.0681 26.2055 86.771 27.5026 86.771 29.1027C86.771 30.7027 88.0681 31.9998 89.6682 31.9998Z"
                fill="url(#paint5_linear_6_757)"
              />
              <path
                d="M131.44 6.48113L135.951 4.64232V0H129.632V31.9998H135.976V6.48113H131.44Z"
                fill="#E6E7E8"
              />
              <path
                d="M111.731 0.643127L95.915 31.9998H101.937L104.282 27.4012H110.204V22.0221H106.995L111.684 12.6875L116.329 22.0221H113.17V27.4012H119.042L121.293 31.9998H127.319L111.731 0.643127Z"
                fill="#231F20"
              />
              <path
                d="M131.44 6.48113L135.951 4.64232V0H129.632V31.9998H135.976V6.48113H131.44Z"
                fill="url(#paint6_linear_6_757)"
              />
              <path
                d="M111.731 0.643127L95.915 31.9998H101.937L104.282 27.4012H110.204V22.0221H106.995L111.684 12.6875L116.329 22.0221H113.17V27.4012H119.042L121.293 31.9998H127.319L111.731 0.643127Z"
                fill="url(#paint7_linear_6_757)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_6_757"
                x1="5.71338"
                y1="15.9999"
                x2="92.5656"
                y2="15.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#35A1DA" />
                <stop offset="0.52" stop-color="#D4549F" />
                <stop offset="1" stop-color="#F15A22" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_6_757"
                x1="5.71325"
                y1="15.9999"
                x2="92.5654"
                y2="15.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#35A1DA" />
                <stop offset="0.52" stop-color="#D4549F" />
                <stop offset="1" stop-color="#F15A22" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_6_757"
                x1="5.71355"
                y1="15.9999"
                x2="92.5657"
                y2="15.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#35A1DA" />
                <stop offset="0.52" stop-color="#D4549F" />
                <stop offset="1" stop-color="#F15A22" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_6_757"
                x1="5.71328"
                y1="15.9999"
                x2="92.5654"
                y2="15.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#35A1DA" />
                <stop offset="0.52" stop-color="#D4549F" />
                <stop offset="1" stop-color="#F15A22" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_6_757"
                x1="5.71338"
                y1="15.9999"
                x2="92.5656"
                y2="15.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#35A1DA" />
                <stop offset="0.52" stop-color="#D4549F" />
                <stop offset="1" stop-color="#F15A22" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_6_757"
                x1="5.71312"
                y1="15.9999"
                x2="92.5653"
                y2="15.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#35A1DA" />
                <stop offset="0.52" stop-color="#D4549F" />
                <stop offset="1" stop-color="#F15A22" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_6_757"
                x1="94.1859"
                y1="29.5116"
                x2="142.579"
                y2="7.99526"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3A4E9E" />
                <stop offset="0.65" stop-color="#D4549F" />
                <stop offset="1" stop-color="#BC368E" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_6_757"
                x1="94.1855"
                y1="29.5116"
                x2="142.579"
                y2="7.99528"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3A4E9E" />
                <stop offset="0.65" stop-color="#D4549F" />
                <stop offset="1" stop-color="#BC368E" />
              </linearGradient>
              <clipPath id="clip0_6_757">
                <rect width="141.689" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-black font-medium">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="relative group inline-block"
            >
              {item.name}
              <svg
                width="17"
                height="7"
                viewBox="0 0 17 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute left-1/2 bottom[-16px] -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href))
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              >
                <path
                  d="M0.00140953 1.77906C0.900244 3.1822 2.13546 4.33848 3.59482 5.14284C5.05418 5.94719 6.6914 6.37411 8.35771 6.3848C10.024 6.3955 11.6666 5.98962 13.1362 5.20406C14.6057 4.4185 15.8557 3.27816 16.7724 1.88667L14.0184 0.0721946C13.404 1.00477 12.5663 1.76902 11.5814 2.2955C10.5965 2.82198 9.49563 3.09399 8.37887 3.08683C7.26212 3.07966 6.16486 2.79354 5.1868 2.25447C4.20875 1.71539 3.38091 0.940454 2.77852 7.62939e-05L0.00140953 1.77906Z"
                  fill="url(#paint0_linear_4607_20958)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4607_20958"
                    x1="18.4219"
                    y1="-3.61499"
                    x2="-1.57812"
                    y2="-3.61499"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF2E2E" />
                    <stop offset="0.362773" stop-color="#EE7B16" />
                    <stop offset="0.697515" stop-color="#8A43E1" />
                    <stop offset="1" stop-color="#D510FC" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          ))}
        </nav>

        {/* CTA Button for Desktop */}
        <div className="hidden md:block">
          <div className="flex gap-[20px]">
            <span>
              <Link href="https://salesbot.cloud/login" target="_self">
                <Button buttonType="white">Login</Button>
              </Link>
            </span>
            <span>
              <Button>Start Free Trial</Button>{" "}
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur-md rounded-b-2xl shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-black font-medium">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="relative group inline-block"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
                <svg
                  className={`absolute left-1/2 -bottom-2 w-12 h-3 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    pathname === item.href ||
                    (item.href !== "/" && pathname?.startsWith(item.href))
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 0 Q50 20 100 0"
                    stroke="url(#grad)"
                    strokeWidth="2"
                    fill="transparent"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
                      <stop offset="0%" stopColor="#35A1DA" />
                      <stop offset="100%" stopColor="#F15A22" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            ))}
            <Button buttonType="white">Login</Button>
            {/* CTA Button for Mobile */}
            <Button>Start Free Trial</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
