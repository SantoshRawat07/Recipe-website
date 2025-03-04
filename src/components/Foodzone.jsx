import React from "react";
import food from "../assets/foodhub.jpeg";
import { NavLink } from "react-router-dom";

const FoodZone = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh] bg-[#fdfaf5] p-10 -mt-12">
      {/* Left Section - Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          src={food}
          alt="Delicious Food"
          className="w-2/3 rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left p-5">
        <h3 className="text-orange-600 font-semibold text-lg">Welcome to FoodZone</h3>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Best food in town awaits you</h1>
        <p className="text-gray-600 mt-4">
          A food festival is a festival that uses food, often produce, as its central theme.
          These festivals have always been a means of uniting communities through
          celebrations of harvests and giving thanks for a plentiful growing season.
        </p>
        <NavLink to="/menu">
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
            View Menu
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default FoodZone;
