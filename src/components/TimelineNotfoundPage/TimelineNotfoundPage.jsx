import React from "react";
import noDataFound from "../../assets/img/noDataFundImg-removebg-preview.png";

const TimelineNotfoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10 sm:py-16 md:py-20 px-4 bg-base-200 border border-gray-200 rounded-xl text-center">
      <img className="w-40 sm:w-56 md:w-64 lg:w-72 object-contain" src={noDataFound} alt="noDataFound" />
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">No Data Found</h1>
      <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-xs sm:max-w-md">No timeline activity yet. Start by adding your first interaction.</p>
    </div>
  );
};

export default TimelineNotfoundPage;
