import React from "react";
import { Link, NavLink } from "react-router";
import MyNavLink from "../MyNavLink/MyNavLink";

const Navber = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto flex-col sm:flex-row items-start sm:items-center gap-2">
        <div className="flex-1">
          <Link to={'/'}>
          <h1 className="text-[#244D3F] text-2xl"><span className="text-black font-bold">Keen</span>Keeper</h1>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal space-x-2.5 px-1">
            <MyNavLink to={'/'} className="" >Home</MyNavLink>
            <MyNavLink to={'/timeline'} className="" >TimeLine</MyNavLink>
            <MyNavLink to={'/stats'} className="" >Stats</MyNavLink>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
