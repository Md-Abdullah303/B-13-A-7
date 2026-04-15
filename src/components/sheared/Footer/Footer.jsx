import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] py-10 text-white">
      <div className="w-[90%] sm:container px-2 sm:px-5 mx-auto">
        <div className="flex items-center flex-col  gap-2">
          <h2 className="text-5xl font-extrabold">
            Keen<span className="font-semibold">Keeper</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div className="text-lg flex flex-col items-center gap-3">
            <p>Social Links</p>
            <div className="flex items-center gap-2">
                <div className="bg-white text-black p-1 text-lg rounded-full"><FaInstagramSquare /></div>
                <div className="bg-white text-black p-1 text-lg rounded-full"><FaSquareFacebook /></div>
                <div className="bg-white text-black p-1 text-lg rounded-full"><FaSquareXTwitter /></div>
            </div>
          </div>
        </div>
        <hr className="text-gray-400 my-7"/>
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-5 justify-between text-gray-400 text-sm">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex flex-col items-start sm:flex-row sm:items-center gap-5">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
