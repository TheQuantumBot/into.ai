"use client";
import { ArrowRight } from "lucide-react";

export default function HeroBox() {
  return (
    <section className="relative overflow-hidden pt-[100px] pb-[48px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                <p className="text-sm font-medium text-gray-700">
                  Affiliate Program
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Become an{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Into AI
                </span>{" "}
                Channel Partner
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Build a recurring income stream by promoting the future of
              AI-driven sales - zero investment, full support, and lifetime
              earning potential.
            </p>

            <p className="text-base text-gray-600 leading-relaxed max-w-md">
              At Into AI, we build products that help businesses sell faster,
              respond smarter, and grow effortlessly, starting with SalesBot,
              our flagship AI sales assistant that actually sells, not just
              talks.
            </p>

            <p className="text-base text-gray-600 leading-relaxed max-w-md">
              Now, we're opening doors for partners who want to grow with the AI
              revolution. Bring your network, we'll handle the tech, onboarding,
              and support.
            </p>

            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium flex items-center gap-2 group">
              Start Earning
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* Right - Visual with Icons */}

          <div
            className="relative h-[400px] lg:h-[450px] flex items-center justify-center bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/become-a-partner/two-person.svg')",
            }}
          >
            <div
              className="relative w-full h-full flex items-center justify-center bottom-[-110px] right-[12px] bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/become-a-partner/pattern.svg')",
              }}
            >
              {/* Gradient Curve Background */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 518 327"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M483.251 0.833511C497.484 -2.8029 512.112 5.7827 514.31 20.3082C523.45 80.72 511.536 142.753 480.096 195.771C444.112 256.451 385.496 300.352 317.144 317.814C248.792 335.277 176.302 324.872 115.622 288.888C62.6042 257.447 22.396 208.73 1.43925 151.337C-3.59961 137.538 5.11741 122.988 19.351 119.352C33.5846 115.715 47.9162 124.393 53.2986 138.062C70.5266 181.815 101.884 218.89 142.758 243.129C191.302 271.916 249.294 280.24 303.975 266.27C358.657 252.3 405.55 217.18 434.337 168.635C458.576 127.761 468.307 80.1891 462.438 33.5347C460.604 18.9588 469.017 4.46992 483.251 0.833511Z"
                  fill="url(#curvePaint)"
                />
                <defs>
                  <linearGradient
                    id="curvePaint"
                    x1="-14.6992"
                    y1="60.0923"
                    x2="517.301"
                    y2="60.0923"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF2E2E" />
                    <stop offset="0.362773" stopColor="#EE7B16" />
                    <stop offset="0.697515" stopColor="#8A43E1" />
                    <stop offset="1" stopColor="#D510FC" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Content Card */}
              <div className="absolute inset-0 flex items-center justify-center z-20 top-[-60%]">
                <div className="bg-white rounded-2xl px-6 py-8 shadow-2xl max-w-xs text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    Into AI
                  </div>
                  <p className="text-sm text-gray-600">Partner with us</p>
                </div>
              </div>

              {/* Floating Icons */}
              {/* AI Icon */}
              <div
                className="absolute top-[-10rem] right-auto left-auto  z-30 animate-float"
                style={{ animationDelay: "0s" }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.535714"
                    y="0.535714"
                    width="58.9286"
                    height="58.9286"
                    rx="29.4643"
                    fill="url(#paint0)"
                  />
                  <rect
                    x="0.535714"
                    y="0.535714"
                    width="58.9286"
                    height="58.9286"
                    rx="29.4643"
                    stroke="url(#paint1)"
                    strokeWidth="1.07143"
                  />
                  <path
                    d="M21 13L22.6205 17.3795L27 19L22.6205 20.6205L21 25L19.3795 20.6205L15 19L19.3795 17.3795L21 13Z"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 21L38.5112 30.4888L48 34L38.5112 37.5112L35 47L31.4888 37.5112L22 34L31.4888 30.4888L35 21Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0"
                      x1="30"
                      y1="0"
                      x2="30"
                      y2="60"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A278FD" />
                      <stop offset="1" stopColor="#D3CCEB" />
                    </linearGradient>
                    <linearGradient
                      id="paint1"
                      x1="30"
                      y1="0"
                      x2="30"
                      y2="60"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A178FB" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Dollar Icon */}
              <div
                className="absolute bottom-20 right-4 md:right-8 z-30 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="6"
                    y="6"
                    width="60"
                    height="60"
                    rx="30"
                    fill="#13AE59"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="66"
                    height="66"
                    rx="33"
                    stroke="#13AE59"
                    strokeOpacity="0.2"
                    strokeWidth="6"
                  />
                  <path
                    d="M37 21V52"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M34.625 36H38.375C41.4816 36 44 38.4624 44 41.5C44 44.5376 41.4816 47 38.375 47H34.625C31.5184 47 29 44.5376 29 41.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M38.375 36H34.625C31.5184 36 29 33.5376 29 30.5C29 27.4624 31.5184 25 34.625 25H38.375C41.4816 25 44 27.4624 44 30.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>

              {/* Real Estate Icon */}
              <div
                className="absolute -top-1/4 right-0  z-30 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.535714"
                    y="0.535714"
                    width="58.9286"
                    height="58.9286"
                    rx="29.4643"
                    fill="url(#paint2)"
                  />
                  <rect
                    x="0.535714"
                    y="0.535714"
                    width="58.9286"
                    height="58.9286"
                    rx="29.4643"
                    stroke="url(#paint3)"
                    strokeWidth="1.07143"
                  />
                  <path
                    d="M35.3359 27.3333L38.2026 28.1933C40.0333 28.7426 40.9493 29.0173 41.4759 29.7266C42.0026 30.4333 42.0026 31.3906 42.0026 33.3013V43.3333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.668 26H28.668M24.668 31.3333H28.668"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint2"
                      x1="30"
                      y1="0"
                      x2="30"
                      y2="60"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F68B3E" />
                      <stop offset="1" stopColor="#FADFCC" />
                    </linearGradient>
                    <linearGradient
                      id="paint3"
                      x1="30"
                      y1="0"
                      x2="30"
                      y2="60"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF994F" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Person Icon */}
              <div
                className="absolute bottom-[22rem] left-8 md:left-12 z-30 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.535714"
                    y="0.535714"
                    width="58.9286"
                    height="58.9286"
                    rx="29.4643"
                    fill="url(#paint4)"
                  />
                  <rect
                    x="0.535714"
                    y="0.535714"
                    width="58.9286"
                    height="58.9286"
                    rx="29.4643"
                    stroke="url(#paint5)"
                    strokeWidth="1.07143"
                  />
                  <path
                    d="M30 32.8125C34.0386 32.8125 37.3125 29.5386 37.3125 25.5C37.3125 21.4614 34.0386 18.1875 30 18.1875C25.9614 18.1875 22.6875 21.4614 22.6875 25.5C22.6875 29.5386 25.9614 32.8125 30 32.8125Z"
                    stroke="white"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.1875 44.0625C18.1875 38.4375 22.6875 32.8125 30 32.8125C37.3125 32.8125 41.8125 38.4375 41.8125 44.0625"
                    stroke="white"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint4"
                      x1="30"
                      y1="0"
                      x2="30"
                      y2="60"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#789EFD" />
                      <stop offset="1" stopColor="#CFD9F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint5"
                      x1="30"
                      y1="0"
                      x2="30"
                      y2="60"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7EA2FD" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
