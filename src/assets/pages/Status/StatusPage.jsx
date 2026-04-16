import React, { use } from "react";
import { Label, Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineDataContext } from "../../../context/TimelineContextProvider/TimelineDataContext";
import TimelineNotfoundPage from "../../../components/TimelineNotfoundPage/TimelineNotfoundPage";

const StatusPage = () => {
  const { timeline } = use(TimelineDataContext);
  const textLength = timeline.filter((timeL) => timeL.type === "text");
  const callLength = timeline.filter((timeL) => timeL.type === "call");
  const videoLength = timeline.filter((timeL) => timeL.type === "video");

  const data = [
    { name: "Text", value: textLength.length, fill: "#0088FE" },
    { name: "Call", value: callLength.length, fill: "#00C49F" },
    { name: "Video call", value: videoLength.length, fill: "#FFBB28" },
  ];
  return (
    <div className="w-[90%] sm:container mx-auto py-10">
      <h1 className="text-xl sm:text-3xl font-bold py-3 sm:py-7">
        Friendship Analytics
      </h1>
      <div className="">
        {timeline.length === 0 ? (
          <TimelineNotfoundPage></TimelineNotfoundPage>
        ) : (
          <div className="flex justify-center flex-col py-10 border border-gray-300 rounded-xl p-5">
            <h1 className="text-sm sm:text-xl font-medium py-1 sm:py-3">
              By Interaction Type
            </h1>
            
            <div className="flex justify-center">
              <PieChart
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  maxHeight: "80vh",
                  aspectRatio: 1,
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  // Corner radius is the rounded edge of each pie slice
                  cornerRadius="50%"
                  fill="#8884d8"
                  // padding angle is the gap between each pie slice
                  paddingAngle={5}
                  dataKey="value"
                />
                <Tooltip></Tooltip>
                <Legend></Legend>
              </PieChart>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;
