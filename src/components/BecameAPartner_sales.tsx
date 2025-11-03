import Button from "./Button";
import ButtonPrimary from "./Button-primary";

export default function BecameAPartner_sales() {
  return (
    <div className="flex justify-center items-center py-8 px-4 sm:py-12 sm:px-6">
      {/* Outer div for gradient border */}
      <div className="relative w-full max-w-7xl rounded-2xl p-[2px] bg-gradient-to-r from-red-500 via-orange-500 to-purple-600 shadow-md">
        {/* Inner white container */}
        <div className="rounded-2xl bg-white px-6 py-8 sm:px-12 md:px-[80px] md:py-[40px] lg:px-[100px] lg:py-[50px]">
          {/* Title */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Ready to Build a Future-Proof{" "}
            <span className="gradient-text">Future-Proof</span> <br></br>Income
            with AI?
          </h2>

          {/* Subtext */}
          <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto">
            Join the Into AI partner network and earn for every business you
            refer,  today and every month after. No technical skills. No risk.
            Pure earning potential.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <Button>Start Earning</Button>
          </div>

          {/* Features row */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-xs sm:text-sm lg:text-base text-gray-500 text-center sm:text-left">
            {/* Free Trial */}
            <div className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                className="sm:w-5 sm:h-5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.75005 0.993896V3.2439M15.25 0.993896V3.2439M0.998047 16.7439V5.4909C0.998047 4.89416 1.2351 4.32186 1.65706 3.89991C2.07901 3.47795 2.65131 3.2409 3.24805 3.2409H16.748C17.3448 3.2409 17.9171 3.47795 18.339 3.89991C18.761 4.32186 18.998 4.89416 18.998 5.4909V16.7419M18.998 16.7419C18.998 17.3386 18.761 17.9109 18.339 18.3329C17.9171 18.7548 17.3448 18.9919 16.748 18.9919H3.24805C2.65131 18.9919 2.07901 18.7548 1.65706 18.3329C1.2351 17.9109 0.998047 17.3386 0.998047 16.7419V9.2419C0.998047 8.64516 1.2351 8.07286 1.65706 7.65091C2.07901 7.22895 2.65131 6.9919 3.24805 6.9919H16.748C17.3448 6.9919 17.9171 7.22895 18.339 7.65091C18.761 8.07286 18.998 8.64516 18.998 9.2419V16.7419Z"
                  stroke="#808080"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Free 7 days trial
            </div>

            {/* No Credit Card Required */}
            <div className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                className="sm:w-[22px] sm:h-[18px]"
                viewBox="0 0 22 18"
                fill="none"
              >
                <path
                  d="M1.25 5.25H20.75M4.25 11.25H10.25M4.25 13.5H7.25M3.5 16.5H18.5C19.0967 16.5 19.669 16.2629 20.091 15.841C20.5129 15.419 20.75 14.8467 20.75 14.25V3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75V14.25C1.25 14.8467 1.48705 15.419 1.90901 15.841C2.33097 16.2629 2.90326 16.5 3.5 16.5Z"
                  stroke="#808080"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              No credit card required
            </div>

            {/* Cancel Anytime */}
            <div className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                className="sm:w-5 sm:h-5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.75 7.75L12.25 12.25M12.25 7.75L7.75 12.25M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                  stroke="#808080"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
