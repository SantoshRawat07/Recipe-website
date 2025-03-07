import React from "react";
import food from "../assets/foodhub.jpeg";
import { NavLink } from "react-router-dom";

const FoodZone = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh] bg-[#fdfaf5] px-6 py-12 lg:px-16">
      {/* Left Section - Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <img
          src={food}
          alt="Delicious Food"
          className="w-4/5 sm:w-2/3 lg:w-3/4 rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
        <h3 className="text-orange-600 font-semibold text-lg">Welcome to FoodZone</h3>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 leading-tight">
          Best Food in Town Awaits You
        </h1>
        <p className="text-gray-600 mt-4 text-base sm:text-lg">
          A food festival is a celebration that brings people together to enjoy
          delicious dishes, share culinary traditions, and experience new flavors. 
          Come and explore a variety of tasty delights from around the world!
        </p>
        <NavLink to="/menu">
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            View Menu
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default FoodZone;
