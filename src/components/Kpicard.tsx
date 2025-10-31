const Kpicard = () => {
  return (
    <div className="w-full py-0 sm:py-4 lg:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Single horizontal card containing all KPIs */}
        <div className="bg-white/50 backdrop-blur-[2.153846263885498px] border-[2px] border-[#EFEFEF] rounded-2xl shadow-lg px-4 sm:px-6 lg:px-8 py-6 hover:shadow-xl transition-shadow">
          {/* Mobile: 2x2 Grid, Desktop: Horizontal Row */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:flex md:flex-wrap md:justify-between md:items-center">
            {/* Average ROI Increase */}
            <div className="text-center flex-1 min-w-[120px] sm:min-w-[150px]">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                312%
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Average ROI Increase
              </div>
            </div>
            
            {/* Lead Conversion Rate */}
            <div className="text-center flex-1 min-w-[120px] sm:min-w-[150px]">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                47%
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Lead Conversion Rate
              </div>
            </div>
            
            {/* Response Time */}
            <div className="text-center flex-1 min-w-[120px] sm:min-w-[150px]">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                &lt;2min
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Response Time
              </div>
            </div>
            
            {/* Client Satisfaction */}
            <div className="text-center flex-1 min-w-[120px] sm:min-w-[150px]">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                98%
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Kpicard;