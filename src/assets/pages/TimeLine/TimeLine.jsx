import React, { use, useState } from "react";
import { TimelineDataContext } from "../../../context/TimelineContextProvider/TimelineDataContext";
import TimelineNotfoundPage from "../../../components/TimelineNotfoundPage/TimelineNotfoundPage";
import TimelineShowCard from "../../../components/TimelineShowCard/TimelineShowCard";

const TimeLine = () => {
  const [timelineStats, setTimelineStats] = useState("show all");
  const { timeline, setTimeline } = use(TimelineDataContext);
  const [filterTimeline, setFilterTimeline] = useState(timeline);
  console.log(timeline);

  const handleTimelineStats = (currentStat) => {
    setTimelineStats(currentStat);

    if (currentStat == "text") {
      const filterTimelineText = timeline.filter(
        (timeL) => timeL.type == "text",
      );
      setFilterTimeline(filterTimelineText);
    } else if (currentStat == "show all") {
      setFilterTimeline(timeline);
    } else if (currentStat == "call") {
      const filterTimelineCall = timeline.filter(
        (timeL) => timeL.type == "call",
      );
      setFilterTimeline(filterTimelineCall);
    } else if (currentStat == "video") {
      const filterTimelineVideo = timeline.filter(
        (timeL) => timeL.type == "video",
      );
      setFilterTimeline(filterTimelineVideo);
    }
  };

  return (
    <div className="py-10 bg-[#F8FAFC]">
      <div className="w-[90%] sm:w-[70%] mx-auto ">
        <h1 className="text-4xl font-bold ">Timeline</h1>

        {/* dropdown  */}
        <div className=" py-7">
          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn m-1">
              {`${timelineStats == "show all" ? "Filter timeline" : ""}`}
              {`${timelineStats == "text" ? "Filter Text" : ""}`}
              {`${timelineStats == "call" ? "Filter Call" : ""}`}
              {`${timelineStats == "video" ? "Filter Video Call" : ""}`}
              ➡️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => handleTimelineStats("show all")}>
                <a>Show all</a>
              </li>
              <li onClick={() => handleTimelineStats("text")}>
                <a>Text</a>
              </li>
              <li onClick={() => handleTimelineStats("call")}>
                <a>Call</a>
              </li>
              <li onClick={() => handleTimelineStats("video")}>
                <a>Video</a>
              </li>
            </ul>
          </div>
        </div>

        {timeline.length > 0 ? (
          <div className=" space-y-3">
            {filterTimeline.map((time, ind) => (
              <TimelineShowCard key={ind} time={time}></TimelineShowCard>
            ))}
          </div>
        ) : (
          <TimelineNotfoundPage></TimelineNotfoundPage>
        )}
      </div>
    </div>
  );
};

export default TimeLine;
