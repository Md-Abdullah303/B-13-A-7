import React from "react";
import callImg from "../../assets/img/call.png";
import taxtImg from "../../assets/img/text.png";
import videoCallPng from "../../assets/img/video.png";

const TimelineShowCard = ({ time }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg py-4 px-6 flex items-center gap-3.5">
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
        <p className="text-sm font-normal text-[#64748B]">{`${time.month} ${time.day} ${time.year}, ${time.time}`}</p>
      </div>
    </div>
  );
};

export default TimelineShowCard;
