"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PrivacyPolicy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const items = [
    {
      href: "#interpretation-and-definitions",
      label: "Interpretation and Definitions",
      icon: "/Interpretation.svg",
    },
    {
      href: "#collecting-and-using-your-personal-data",
      label: "Collecting and Using Your Personal Data",
      icon: "/lockIcon.svg",
    },
    {
      href: "#childrens-privacy",
      label: "Children's Privacy",
      icon: "/child_careIcon.svg",
    },
    {
      href: "#links-to-other-websites",
      label: "Links to Other Websites",
      icon: "/LinkIcon.svg",
    },
    {
      href: "#changes-to-this-privacy-policy",
      label: "Changes to this Privacy Policy",
      icon: "/child_careIcon.svg",
    },
    {
      href: "#contact-us",
      label: "Contact Us",
      icon: "/MailIcon.svg",
    },
  ];

  const activeBg =
    "linear-gradient(89.89deg, #35A1DA 0.24%, #857BBD 25.46%, #E8584B 50.67%, #584F9E 75.88%, #CE4C9B 101.09%)";

  // Sticky effect only when reaching Interpretation & Definitions
  useEffect(() => {
    const target = document.querySelector("#interpretation-and-definitions");
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full relative flex flex-col items-center justify-center px-6 py-3 text-black text-lg font-medium space-y-6">
      <section className="relative flex max-w-7xl w-full mx-auto py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative w-[inherit] py-15 px-4 z-10">
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
                <span className="interTight">October 27, 2025</span>
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
      </section>

      <div className="flex flex-col md:flex-row gap-[20px] max-w-7xl w-full mx-auto min-h-screen ">
        {/* Sidebar Navigation */}
        <aside className="sticky top-[120px] self-start w-[-webkit-fill-available] md:w-fit h-fit bg-white rounded-[12px] border border-t-[#DED8D3] border-gray-200 p-[20px]">
          <h2 className="text-[#101828] text-lg font-[600] interTight mb-[30px]">
            Quick Navigation
          </h2>

          <ul className=" flex flex-col gap-[8px] text-sm text-gray-700">
            {items.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-[10px] px-[10px] py-[8px] rounded-[8px] transition ${
                  activeIndex === index
                    ? "text-white sticky top-4 z-20"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                style={{
                  background: activeIndex === index ? activeBg : "transparent",
                }}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-[10px] w-full"
                  onClick={(e) => {
                    // prevent default anchor jump (we'll handle scrolling programmatically)
                    e.preventDefault();
                    setActiveIndex(index);

                    // update URL hash (no navigation)
                    try {
                      if (typeof window !== "undefined" && item.href) {
                        history.replaceState(null, "", item.href);
                      }
                    } catch (err) {
                      // ignore
                    }

                    // scroll to the target section smoothly, accounting for sticky offset
                    try {
                      const target = document.querySelector(
                        item.href
                      ) as HTMLElement | null;
                      if (target && typeof window !== "undefined") {
                        const STICKY_OFFSET = 120; // match aside top value
                        const targetY =
                          target.getBoundingClientRect().top +
                          window.scrollY -
                          STICKY_OFFSET;

                        window.scrollTo({ top: targetY, behavior: "smooth" });

                        // keep accessibility: ensure focusable and focus without additional scrolling
                        if (!target.hasAttribute("tabindex"))
                          target.setAttribute("tabindex", "-1");
                        target.focus({ preventScroll: true });
                      }
                    } catch (err) {
                      // ignore
                    }
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={16}
                    height={16}
                    className={activeIndex === index ? "text-white" : ""}
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-gray-800">
          <div className="interTight" id="interpretation-and-definitions">
            <div className="flex items-center mb-5">
              <span className="mr-2">
                <Image
                  src="/InterpretationIcon.svg"
                  alt="Calendar"
                  width={24}
                  height={24}
                />
              </span>
              <h1 className="text-[24px] font-[500]">
                Interpretation and Definitions
              </h1>
            </div>

            <section className="mb-6">
              <h2 className="text-[16px] md:text-[20px] font-[500] text-[#1E1E1E] mb-[14px]">
                Interpretation
              </h2>
              <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                The words whose initial letters are capitalized have meanings
                defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>

              <h2 className="text-[16px] md:text-[20px] font-[500] text-[#1E1E1E] mb-[14px]">
                Definitions
              </h2>
              <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                For the purposes of this Privacy Policy:
              </p>

              <ul className="list-disc ml-6 text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-[400] text-[#4C4C4C] mb-[14px] space-y-1">
                <li>
                  <strong>Account</strong> means a unique account created for
                  You to access our Service or parts of our Service.
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
                  <strong>Cookies</strong> are small files placed on Your
                  computer or mobile device by a website containing details of
                  Your browsing history on that website among its many uses.
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
                  <strong>You</strong> means the individual accessing or using
                  the Service, or the company, or other legal entity on behalf
                  of which such individual is accessing or using the Service, as
                  applicable.
                </li>
              </ul>
            </section>
          </div>
          <div
            className="interTight"
            id="collecting-and-using-your-personal-data"
          >
            <div className="flex items-center mb-[20px]">
              <span className="material-icons text-orange-500 mr-2">
                <Image
                  src="/collecting-and-using-your-personal-data.svg"
                  alt="collecting-and-using-your-personal-data"
                  width={24}
                  height={24}
                />
              </span>
              <h1 className="text-[24px] font-[500] interTight">
                Collecting and Using Your Personal Data
              </h1>
            </div>
            <section className="mb-6">
              <div className="max-w-4xl mx-auto  leading-relaxed text-[#111]">
                <h2 className="text-[16px] md:text-[20px] font-[500] text-[#1E1E1E] mb-[14px]">
                  Types of Data Collected
                </h2>

                <h3 className="text-[14px] md:text-[18px] font-[500] text-[#1E1E1E] mb-[10px]">
                  Personal Data
                </h3>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>

                <ul className="list-disc ml-6 text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-[400] text-[#4C4C4C] mb-[14px] space-y-1">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Usage Data</li>
                </ul>

                <h3 className="text-[14px] md:text-[18px] font-[500] text-[#1E1E1E] mb-[10px]">
                  Usage Data
                </h3>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  Usage Data is collected automatically when using the Service.
                </p>

                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  Usage Data may include information such as Your Device's
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </p>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device's unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </p>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  We may also collect information that Your browser sends
                  whenever You visit Our Service or when You access the Service
                  by or through a mobile device.
                </p>

                <h3 className="text-[14px] md:text-[18px] font-[500] text-[#1E1E1E] mb-[10px]">
                  Tracking Technologies and Cookies
                </h3>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies include beacons, tags and scripts to
                  improve and analyze Our Service.
                </p>

                <ul className="list-disc ml-6 text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-[400] text-[#4C4C4C] mb-[14px] space-y-1">
                  <li>
                    Cookies or Browser Cookies. A cookie is a small file placed
                    on Your Device. You can instruct Your browser to refuse all
                    Cookies or to indicate when a Cookie is being sent. However,
                    if You do not accept Cookies, You may not be able to use
                    some parts of our Service. Unless you have adjusted Your
                    browser setting so that it will refuse Cookies, our Service
                    may use Cookies.
                  </li>
                  <li>
                    Web Beacons. Certain sections of our Service and our emails
                    may contain small electronic files known as web beacons
                    (also referred to as clear gifs, pixel tags, and
                    single-pixel gifs) that permit the Company, for example, to
                    count users who have visited those pages or opened an email
                    and for other related website statistics (for example,
                    recording the popularity of a certain section and verifying
                    system and server integrity).
                  </li>
                </ul>

                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  Cookies can be "Persistent" or "Session" Cookies. Persistent
                  Cookies remain on Your personal computer or mobile device when
                  You go offline, while Session Cookies are deleted as soon as
                  You close Your web browser. You can learn more about cookies
                  on TermsFeed website article.
                </p>

                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  We use both Session and Persistent Cookies for the purposes
                  set out below:
                </p>
                <ul className="list-disc ml-6 text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-[400] text-[#4C4C4C] mb-[14px] space-y-1">
                  <li className="font-[500] text-[16px]">
                    Necessary / Essential Cookies{" "}
                    <p className="font-[400] text-[14px]">
                      Type: Session Cookies <br /> Administered by: Us <br />{" "}
                      Purpose: These Cookies are essential to provide You with
                      services available through the Website and to enable You
                      to use some of its features. They help to authenticate
                      users and prevent fraudulent use of user accounts. Without
                      these Cookies, the services that You have asked for cannot
                      be provided, and We only use these Cookies to provide You
                      with those services.
                    </p>
                  </li>
                  <li className="font-[500] text-[16px]">
                    Cookies Policy / Notice Acceptance Cookies
                    <p className="font-[400] text-[14px]">
                      Type: Session Cookies <br /> Administered by: Us <br />{" "}
                      Purpose: These Cookies identify if users have accepted the
                      use of cookies on the Website.
                    </p>
                  </li>
                  <li className="font-[500] text-[16px]">
                    Functionality Cookies
                    <p className="font-[400] text-[14px]">
                      Type: Session Cookies <br /> Administered by: Us <br />
                      Purpose: These Cookies allow us to remember choices You
                      make when You use the Website, such as remembering your
                      login details or language preference. The purpose of these
                      Cookies is to provide You with a more personal experience
                      and to avoid You having to re-enter your preferences every
                      time You use the Website.
                    </p>
                  </li>
                </ul>

                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy or the
                  Cookies section of our Privacy Policy.
                </p>
                <h3 className="text-[14px] md:text-[18px] font-[500] text-[#1E1E1E] mb-[10px]">
                  Use of Your Personal Data
                </h3>

                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  The Company may use Personal Data for the following purposes:
                </p>

                <ul className="list-disc ml-6 text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-[400] text-[#4C4C4C] mb-[14px] space-y-1">
                  <li>
                    To provide and maintain our Service, including to monitor
                    the usage of our Service.
                  </li>
                  <li>
                    To manage Your Account: to manage Your registration as a
                    user of the Service. The Personal Data You provide can give
                    You access to different functionalities of the Service that
                    are available to You as a registered user.
                  </li>
                  <li>
                    For the performance of a contract: the development,
                    compliance and undertaking of the purchase contract for the
                    products, items or services You have purchased or of any
                    other contract with Us through the Service.
                  </li>
                  <li>
                    To contact You: To contact You by email, telephone calls,
                    SMS, or other equivalent forms of electronic communication,
                    such as a mobile application's push notifications regarding
                    updates or informative communications related to the
                    functionalities, products or contracted services.
                  </li>
                  <li>
                    To provide You with news, special offers, and general
                    information about other goods, services and events which We
                    offer that are similar to those that You have already
                    purchased or enquired about unless You have opted not to
                    receive such information.
                  </li>
                  <li>
                    To manage Your requests: To attend and manage Your requests
                    to Us.
                  </li>
                  <li>
                    For business transfers: We may use Your information to
                    evaluate or conduct a merger, divestiture, restructuring,
                    reorganization, dissolution, or other sale or transfer of
                    some or all of Our assets.
                  </li>
                  <li>
                    For other purposes: We may use Your information for data
                    analysis, identifying usage trends, evaluating and improving
                    Service, products, services, marketing and user experience.
                  </li>
                </ul>

                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  We may share Your personal information in the following
                  situations:
                </p>

                <ul className="list-disc ml-6 text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-[400] text-[#4C4C4C] mb-[14px] space-y-1">
                  <li>
                    <strong className="font-[500]">
                      With Service Providers:
                    </strong>{" "}
                    We may share Your personal information with Service
                    Providers to monitor and analyze the use of our Service, to
                    contact You.
                  </li>
                  <li>
                    <strong className="font-[500]">
                      For business transfers:
                    </strong>{" "}
                    We may share or transfer Your personal information in
                    connection with any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of Our
                    business to another company.
                  </li>
                  <li>
                    <strong className="font-[500]">With Affiliates:</strong> We
                    may share Your information with Our affiliates; in this
                    case, We will require those affiliates to honor this Privacy
                    Policy.
                  </li>
                  <li>
                    <strong className="font-[500]">
                      With business partners:
                    </strong>{" "}
                    We may share Your information with Our business partners to
                    offer You certain products, services or promotions.
                  </li>
                  <li>
                    <strong className="font-[500]">With other users:</strong>{" "}
                    When You share personal information or otherwise interact in
                    public areas with other users, such information may be
                    viewed by all users.
                  </li>
                  <li>
                    <strong className="font-[500]">With Your consent:</strong>{" "}
                    We may disclose Your personal information for any other
                    purpose with Your consent.
                  </li>
                </ul>

                <h3 className="text-[14px] md:text-[18px] font-[500] text-[#1E1E1E] mb-[10px]">
                  Retention of Your Personal Data
                </h3>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations, resolve
                  disputes, and enforce our legal agreements and policies.
                </p>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period, except when this data is used to strengthen security,
                  improve Service functionality, or when We are legally
                  obligated to retain this data for longer periods.
                </p>

                <h3 className="text-[14px] md:text-[18px] font-[500] text-[#1E1E1E] mb-[10px]">
                  Transfer of Your Personal Data
                </h3>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  Your information, including Personal Data, may be transferred
                  to and maintained on computers located outside of Your state,
                  province, country, or other governmental jurisdiction where
                  data protection laws may differ from those of Your
                  jurisdiction.
                </p>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  Your consent to this Privacy Policy followed by Your
                  submission of such information represents Your agreement to
                  that transfer.
                </p>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  The Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy, and no transfer of Your Personal Data will
                  take place unless there are adequate controls in place
                  regarding the security of Your data and other personal
                  information.
                </p>

                <h3 className="text-[14px] md:text-[18px] font-[500] text-[#1E1E1E] mb-[10px]">
                  Delete Your Personal Data
                </h3>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                </p>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  Our Service may give You the ability to delete certain
                  information about You within the Service.
                </p>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  You may update, amend, or delete Your information at any time
                  by signing in to Your Account, if you have one, and visiting
                  the account settings section that allows you to manage Your
                  personal information. You may also contact Us to request
                  access to, correct, or delete any personal information that
                  You have provided to Us.
                </p>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </p>

                <h3 className="text-[14px] md:text-[18px] font-[500] text-[#1E1E1E] mb-[10px]">
                  Disclosure of Your Personal Data
                </h3>

                <span className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[500] text-[#1E1E1E]">
                  Business Transactions:
                </span>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy.
                </p>

                <span className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[500] text-[#1E1E1E]">
                  Law Enforcement:
                </span>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g., a
                  court or a government agency).
                </p>

                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[500] text-[#1E1E1E] mb-[10px]">
                  Other Legal Requirements:
                </p>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                </p>

                <ul className="list-disc ml-6 text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-[400] text-[#4C4C4C] mb-[14px] space-y-1">
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of the Company
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of Users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>

                <h3 className="text-[14px] md:text-[18px] font-[500] text-[#1E1E1E] mb-[10px]">
                  Security of Your Personal Data
                </h3>
                <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially reasonable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </p>
              </div>
            </section>
          </div>
          <div className="interTight" id="childrens-privacy">
            <div className="flex items-center mb-5">
              <span className="mr-2">
                <Image
                  src="/childrens-privacy.svg"
                  alt="Calendar"
                  width={24}
                  height={24}
                />
              </span>
              <h1 className="text-[24px] font-[500]">Children's Privacy</h1>
            </div>

            <section className="interTight space-y-[20px]">
              <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
              </p>
              <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent's consent before We collect
                and use that information.
              </p>
            </section>
          </div>
          <div className="interTight" id="links-to-other-websites">
            <div className="flex items-center mb-5">
              <span className="mr-2">
                <Image
                  src="/links-to-other-websites.svg"
                  alt="links-to-other-websites"
                  width={24}
                  height={24}
                />
              </span>
              <h1 className="text-[24px] font-[500]">
                Links to Other Websites
              </h1>
            </div>

            <section className="mb-5">
              <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit.
              </p>

              <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third party sites
                or services.
              </p>
            </section>
          </div>

          <div className="interTight" id="changes-to-this-privacy-policy">
            <div className="flex items-center mb-5">
              <span className="mr-2">
                <Image
                  src="/childrens-privacy.svg"
                  alt="Calendar"
                  width={24}
                  height={24}
                />
              </span>
              <h1 className="text-[24px] font-[500]">
                Changes to this Privacy Policy
              </h1>
            </div>

            <section className="mb-5">
              <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page.
              </p>

              <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                "Last updated" date at the top of this Privacy Policy.
              </p>

              <p className="text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] font-[400] text-[#4C4C4C] mb-[10px]">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </section>
          </div>

          <div className="interTight" id="contact-us">
            <div className="flex items-center mb-4">
              <span className="material-icons text-orange-500 mr-2">
                <Image
                  src="/contact-us.svg"
                  alt="Calendar"
                  width={24}
                  height={24}
                />
              </span>
              <h1 className="text-[24px] interTight">Contact Us</h1>
            </div>
            <section>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, You can
                contact us:
              </p>

              <div className="bg-[#F9FAFB] rounded-md p-4 text-[14px]">
                <p className="mb-2">
                  <span className="font-[600]">Email:</span>{" "}
                  <span className="font-[400]">info@intoai.com</span>
                </p>

                <p>
                  <span className="font-[600]">Phone:</span>{" "}
                  <span className="font-[400]">+1 (940) 367-6376</span>
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
