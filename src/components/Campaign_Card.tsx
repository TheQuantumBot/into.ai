import Image from "next/image";

export default function CampaignCard() {
  return (
    <div className="bg-white/40 rounded-[24px] p-2">
      <div className="lg:w-[300px] lg:h-[100px] h-[72px] w-[265px] bg-white rounded-[24px] shadow-lg p-6 flex items-center">
        {/* Left Icon Section */}
        <div className="w-[42px] h-[42px] lg:w-[64px] lg:h-[64px] bg-[#2196F3] rounded-2xl flex items-center justify-center">
          <Image
            src="/icons/megaphone.svg"
            alt="Campaign Icon"
            width={40}
            height={40}
          />
        </div>

        {/* Right Content Section */}
        <div className="ml-5">
          {/* Title */}
          <p className="text-lg font-medium text-gray-900">Active Campaigns</p>

          {/* Count and Growth */}
          <div className="flex items-center mt-2 space-x-2">
            <span className="text-3xl font-bold text-gray-900">50</span>

            {/* Growth Section */}
            <div className="flex items-center text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none">
                <path d="M19.1662 1.38948C19.0716 1.14524 18.8904 0.951163 18.6624 0.849737C18.5502 0.79852 18.4298 0.771355 18.3078 0.769775H13.6425C13.395 0.769775 13.1577 0.875082 12.9827 1.06253C12.8078 1.24997 12.7094 1.5042 12.7094 1.76929C12.7094 2.03438 12.8078 2.28861 12.9827 2.47606C13.1577 2.6635 13.395 2.76881 13.6425 2.76881H16.0591L10.8433 8.35611L7.77354 5.0577C7.6868 4.96402 7.58361 4.88966 7.4699 4.83892C7.3562 4.78817 7.23424 4.76205 7.11107 4.76205C6.98789 4.76205 6.86594 4.78817 6.75223 4.83892C6.63853 4.88966 6.53533 4.96402 6.44859 5.0577L0.850217 11.0548C0.762763 11.1477 0.693348 11.2583 0.645978 11.3801C0.598607 11.5019 0.574219 11.6325 0.574219 11.7645C0.574219 11.8964 0.598607 12.0271 0.645978 12.1489C0.693348 12.2707 0.762763 12.3812 0.850217 12.4741C0.936957 12.5678 1.04016 12.6422 1.15386 12.6929C1.26756 12.7436 1.38952 12.7698 1.51269 12.7698C1.63587 12.7698 1.75782 12.7436 1.87153 12.6929C1.98523 12.6422 2.08843 12.5678 2.17517 12.4741L7.11107 7.17668L10.1808 10.4751C10.2676 10.5688 10.3708 10.6431 10.4845 10.6939C10.5982 10.7446 10.7201 10.7707 10.8433 10.7707C10.9665 10.7707 11.0885 10.7446 11.2022 10.6939C11.3159 10.6431 11.4191 10.5688 11.5058 10.4751L17.3748 4.17813V6.76688C17.3748 7.03197 17.4731 7.2862 17.648 7.47364C17.823 7.66109 18.0604 7.76639 18.3078 7.76639C18.5553 7.76639 18.7926 7.66109 18.9676 7.47364C19.1426 7.2862 19.2409 7.03197 19.2409 6.76688V1.76929C19.2394 1.63868 19.2141 1.50964 19.1662 1.38948Z" fill="#10934B" />
              </svg>
              <span className="ml-1 text-lg font-medium text-green-600">
                +32.08%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
