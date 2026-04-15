import React from "react";
import { Link, NavLink } from "react-router";
import MyNavLink from "../MyNavLink/MyNavLink";
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const Navber = () => {
  return (
    <nav className="bg-base-100 sticky top-0 z-50 shadow-sm">
      <div className="navbar container mx-auto flex-col sm:flex-row items-start sm:items-center gap-2">
        <div className="flex-1">
          <Link to={'/'}>
          <h1 className="text-[#244D3F] text-2xl"><span className="text-black font-bold">Keen</span>Keeper</h1>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal space-x-2.5 px-1">
            <MyNavLink to={'/'} className="" ><IoHomeOutline /> Home</MyNavLink>
            <MyNavLink to={'/timeline'} className="" ><IoTimeOutline /> TimeLine</MyNavLink>
            <MyNavLink to={'/stats'} className="" ><TfiStatsUp /> Stats</MyNavLink>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
