import React from "react";
import { NavLink } from "react-router";
import errorImg from "../../img/error-404.png";

const ErorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <img src={errorImg} alt="" />
      <h1 className="text-7xl font-bold text-gray-800 mb-4">404</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6 max-w-md">
        The page you are looking for might have been removed, renamed, or is
        temporarily unavailable.
      </p>

      <NavLink
        to="/"
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default ErorPage;
