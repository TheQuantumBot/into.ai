"use client";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative overflow-hidden  min-h-screen flex items-center justify-center py-20 px-4">
        {/* Background blur gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,183,197,0.15),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Privacy Policy
              </h1>
            </div>

            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 w-fit shadow-sm border border-gray-200">
              <Image src="/cal.svg" alt="Calendar" width={18} height={18} />
              <p className="text-sm text-gray-700 font-medium">
                Last updated:{" "}
                <span className="font-semibold">October 27, 2025</span>
              </p>
            </div>

            <p className="text-base text-gray-700 leading-relaxed max-w-lg">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>

            <p className="text-base text-gray-700 leading-relaxed max-w-lg">
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </div>
          {/* RIGHT VISUAL */}
          <div className="flex justify-center items-center">
            <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] flex justify-center items-center animate-float">
              {/* Gradient glow effect */}
              <div className="absolute inset-0  blur-3xl opacity-30 rounded-full"></div>

              {/* Shield SVG */}
              <div className="relative flex items-center justify-center">
                <Image
                  src="/Privacy.svg"
                  alt="Privacy Shield"
                  width={400}
                  height={400}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </section>
      <div className="flex flex-col md:flex-row  min-h-screen p-4 md:p-8">
        {/* Sidebar Navigation */}
        <aside className="w-[333px] h-[331px] bg-white rounded-[12px] border border-t-[#DED8D3] border-t border-gray-200 p-[20px]">
          <h2 className="text-gray-800 text-lg font-semibold mb-[35px]">
            Quick Navigation
          </h2>

          <ul className="flex flex-col gap-[30px] text-sm text-gray-700">
            {/* Active / Selected Item */}
            <li
              className="flex items-center w-[291px] h-[33px] gap-[10px] px-[10px] py-[8px] rounded-[8px] text-white"
              style={{
                background:
                  "linear-gradient(89.89deg, #35A1DA 0.24%, #857BBD 25.46%, #E8584B 50.67%, #584F9E 75.88%, #CE4C9B 101.09%)",
              }}
            >
              <span className="material-icons text-[16px]"></span>
              <span>Interpretation and Definitions</span>
            </li>

            {/* Inactive Items */}
            <li className="flex items-center gap-[10px] w-[291px] h-[33px] px-[10px] py-[8px] rounded-[8px] hover:bg-gray-100 transition">
              <span className="material-icons text-[16px]">lock</span>
              <span>Collecting and Using Your Personal Data</span>
            </li>
            <li className="flex items-center gap-[10px] w-[291px] h-[33px] px-[10px] py-[8px] rounded-[8px] hover:bg-gray-100 transition">
              <span className="material-icons text-[16px]">child_care</span>
              <span>Children's Privacy</span>
            </li>
            <li className="flex items-center gap-[10px] w-[291px] h-[33px] px-[10px] py-[8px] rounded-[8px] hover:bg-gray-100 transition">
              <span className="material-icons text-[16px]">link</span>
              <span>Links to Other Websites</span>
            </li>
            <li className="flex items-center gap-[10px] w-[291px] h-[33px] px-[10px] py-[8px] rounded-[8px] hover:bg-gray-100 transition">
              <span className="material-icons text-[16px]">update</span>
              <span>Changes to this Privacy Policy</span>
            </li>
            <li className="flex items-center gap-[10px] w-[291px] h-[33px] px-[10px] py-[8px] rounded-[8px] hover:bg-gray-100 transition">
              <span className="material-icons text-[16px]">email</span>
              <span>Contact Us</span>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-gray-800">
          <div className="flex items-center mb-4">
            <span className="material-icons text-orange-500 mr-2">gavel</span>
            <h1 className="text-xl font-semibold">
              Interpretation and Definitions
            </h1>
          </div>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Interpretation
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              The words whose initial letters are capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Definitions
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              For the purposes of this Privacy Policy:
            </p>

            <ul className="list-disc ml-6 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Account</strong> means a unique account created for You
                to access our Service or parts of our Service.
              </li>
              <li>
                <strong>Affiliate</strong> means an entity that controls, is
                controlled by, or is under common control with a party, where
                "control" means ownership of 50% or more of the shares, equity
                interest or other securities entitled to vote for election of
                directors or other managing authority.
              </li>
              <li>
                <strong>Company</strong> (referred to as either "the Company",
                "We", "Us" or "Our") refers to AI SANTE MEDITECH PRIVATE
                LIMITED, Block No.37, Prashil Park Opp. Neels City Club Rajkot
                Sau Uni Area Rajkot Gujarat India 360005.
              </li>
              <li>
                <strong>Cookies</strong> are small files placed on Your computer
                or mobile device by a website containing details of Your
                browsing history on that website among its many uses.
              </li>
              <li>
                <strong>Country</strong> refers to: Gujarat, India.
              </li>
              <li>
                <strong>Device</strong> means any device that can access the
                Service such as a computer, a cell phone, or a digital tablet.
              </li>
              <li>
                <strong>Personal Data</strong> means any information that
                relates to an identified or identifiable individual.
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>Service Provider</strong> means any natural or legal
                person who processes the data on behalf of the Company. It
                refers to third-party companies or individuals employed by the
                Company to facilitate the Service, to provide the Service on
                behalf of the Company, to perform Service-related tasks or to
                assist the Company in analyzing how the Service is used.
              </li>
              <li>
                <strong>Usage Data</strong> refers to data collected
                automatically, either generated by the use of the Service or
                from the Service infrastructure itself (for example, the
                duration of a page visit).
              </li>
              <li>
                <strong>Website</strong> refers to IntoAI, accessible from{" "}
                <a
                  href="https://intoai.co.in"
                  className="text-indigo-600 hover:underline"
                >
                  https://intoai.co.in
                </a>
                .
              </li>
              <li>
                <strong>You</strong> means the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable.
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
