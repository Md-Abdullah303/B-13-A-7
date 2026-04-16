import React, { use } from "react";
import { TimelineDataContext } from "../../../context/TimelineContextProvider/TimelineDataContext";
import callImg from "../../img/call.png";
import taxtImg from "../../img/text.png";
import videoCallPng from "../../img/video.png";
import TimelineNotfoundPage from "../../../components/TimelineNotfoundPage/TimelineNotfoundPage";

const TimeLine = () => {
  const { timeline } = use(TimelineDataContext);
  console.log(timeline);

  return (
    <div className="py-10 bg-[#F8FAFC]">
      <div className="w-[90%] sm:w-[70%] mx-auto ">
        <h1 className="text-4xl font-bold ">Timeline</h1>

        {/* dropdown  */}
        <div className=" py-7">
          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter timeline ➡️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Text</a>
              </li>
              <li>
                <a>Call</a>
              </li>
              <li>
                <a>Video</a>
              </li>
            </ul>
          </div>
        </div>

        {
            timeline.length > 0 ? <div className=" space-y-3">
          {timeline.map((time, ind) => (
            <div
              className="bg-white border border-gray-300 rounded-lg py-4 px-6 flex items-center gap-3.5"
              key={ind}
            >
              <div className="">
                {time.type === "call" && <img src={callImg} alt="call img" />}
                {time.type === "video" && <img src={videoCallPng} alt="call img" />}
                {time.type === "text" && <img src={taxtImg} alt="call img" />}
              </div>
              <div className="">
                <h1 className="text-xl font-bold text-[#244D3F]">
                  {time.type}{" "}
                  <span className="text-sm font-normal text-[#64748B]">
                    with {time.name}
                  </span>
                </h1>
                <p className="text-sm font-normal text-[#64748B]">{`${time.month} ${time.day} ${time.year}`}</p>
              </div>
            </div>
          ))}
        </div> : <TimelineNotfoundPage></TimelineNotfoundPage> 
        }
      </div>
    </div>
  );
};

export default TimeLine;
