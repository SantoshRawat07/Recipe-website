import React, { useState } from "react";
import FoodCard from "./Recipescard.jsx";
import FoodData from "../data/RecipeData.js";
import { useSelector } from "react-redux";
import ViewRecipe from "./Viewrecipe.jsx";

const FoodItems = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleViewRecipe = (food) => {
    setSelectedFood(food);
  };

  const handleCloseRecipe = () => {
    setSelectedFood(null);
  };

  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-10 my-10 ms-16 me-5 h-200, w-500">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            onViewRecipe={() => handleViewRecipe(food)} // Pass function as prop
          />
        ))}
      </div>

      {/* Show ViewRecipe modal if a food item is selected */}
      {selectedFood && <ViewRecipe food={selectedFood} onClose={handleCloseRecipe} />}
    </>
  );
};

export default FoodItems;
