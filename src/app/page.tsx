import Button from "@/components/Button";
import ButtonPrimary from "@/components/Button-primary";
import Header from "@/components/header";
import Conversation_card from "@/components/Conversation_card";
import Leads_card from "@/components/Leads_card";
import Campaign_Card from "@/components/Campaign_Card";
import Hero from "@/components/Hero";
import Kpicard from "@/components/Kpicard";
import Badge from "@/components/Badge";
import Ourfeature from "@/components/OurFeature";
import MultiCampaignCard from "@/components/MultiCampaignCard";
import ProcessSection from "@/components/ProcessSection";
import IntegrationPlatform from "@/components/IntegrationPlatform";
import Testimonial from "@/components/Testimonial";
import CtaCard from "@/components/CtaCard";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F5F4] relative overflow-hidden">
      <div className="h-[650px] sm:h-[700px] md:h-[800px] lg:h-[900px] relative">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-[110%] sm:h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        {/* White Overlay */}
        <div className="absolute inset-0 bg-white opacity-50 z-10 pointer-events-none h-[110%] sm:h-full"></div>

        {/* Noise Texture */}
        <div className="absolute inset-0 z-10 opacity-70 mix-blend-overlay pointer-events-none">
          <img
            src="/Noise.png"
            alt="Noise texture"
            className="w-full h-[110%] sm:h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-20 min-h-full flex flex-col">
          {/* Header */}
          <div className="relative z-50">
            <Header />
          </div>

          {/* Hero Section */}
          <div className="flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-12 sm:pt-8 md:pt-4 lg:pt-0 relative z-30 mt-8 sm:mt-12 md:mt-0">
            <Hero
              title={`Turn Every <span class="gradient-text">Lead</span> into 
          <span class="gradient-text">Revenue</span> with 
          <span class="gradient-text">AI</span>`}
              description="Lunch campaigns across LinkedIn, Meta & WhatsApp. Our Ai Agent engages every Lead 24/7, qualifying prospects and turning conversations into customers while you sleep."
              primaryButtonText="Watch Demo"
              secondaryButtonText="Start Free Trial"
            />
          </div>

          {/* Floating Cards - Hidden on mobile and tablet */}
          {/* Conversation Card */}
          <div className="hidden xl:block absolute top-[250px] left-[100px] rotate-[10deg]">
            <Conversation_card />
            <div className="w-16 h-16 relative">
              <div className="absolute bottom-[30px] left-[260px] w-16 h-16 border-[2px] border-[#EFEFEF] rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-[0_8px_30px_rgba(255,102,0,0.3)] -rotate-[10deg]">
                {/* Orange Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M9.17291 24.4962C9.17291 25.3267 9.84617 26 10.6767 26H15.3157C16.1462 26 16.8195 25.3267 16.8195 24.4962V23.706H9.17291V24.4962Z"
                    fill="#F15A22"
                  />
                  <path
                    d="M7.64355 20.7749C7.64355 21.5491 8.27118 22.1767 9.04542 22.1767H16.9469C17.7211 22.1767 18.3487 21.549 18.3487 20.7749V19.8828H7.64355V20.7749Z"
                    fill="#F15A22"
                  />
                  <path
                    d="M19.5206 2.72553C15.9845 -0.850006 10.2147 -0.9358 6.57536 2.63515C4.8166 4.36077 3.8383 6.6602 3.82056 9.1098C3.80399 11.3974 4.63451 13.5947 6.15908 15.2968C6.94025 16.1689 7.43488 17.2331 7.59052 18.3535H18.4018C18.5575 17.2331 19.0522 16.169 19.8334 15.2967C23.0252 11.7329 22.979 6.22251 19.5206 2.72553ZM12.8872 14.9236L11.5758 14.1367L13.1749 11.4715H10.1163L13.1051 6.49014L14.4165 7.27697L12.8174 9.9422H15.876L12.8872 14.9236Z"
                    fill="#F15A22"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Campaign Card */}
          <div className="hidden xl:block absolute top-[210px] right-[100px] rotate-0">
            <Campaign_Card />
          </div>

          {/* Leads Card */}
          <div className="hidden xl:block absolute top-[450px] right-[100px] -rotate-[10deg]">
            <Leads_card />
            <div className="w-16 h-16 relative">
              <div className="absolute -top-[250px] left-[240px] w-16 h-16 border-[2px] border-[#EFEFEF] rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-[0_8px_30px_rgba(255,102,0,0.3)] rotate-[10deg]">
                {/* Pink Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.4987 0.083313H5.4987C4.78737 0.083313 4.08301 0.223419 3.42583 0.495632C2.76865 0.767845 2.17152 1.16683 1.66854 1.66982C0.652714 2.68564 0.0820313 4.06339 0.0820312 5.49998V18.5C0.0820312 19.2113 0.222138 19.9157 0.49435 20.5728C0.766563 21.23 1.16555 21.8272 1.66854 22.3301C2.68436 23.346 4.06211 23.9166 5.4987 23.9166H18.4987C19.21 23.9166 19.9144 23.7765 20.5716 23.5043C21.2287 23.2321 21.8259 22.8331 22.3289 22.3301C22.8318 21.8272 23.2308 21.23 23.503 20.5728C23.7753 19.9157 23.9154 19.2113 23.9154 18.5V5.49998C23.9154 4.78865 23.7753 4.08429 23.503 3.42711C23.2308 2.76993 22.8318 2.1728 22.3289 1.66982C21.8259 1.16683 21.2287 0.767845 20.5716 0.495632C19.9144 0.223419 19.21 0.083313 18.4987 0.083313ZM19.582 13.0833C19.582 13.3706 19.4679 13.6462 19.2647 13.8493C19.0616 14.0525 18.786 14.1666 18.4987 14.1666C18.2114 14.1666 17.9358 14.0525 17.7327 13.8493C17.5295 13.6462 17.4154 13.3706 17.4154 13.0833V11.4041L14.5879 14.2641C14.1919 14.6667 13.6544 14.8988 13.0898 14.9109C12.5253 14.9231 11.9783 14.7143 11.5654 14.3291L9.83203 12.7041L6.23536 16.0408C6.13388 16.1493 6.01119 16.2357 5.8749 16.2947C5.73861 16.3537 5.59164 16.3841 5.44312 16.3839C5.2946 16.3838 5.14769 16.3531 5.01154 16.2937C4.87539 16.2344 4.75289 16.1477 4.65165 16.039C4.55042 15.9303 4.47262 15.802 4.42307 15.662C4.37353 15.522 4.3533 15.3733 4.36365 15.2251C4.37401 15.0769 4.41471 14.9325 4.48324 14.8007C4.55178 14.669 4.64667 14.5527 4.76203 14.4591L8.3587 11.1225C8.75994 10.7478 9.28846 10.5394 9.83745 10.5394C10.3864 10.5394 10.915 10.7478 11.3162 11.1225L13.0495 12.7475L15.9204 9.83331H14.1654C13.878 9.83331 13.6025 9.71918 13.3993 9.51601C13.1962 9.31285 13.082 9.0373 13.082 8.74998C13.082 8.46266 13.1962 8.18711 13.3993 7.98395C13.6025 7.78078 13.878 7.66665 14.1654 7.66665H18.4987C18.786 7.66665 19.0616 7.78078 19.2647 7.98395C19.4679 8.18711 19.582 8.46266 19.582 8.74998V13.0833Z"
                    fill="#FF1BA1"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* KPI Card Section */}
          <div className="relative z-20 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center w-full">
              <Kpicard />
            </div>
          </div>
        </div>
      </div>

      {/* Badge Section */}
      <div className="flex items-center justify-center bg-[#F6F5F4] z-30 py-8 sm:py-10 px-4 pt-24 sm:pt-10">
        <Ourfeature text="Our Features" />
      </div>

      <div className="flex items-center justify-center bg-[#F6F5F4] z-30 py-8 sm:py-10 px-4">
        <ProcessSection text="Process" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <IntegrationPlatform />
      </div>

      <div className="flex items-center justify-center bg-[#F6F5F4] z-30 py-8 sm:py-10 px-4">
        <Testimonial text="Testimonial" />
      </div>

      <div className="flex items-center justify-center bg-[#F6F5F4] z-30 py-8 sm:py-10 px-4">
        <CtaCard />
      </div>

      <div className="w-full flex items-center justify-center bg-[#F6F5F4] z-30">
        <Footer />
      </div>
    </main>
  );
}
