import React from "react";
import { FiPlus } from "react-icons/fi";

const HeroBanner = () => {
  return (
    <div className="text-center space-y-3 pt-5 px-2">
      <h1 className="text-[#1F2937] font-bold md:text-5xl sm:text-3xl text-3xl">Friends to keep close in your life</h1>
      <p className="text-gray-400 sm:text-lg w-[90%] lg:w-[50%] mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] border-none text-white"><FiPlus /> Add a Friend</button>
    </div>
  );
};

export default HeroBanner;
