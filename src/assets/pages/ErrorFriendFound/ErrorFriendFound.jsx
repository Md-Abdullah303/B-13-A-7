import React from "react";
import { useNavigate } from "react-router";

const ErrorFriendFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] text-center px-4">
      
      <h1 className="text-6xl font-bold text-red-500 mb-4">404 😵</h1>

      <h2 className="text-2xl font-semibold mb-2">
        Oops! This friend ghosted you 👻
      </h2>

      <p className="text-gray-600 mb-6 max-w-md">
        Looks like this friend doesn’t exist... or maybe they blocked you 😬  
        Try checking your list again!
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md transition duration-200"
      >
        🏠 Go Back Home
      </button>

      <p className="text-sm text-gray-400 mt-6">
        Or maybe it's time to make new friends 🤝
      </p>
    </div>
  );
};

export default ErrorFriendFound;