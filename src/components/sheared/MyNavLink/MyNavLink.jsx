import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ children, to, className }) => {
  // console.log(children, to);
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
      ${isActive && `bg-[#244D3F] text-white hover:bg-[#276450]`}
      ${isActive || `hover:bg-base-300`} 
      px-3 py-2 rounded-sm text[14px] font-semibold flex items-center gap-2 
      `}
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
