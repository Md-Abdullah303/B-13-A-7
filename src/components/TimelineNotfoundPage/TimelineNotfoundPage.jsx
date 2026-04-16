import React from "react";
import noDataFound from "../../assets/img/noDataFundImg-removebg-preview.png";

const TimelineNotfoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-20 bg-base-200 border border-gray-200 rounded-xl">
      <img src={noDataFound} alt="noDataFound" />
      <h1>No Data Found</h1>
      <p>No timeline activity yet. Start by adding your first interaction.</p>
    </div>
  );
};

export default TimelineNotfoundPage;
